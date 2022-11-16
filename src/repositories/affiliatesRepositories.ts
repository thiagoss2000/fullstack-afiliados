import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export async function createTransactionsData(transactionsData) {
  await prisma.transactions.createMany({
    data: transactionsData,
  });
}