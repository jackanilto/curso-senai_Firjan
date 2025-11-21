import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import fastifyJWT from "@fastify/jwt";
import dotenv from "dotenv";

import { authRoutes } from "./routes/auth.js";
import { taskRoutes } from "./routes/tasks.js";
import { authMiddleware } from "./middlewares/auth.js";

dotenv.config();

const app = Fastify({ logger: true });

// Prisma
app.decorate("prisma", new PrismaClient());

// Plugins
await app.register(cors);
await app.register(swagger, {
  swagger: {
    info: {
      title: "Task API",
      version: "1.0.0",
    },
  },
});
await app.register(swaggerUI);

// JWT
await app.register(fastifyJWT, {
  secret: process.env.JWT_SECRET || "supersecret",
});

// Rotas públicas
app.register(authRoutes);

// Rotas protegidas
app.register(async function (protectedRoutes) {
  protectedRoutes.addHook("preHandler", authMiddleware);
  protectedRoutes.register(taskRoutes);
}, { prefix: "/tasks" });

// Rota inicial
app.get("/", () => {
  return { status: "API Tasks Online!" };
});

// Iniciar servidor
app
  .listen({ port: process.env.PORT || 3333, host: "0.0.0.0" })
  .then(() => console.log("🚀 Servidor Online"));
