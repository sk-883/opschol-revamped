import { PrismaClient } from '@repo/db'
const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body;
    try {
      const customer = await prisma.customer.create({
        data: { firstName, lastName, email },
      });
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
