# Imagen
FROM node:20

# Carpeta de trabajo
WORKDIR /app

# Copiar archivos
COPY  package*.json ./
COPY index.js ./

# Instalar dependencias
RUN npm install

# Exponer puerto
EXPOSE 5000

# Comando de inicio
CMD [ "npm", "start" ]