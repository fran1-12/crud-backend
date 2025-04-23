# Imagen base
FROM node:18

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer puerto del backend
EXPOSE 3001

# Comando para ejecutar la app
CMD ["node", "server.js"]



