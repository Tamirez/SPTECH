CREATE DATABASE filme;
USE filme;

CREATE TABLE usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (45),
sexo VARCHAR (3),
email VARCHAR (45),
senha VARCHAR (45),
fkfavorito INT, 
FOREIGN KEY (fkfavorito) REFERENCES favorito(id_favs)
) AUTO_INCREMENT = 10;

CREATE TABLE favorito (
id_favs INT PRIMARY KEY AUTO_INCREMENT,
diretor_fav VARCHAR (45),
genero_fav VARCHAR (45)
);



