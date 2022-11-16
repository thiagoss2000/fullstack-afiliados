import pkg from "@prisma/client";
import { createTransactionsDataType } from "../services/affiliatesServices";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function createTransactionsData(transactionsData: createTransactionsDataType[]) {
  await prisma.transactions.createMany({
    data: transactionsData,
  });
}

const affiliatesRepositories = {
  createTransactionsData
}

export default affiliatesRepositories;