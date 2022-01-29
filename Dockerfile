FROM alpine:3.14

RUN apk add --no-cache python3 py3-pip
RUN apk add --no-cache jq

RUN pip install proselint

COPY ./posts /posts

CMD proselint --json /posts/* | jq '.data.errors[] | select(.check != "typography.symbols.curly_quotes") | select(.check != "leonard.exclamation.30ppm") | select(.check != "typography.symbols.ellipsis")'