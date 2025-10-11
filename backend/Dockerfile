FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci --production
COPY dist ./dist
CMD ["node", "dist/src/app.js"]

