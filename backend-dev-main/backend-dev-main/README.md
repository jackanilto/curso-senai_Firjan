README — Task API (Fastify + Prisma + JWT)
🚀 Visão Geral

Esta é uma API de gerenciamento de tarefas (To-Do List) desenvolvida com:

Fastify 5

Prisma ORM

SQLite como banco de dados

JWT para autenticação

Swagger / OpenAPI

Nodemailer

UUID

Nodemon para desenvolvimento

O projeto segue uma arquitetura simples, bem organizada e ideal para estudos, cursos e aplicações reais.

📂 Estrutura do Projeto
task-api/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middlewares/
│   │   └── auth.js
│   ├── server.js
│   └── utils/ (opcional)
│
├── .env
├── package.json
└── README.md

📦 Tecnologias Utilizadas
Tecnologia	Uso
Fastify	Servidor HTTP
Prisma ORM	Acesso ao banco de dados
SQLite	Banco local
JWT	Autenticação
Nodemailer	Envio de e-mails (opcional)
UUID	Identificadores únicos
Swagger	Documentação da API
Dotenv	Variáveis de ambiente
Nodemon	Auto-reload em desenvolvimento
🔧 Instalação
1. Clone o repositório
git clone https://github.com/seu_usuario/task-api.git
cd task-api

2. Instale as dependências
npm install

⚙️ Configuração do Prisma
Inicializar o projeto Prisma
npx prisma init --datasource-provider sqlite

Gerar o banco e aplicar a primeira migração
npx prisma migrate dev --name init

Gerar o client
npx prisma generate

🔐 Variáveis de Ambiente (.env)

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="file:./dev.db"
JWT_SECRET="supersecret"

▶️ Executar o servidor
npm run dev


O servidor ficará disponível em:

http://localhost:3333

📘 Swagger — Documentação da API

Após iniciar a API, acesse:

http://localhost:3333/docs


A partir daí você consegue testar todas as rotas.

🔑 Autenticação JWT

Este projeto utiliza JWT para proteger as rotas de tarefas.

Rotas que NÃO exigem token:

POST /register

POST /login

GET /

Rotas protegidas (precisam de token):

GET /tasks

POST /tasks

PUT /tasks/:id

DELETE /tasks/:id

O token deve ser enviado no header:

Authorization: Bearer SEU_TOKEN_AQUI

🧪 Rotas da API
📌 1. Autenticação
🔹 POST /register

Cadastra um novo usuário.

Body:

{
  "name": "Janilto",
  "email": "email@test.com",
  "password": "123456"
}

🔹 POST /login

Faz login e retorna um token JWT.

Body:

{
  "email": "email@test.com",
  "password": "123456"
}


Retorno:

{
  "token": "eyJhbGciOiJIUzI1..."
}

📌 2. Tarefas (Rotas protegidas)
🔹 GET /tasks

Lista todas as tarefas do usuário autenticado.

🔹 POST /tasks

Cria uma nova tarefa.

Body:

{
  "title": "Estudar Fastify"
}

🔹 PUT /tasks/:id

Atualiza título ou status.

Body:

{
  "title": "Estudar Fastify e Prisma",
  "done": true
}

🔹 DELETE /tasks/:id

Remove uma tarefa.

🗃️ Modelos do Prisma
User
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  tasks     Task[]
}

Task
model Task {
  id        String   @id @default(uuid())
  title     String
  done      Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  userId    String
  user      User     @relation(fields: [userId], references: [id])
}

🛡️ Middleware de Autenticação

O arquivo src/middlewares/auth.js verifica o JWT:

export async function authMiddleware(request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.code(401).send({ error: "Token inválido ou ausente" });
  }
}

📩 Opcional — Envio de E-mails (Nodemailer)

O projeto possui Nodemailer instalado e pode enviar e-mails, por exemplo para:

Recuperação de senha

Confirmação de conta

Notificações

Configuração típica:

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

📜 Licença

Este projeto é livre para uso nos seus estudos, cursos e projetos pessoais.
