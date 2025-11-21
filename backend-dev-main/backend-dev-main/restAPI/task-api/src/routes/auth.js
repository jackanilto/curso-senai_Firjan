import bcrypt from "bcryptjs";

export async function authRoutes(app) {

  // CADASTRO
  app.post("/register", async (req, reply) => {
    const { name, email, password } = req.body;

    const userExists = await app.prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      return reply.code(400).send({ error: "Email já cadastrado." });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await app.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPass
      }
    });

    return reply.code(201).send({
      id: user.id,
      name: user.name,
      email: user.email
    });
  });

  // LOGIN
  app.post("/login", async (req, reply) => {
    const { email, password } = req.body;

    const user = await app.prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return reply.code(400).send({ error: "Usuário não encontrado." });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return reply.code(400).send({ error: "Senha inválida." });
    }

    const token = app.jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      { expiresIn: "1h" }
    );

    return reply.send({ token });
  });

}
