import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import fastifyJWT from "@fastify/jwt";     
import dotenv from "dotenv";

import { taskRoutes } from "./routes/tasks.js"; // Minhas rotas

dotenv.config();

const prisma = new PrismaClient();
const app = Fastify({ logger: true });

// Plugins
await app.register(cors);

await app.register(swagger, {
  swagger: {
    info: { title: "Task API", version: "1.0.0" },
  },
});
await app.register(swaggerUI);

// 👉 REGISTRE O JWT AQUI
app.register(fastifyJWT, {
  secret: process.env.JWT_SECRET || "supersecret"
});

// Rotas públicas
app.get("/", () => {
  return { status: "API Tasks Online!" };
});

// Rotas da aplicação
app.register(taskRoutes);

// Iniciar servidor
app.listen({ port: process.env.PORT || 3333, host: "0.0.0.0" })
  .then(() => console.log("🚀 Servidor Online"));
