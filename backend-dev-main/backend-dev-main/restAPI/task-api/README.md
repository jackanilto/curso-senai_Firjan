Task API — Fastify + Prisma + JWT

A Task API é um projeto desenvolvido para estudos e prática de criação de APIs modernas utilizando Fastify, Prisma ORM, SQLite, JWT e documentação automática com Swagger.
O objetivo principal é fornecer uma API completa para gerenciamento de tarefas (To-Do List) com autenticação, filtros e operações CRUD.

💻 Funcionalidades

Autenticação JWT: Login e geração de token para acesso às rotas protegidas.

CRUD de Tarefas:

Criar tarefas

Listar tarefas

Atualizar tarefas

Excluir tarefas

Filtros por status:

Tarefas concluídas

Tarefas pendentes

Documentação via Swagger: Interface automática para testar rotas.

Integração com SQLite via Prisma ORM.

🛠️ Tecnologias

Node.js — Plataforma principal

Fastify — Framework backend

Prisma ORM — Manipulação de banco de dados

SQLite — Banco utilizado no curso

JWT — Autenticação

UUID — Identificação única

Dotenv — Variáveis de ambiente

Nodemailer — Envio de e-mails

Swagger / Swagger UI — Documentação da API

Nodemon — Hot reload no ambiente de desenvolvimento

⚙️ Como Rodar o Projeto
Requisitos

Node.js 18+

NPM ou Yarn

Não é necessário instalar SQLite manualmente (Prisma cria o arquivo)

📦 Instalação

Clone o repositório:

git clone https://github.com/SEU_USUARIO/task-api.git


Acesse o diretório do projeto:

cd task-api


Instale as dependências:

npm install

🗄️ Configuração do Prisma

Inicialize o Prisma:

npx prisma init --datasource-provider sqlite


Crie o banco e aplique o schema:

npx prisma migrate dev --name init


Gere o Prisma Client:

npx prisma generate

🔐 Crie o arquivo .env

Crie um arquivo chamado .env na raiz e adicione:

JWT_SECRET=supersecret
PORT=3333

▶️ Executando o Servidor

Use o comando:

npm run dev


A API estará disponível em:

http://localhost:3333


A documentação Swagger:

http://localhost:3333/docs

📘 Rotas Principais
🔑 Autenticação

POST /login → Retorna um token JWT.

📝 Tarefas (todas protegidas por token JWT)

GET /tasks → Lista todas as tarefas

POST /tasks → Cria uma nova tarefa

PUT /tasks/:id → Atualiza uma tarefa

DELETE /tasks/:id → Remove uma tarefa

GET /tasks/filter?status=done → Filtra tarefas concluídas ou pendentes

Para acessar essas rotas, envie o header:
Authorization: Bearer SEU_TOKEN_AQUI

📝 Contribuições

Este projeto tem foco educacional, mas contribuições são bem-vindas para melhoria do código ou adição de novas funcionalidades.
Sinta-se à vontade para fazer fork, enviar pull requests ou abrir issues.

📄 Licença

Este projeto é de código aberto.
Consulte o arquivo LICENSE caso exista no repositório.
