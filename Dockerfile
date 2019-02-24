FROM python:3.6-slim-stretch
RUN apt-get update -y
RUN apt-get install -y gnupg curl
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get update -y
RUN apt-get install -y \
    gcc \
    libjpeg-dev libpq-dev libxml2-dev libxslt1-dev zlib1g-dev \
    nodejs
RUN pip install -U pip
COPY . /app
WORKDIR /app
RUN mkdir -p .media
RUN pip install -r requirements.txt
RUN npm install
RUN npm run production
