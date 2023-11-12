-- Este comando conectará a la base de datos llamada 'mydatabase'
\connect mydatabase

-- Se crea la tabla 'Cosenos'
CREATE TABLE Cosenos
(
    Id serial PRIMARY KEY,
    Nombre VARCHAR (255) NOT NULL,
    Valor_Coseno DOUBLE PRECISION NOT NULL
);

-- Se cambia el propietario de la tabla a 'myuser'
ALTER TABLE "Cosenos" OWNER TO myuser;

-- Se insertan datos en la tabla 'Cosenos'
Insert into Cosenos(Nombre, Valor_Coseno) values( 'Prueba', 0.5);
