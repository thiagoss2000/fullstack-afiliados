import pkg from "@prisma/client";
import { createTransactionsDataType } from "../services/affiliatesServices";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function createTransactionsData(transactionsData: createTransactionsDataType[]) {
  await prisma.transactions.createMany({
    data: transactionsData,
  });  
}

async function findSellers() {
  return await prisma.transactions.findMany({
    distinct: ['name'],
    select: { name: true }
  });
}

async function findTransactions(name: string) {
  return await prisma.transactions.findMany({
    where: { name },
    include: {
      types: true
    }
  });
}

const affiliatesRepositories = {
  createTransactionsData,
  findSellers,
  findTransactions
}

export default affiliatesRepositories;
