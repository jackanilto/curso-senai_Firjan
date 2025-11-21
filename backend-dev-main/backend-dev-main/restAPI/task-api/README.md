📌 Task API — Fastify + Prisma + JWT

API de gerenciamento de tarefas (To-Do List) desenvolvida com Fastify, Prisma, JWT e SQLite.
Projeto baseado nas aulas do curso SENAI/Firjan.

🚀 Tecnologias utilizadas

Node.js

Fastify

Prisma ORM

SQLite (banco padrão do curso)

JWT (Autenticação)

Swagger + Swagger UI

UUID

Dotenv

Nodemailer

Nodemon

📦 Instalação do projeto
1️⃣ Clonar o repositório
git clone https://github.com/SEU_REPOSITORIO/task-api.git
cd task-api

🔧 Instalar dependências
npm install fastify @fastify/swagger @fastify/swagger-ui @fastify/cors dotenv uuid nodemailer fastify-jwt

Prisma
npm install prisma --save-dev
npm install @prisma/client

🗄️ Inicializar o Prisma + SQLite
npx prisma init --datasource-provider sqlite


Crie o banco e gere o client:

npx prisma migrate dev --name init
npx prisma generate

🧱 Estrutura inicial do projeto
task-api/
 ├── prisma/
 │    ├── schema.prisma
 ├── src/
 │    ├── server.js
 │    ├── routes/
 │    │      ├── auth.js
 │    │      ├── tasks.js
 │    ├── middlewares/
 │    │      ├── auth.js
 ├── .env
 ├── package.json
 ├── README.md

⚙️ Scripts disponíveis

Adicione ao package.json:

"scripts": {
  "dev": "nodemon src/server.js"
}


Rodar a aplicação:

npm run dev

🔐 Arquivo .env

Crie um arquivo .env com:

JWT_SECRET=supersecret
PORT=3333

📘 Rotas da API
🔑 Autenticação (PÚBLICA)
POST /login

Realiza login e retorna um token JWT.

Body:

{
  "email": "email@teste.com",
  "password": "123456"
}


Resposta:

{
  "token": "JWT_GERADO_AQUI"
}

📝 Tasks (PROTEGIDAS)

Necessita enviar o token no header:
Authorization: Bearer SEU_TOKEN

GET /tasks

Lista todas as tarefas do usuário autenticado.

POST /tasks
{
  "title": "Estudar Node.js",
  "description": "Assistir aula 5",
  "done": false
}

PUT /tasks/:id

Atualiza a tarefa.

DELETE /tasks/:id

Remove a tarefa.

GET /tasks/filter?status=done

Retorna somente tarefas concluídas ou pendentes.

🛡️ Middleware de Autenticação

O middleware authMiddleware protege todas as rotas com prefixo /tasks.

app.addHook("preHandler", authMiddleware);


Se o token estiver incorreto ou ausente, retorna:

{ "error": "Token inválido ou ausente" }

📚 Documentação Swagger

Acesse:

http://localhost:3333/docs

▶️ Como testar a API

1️⃣ Fazer login
2️⃣ Copiar o token JWT retornado
3️⃣ Colar o token no header das chamadas protegidas:

Authorization: Bearer SEU_TOKEN_AQUI


4️⃣ Testar rotas no Postman, Insomnia ou Swagger UI.

📂 Banco de dados (Prisma)

Exemplo de modelo no schema.prisma:

model Task {
  id          String   @id @default(uuid())
  title       String
  description String?
  done        Boolean  @default(false)
  createdAt   DateTime @default(now())
}

🔥 Inicialização do servidor
npm run dev


Retorna:

{ "status": "API Tasks Online!" }

🧑‍💻 Autor

Projeto criado para fins didáticos no curso SENAI/Firjan.
Desenvolvido por Janilto Oliveira.