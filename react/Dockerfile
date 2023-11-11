# Esta es la imagen de node para construir y ejecutar aplicaciones JavaScript/Node.js
FROM node:14 AS build

# Establecer el directorio de trabajo en la raíz del proyecto
WORKDIR /app

# Copiar el archivo de configuración de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todos los archivos del proyecto React
COPY . .

# Construir la aplicación React
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar la aplicación construida desde la etapa de compilación
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando de inicio del servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
