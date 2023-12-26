FROM node:19.7.0

LABEL version="1.0"
# LABEL description="This is the base docker image for the Tweet Sentiment Analysis backend API."
# LABEL maintainer = ["danielmurph8@gmail.com", "dylanedwards290@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 3001

CMD ["node", "server.js"]