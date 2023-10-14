CREATE DATABASE AppVersionRepository

USE AppVersionRepository


create TABLE appsLista (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    publicada DATE,
    url VARCHAR(255),
    descargas INT,
    estatus BIT,
    version VARCHAR(20),
	ultimaDescarga DATE
);

select * from appsLista

SELECT TOP 2 id, nombre, version, descargas, publicada, url, estatus, ultimaDescarga
FROM appsLista
ORDER BY descargas DESC;

SELECT TOP 1 id, nombre, version, ultimaDescarga
FROM appsLista
ORDER BY ultimaDescarga DESC;