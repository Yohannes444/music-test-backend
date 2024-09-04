FROM node:18-alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 5500

ENV PORT=5500

CMD ["npm","run", "start"]
