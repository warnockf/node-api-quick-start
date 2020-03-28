# Build phase
FROM node:12.4-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install && npm run build

# Run phase
FROM node:10.17-alpine

ENV NODE_ENV=production

WORKDIR /app
COPY package*.json ./
COPY .env ./

RUN npm install && npm cache clean --force

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD [ "npm", "run", "start" ]
