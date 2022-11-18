## This is a challenge by Coodesh

## Projeto FullStack-Afiliados

A aplicação consiste em dois sistemas individuais de frontend e backend
que possibilitam o upload de um arquivo txt e a armazenagem dos dados em 
um banco relacional, possibilitando o acesso aos dados em lista organizados
pelo nome do fornecedor

Linguagens e tecnologias utilizadas: 
  Javascript, typescript, html, css, yml, json
  NodeJs, React, Postgresql, jest, supertest, docker,
  prisma, git, joi, jwt, bycrypt, axios, express, 
  styled-compontents, multer

## Para iniciar a aplicação back-end
**na pasta back-end execute**

Primeiro instale as dependencias

### `npm i`

Em seguida inicie crie o banco de dados
**Importante: precisa ter postgressql instalado na maquina**

### `envFile`

necessário um documento .env com

  PORT={porta para servidor}

  DATABASE_URL=postgresql://{username}:{password}@{host}:{porta}/affiliates

  ENCRYPTPASSWORD={chave de encriptação hash 256}

**Para subir com docker-compose o host deve ser "db_affiliates"**

Para subir o back-end com docker-compose

### `docker-compose build && docker-compose up`

Para criar o banco de dados

### `npx prisma generate && npx prisma migrate dev`

Caso queira executar os testes 

### `npm run test`

Para iniciar a aplicação

### `npm start`

## Para iniciar a aplicação front-end
**na pasta front-end execute**

Primeiro instale as dependencias

### `npm i`

Para iniciar a aplicação

### `npm start`
