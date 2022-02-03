FROM node:15.7-alpine

ENV NODE_ENV=production

RUN addgroup -g 1017 -S appgroup \
  && adduser -u 1017 -S appuser -G appgroup \
  && apk update \
  && apk add build-base python

WORKDIR /app

COPY package*.json ./

COPY app/ ./app
COPY assessments-api-client ./assessments-api-client
COPY docs/ ./docs
COPY gulp/ ./gulp
COPY lib/ ./lib
COPY *.js ./
COPY start.sh ./

RUN npm install

RUN chown -R appuser:appgroup /app

USER 1017

RUN chmod +x start.sh

CMD ["./start.sh"]