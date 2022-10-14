CREATE DATABASE IF NOT EXISTS jogopda DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE jogopda;

CREATE TABLE IF NOT EXISTS usuario(
  idusuario BIGINT NOT NULL AUTO_INCREMENT,
  dt INT NOT NULL,
  PRIMARY KEY (idusuario)
);

CREATE TABLE IF NOT EXISTS registro (
  idregistro BIGINT NOT NULL AUTO_INCREMENT,
  competencia INT NOT NULL,
  pergunta INT NOT NULL,
  resposta INT NOT NULL,
  idusuario BIGINT NOT NULL,
  PRIMARY KEY (idregistro),
  CONSTRAINT registro_usuario
    FOREIGN KEY (idusuario)
    REFERENCES usuario (idusuario)
);
