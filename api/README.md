# Projeto da API

Este projeto é uma API construída com Node.js e TypeScript, e é executada dentro de um contêiner Docker.

## Pré-requisitos

- Docker
- Docker Compose

## Como rodar o projeto

1. **Clone o repositório**:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO>
   ```

2. **Configure o arquivo `.env`**:
   Certifique-se de que o arquivo `.env` está configurado corretamente com todas as variáveis de ambiente necessárias.

3. **Construa e inicie o contêiner**:
   Execute o seguinte comando para construir e iniciar o contêiner:

   ```bash
   docker-compose up --build
   ```

4. **Acesse a API**:
   A API estará disponível em `http://localhost:3333`.

## Scripts disponíveis

- `npm start`: Inicia a aplicação.
- `npm run build`: Compila o código TypeScript.

## Estrutura do projeto

- `src/`: Contém o código fonte da aplicação.
- `dist/`: Contém o código compilado.
- `Dockerfile`: Configuração do Docker para o projeto.
- `docker-compose.yml`: Configuração do Docker Compose.

## Notas

- Certifique-se de que o Docker está rodando antes de executar os comandos.
- Verifique os logs do contêiner para diagnosticar problemas com:
  ```bash
  docker-compose logs
  ```
