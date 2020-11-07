FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-12

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get upgrade \
    && apt-get -y install --no-install-recommends \ 
    python3-pip \
    && pip3 install setuptools \
    && pip3 install proselint

RUN mkdir -p ~/.config/proselint