---
title: "Adding contextual serialization in Ktor"
author: "Simon Nyström"
date: "2021-01-15"
tags: ["kotlin", "ktor"]
slug: "ktor-contextual-serialization"
---

## What is Ktor?

Ktor is a Kotlin framework for building web applications and HTTP services.

This blog post will focus on an issue I ran into recently in regards to JSON serialization when using Ktor (adding contextual serialization).

If you're into Kotlin and you haven't tried Ktor yet, I highly suggest you try it out. You can read more about Ktor [here](https://ktor.io/docs/welcome.html).

---

## JSON Serialization in Ktor

The process of turning objects into JSON data is a common task and most of the time it's a non-issue; turning an `Int` into a JSON number is simple, turning a `String` into a JSON string is simple and so on. Eventually you will run into a situation where you need to either customize your serialization logic or provide a serialization implementation for a non-primitive value.

<br/>

The [Ktor docs](https://ktor.io/docs/serialization.html) are great as a start and they even show you how to use three built-in converters (`Gson`, `Jackson` and `kotlinx.serialization`). For my project I'm using `kotlinx.serialization` and the issue at hand will be solved for that converter, but the concept is the same for the others.

<br/>

A minimal `Ktor` setup with JSON serialization might look like this:

```kotlin
@Serializable
data class Response(private val value: String)

fun main() {
    embeddedServer(Netty, port = 8080, host = "127.0.0.1") {
        install(ContentNegotiation) {
            json()
        }
        routing {
            get("/") {
                call.respond(Response("Hello World!"))
            }
        }
    }.start(wait = true)
}
```

As expected, visiting http://localhost:8080 returns the following:

```json
{
  "value": "Hello World!"
}
```

---

## The Issue

Let's illustrate a case where you might run into an issue.

<br/>

In my project, I want failing requests, those that generate server-side exceptions, to translate these exceptions into response objects with the properties `errorMessage` and `statusCode`.

<br />

One might start by attempting the following:

```kotlin
@Serializable
data class DuplicateEntryException(
    private val errorMessage: String,

    @Contextual // Required, this specifies that this converter is expected to be found during runtime
    private val statusCode: HttpStatusCode = HttpStatusCode.Conflict
) : RuntimeException(errorMessage)

fun main() {
    embeddedServer(Netty, port = 8080, host = "127.0.0.1") {
        install(ContentNegotiation) {
            json()
        }
        routing {
            get("/") {
                // Faked error for simplicity's sake
                call.respond(DuplicateEntryException("This entry already exists"))
            }
        }
    }.start(wait = true)
}
```

Starting the project now and visiting http://localhost:8080 will result in the following exception:

```json
kotlinx.serialization.SerializationException: Serializer for class 'HttpStatusCode' is not found.
```

---

## The Solution

As the exception is telling us, we need to register a serializer for the `HttpStatusCode` type. There are two ways of doing this, depending on your use case. I will illustrate both variants below.

<br/>

Our first order of business, which will be used in both solutions, is to define the custom serializer:

```kotlin
object HttpStatusCodeSerializer : KSerializer<HttpStatusCode> {

    override fun deserialize(decoder: Decoder): HttpStatusCode =
        HttpStatusCode.fromValue(decoder.decodeInt())


    override fun serialize(encoder: Encoder, value: HttpStatusCode) {
        encoder.encodeInt(value.value)
    }

    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("HttpStatusCode", PrimitiveKind.INT)
}
```

Basically, turn the `HttpStatusCode` object into a primitive type, `Int` in this case.

<br/>

Next up we need to use this, the first way is to add it to our `json()` converter definition, like so:

```kotlin
fun main() {
    embeddedServer(Netty, port = 8080, host = "127.0.0.1") {
        install(ContentNegotiation) {
            json(Json {
                serializersModule = SerializersModule {
                    contextual(HttpStatusCode::class) { HttpStatusCodeSerializer}
                }
            })
        }
        routing {
            get("/") {
                // Faked error for simplicity's sake
                call.respond(DuplicateEntryException("This entry already exists"))
            }
        }
    }.start(wait = true)
}
```

I prefer this solution when you want your serialization to be easily reusable, for example `DuplicateEntryException` is generic enough to be reused across use cases in the project.

<br/>

If you want to customize serialization in a more localized fashion, something that might only be used for some specific purpose, you can do the following instead:

```kotlin
@Serializable
data class DuplicateEntryException(
    private val errorMessage: String,

    @Contextual
    @Serializable(with = HttpStatusCodeSerializer::class) // Inform which Serializer to use for this property
    private val statusCode: HttpStatusCode = HttpStatusCode.Conflict
) : RuntimeException(errorMessage)
```

---

## Resources

If you want to learn more about `Ktor` or `kotlinx.serialization`, you can read more at the following resources:

- [Content negotiation and serialization](https://ktor.io/docs/serialization.html)
- [kotlinx.serialization for Ktor](https://ktor.io/docs/kotlin-serialization.html)
- [kotlinx.serialization at GitHub](https://github.com/Kotlin/kotlinx.serialization)
