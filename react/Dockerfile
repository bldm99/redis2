# Etapa de construcción
#FROM node:18-alpine3.17 as build
#WORKDIR /app
#COPY . /app
#RUN npm install
#RUN npm run build

# Etapa de producción
#FROM nginx:alpine
#COPY --from=build /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


# Usa una imagen base con Node.js
FROM node:14-alpine

# Establece el directorio de trabajo en la aplicación React
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Compila la aplicación React
RUN npm run build

# Expone el puerto 3000 para acceder a la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación cuando el contenedor se ejecute
CMD ["npm", "start"]

