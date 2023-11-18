-- init.sql
\connect postgres

-- Se crea la tabla 'Vecinos'
CREATE TABLE Vecinos
(
    Id serial PRIMARY KEY,
    Id_vecino VARCHAR (255) NOT NULL,
    Distancia DOUBLE PRECISION NOT NULL
);

-- Se cambia el propietario de la tabla a 'myuser'
ALTER TABLE "Vecinos" OWNER TO postgres;

-- Se insertan datos en la tabla 'Cosenos'
Insert into Vecinos(Id_vecino, Distancia) values( 'Prueba', 0.5);
Insert into Vecinos(Id_vecino, Distancia) values( 'Prueba2', 0.9);
Insert into Vecinos(Id_vecino, Distancia) values( 'Prueba3', 0.11);