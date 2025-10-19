# 1. Imagen base con Node
FROM node:18

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar package.json y package-lock.json
COPY package*.json ./

# 4. Instalar solo dependencias de producción + TypeScript para compilar
RUN npm install

# 5. Copiar todo el código fuente
COPY . .

# 6. Compilar TypeScript a JS
RUN npx tsc

# 7. Puerto que expondrá el contenedor
EXPOSE 8080

# 8. Comando por defecto para iniciar la app
CMD ["node", "dist/src/app.js"]
