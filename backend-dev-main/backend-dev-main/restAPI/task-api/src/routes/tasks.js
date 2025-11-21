export async function taskRoutes(app) {

  // CREATE
  app.post("/tasks", async (request, reply) => {
    const { title } = request.body;

    const task = await app.prisma.task.create({
      data: { title }
    });

    return reply.code(201).send(task);
  });

  // READ all
  app.get("/tasks", async () => {
    return app.prisma.task.findMany();
  });

  // READ filtradas
  app.get("/tasks/status/:state", async (req) => {
    const { state } = req.params;

    return app.prisma.task.findMany({
      where: { done: state === "done" }
    });
  });

  // UPDATE
  app.put("/tasks/:id", async (req) => {
    const { id } = req.params;
    const { title, done } = req.body;

    return app.prisma.task.update({
      where: { id },
      data: { title, done }
    });
  });

  // DELETE
  app.delete("/tasks/:id", async (req) => {
    const { id } = req.params;

    await app.prisma.task.delete({ where: { id } });

    return { message: "Tarefa Deletada!" };
  });
}