CREATE DATABASE AppVersionRepository

USE AppVersionRepository


create TABLE appsLista (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    publicada DATE,
    url VARCHAR(255),
    descargas INT,
    estatus BIT,
    version VARCHAR(20) --
);

