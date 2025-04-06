# Dockerfile
FROM node:16-alpine

# Directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
