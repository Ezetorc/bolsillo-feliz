# 1️⃣ Imagen base
FROM node:18

# 2️⃣ Directorio de trabajo
WORKDIR /app

# 3️⃣ Copiar package.json y package-lock.json
COPY package*.json ./

# 4️⃣ Instalar dependencias
RUN npm install

# 5️⃣ Copiar todo el código fuente
COPY . .

# 6️⃣ Generar cliente de Prisma
RUN npx prisma generate

# 7️⃣ Compilar TypeScript
RUN npx tsc

# 8️⃣ Puerto que expondrá el contenedor (Render usará la variable PORT)
ENV PORT=3000
EXPOSE $PORT

# 9️⃣ Comando por defecto para iniciar la app
CMD ["node", "dist/src/app.js"]
