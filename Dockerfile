FROM alpine:3.14

RUN apk add --no-cache python3 py3-pip
RUN apk add --no-cache jq

RUN pip install proselint

COPY ./pages/posts /posts

CMD proselint --json /posts/* | jq '.data.errors[] | select(.check != "typography.symbols.curly_quotes")'