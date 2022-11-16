import pkg from "@prisma/client";
import { createTransactionsData } from "../utils/affiliatesUtils";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export async function createTransactionsData(transactionsData: createTransactionsData[]) {
  await prisma.transactions.createMany({
    data: transactionsData,
  });
}