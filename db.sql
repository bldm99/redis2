-- init.sql
\connect postgres


CREATE TABLE Users
(
    Id serial PRIMARY KEY,
    Conteo VARCHAR (255) NOT NULL,
    Conteo  DOUBLE PRECISION NOT NULL
);

-- Se cambia el propietario de la tabla a 'myuser'
--ALTER TABLE "Users" OWNER TO postgres;

-- Se insertan datos en la tabla 'Cosenos'
--Insert into Users(Nombre, Valor_Coseno) values( 'Prueba', 0.5);
--Insert into Users(Nombre, Valor_Coseno) values( 'Prueba2', 0.9);
--Insert into Users(Nombre, Valor_Coseno) values( 'Prueba3', 0.11);