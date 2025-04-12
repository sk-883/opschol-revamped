import { createServer } from "./server";
import { log } from "@repo/logger";
import { PrismaClient } from '@repo/db';
const port = process.env.PORT || 3001;
const server = createServer();
const prisma = new PrismaClient();
server.post('/create-customer', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const customer = await prisma.customer.create({
      data: { firstName, lastName, email },
    });
    res.status(200).json(customer);
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});
server.listen(port, () => {
  log(`api running on ${port}`);
});
