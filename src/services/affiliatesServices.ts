import { createTransactionsData } from "../repositories/affiliatesRepositories.js";
import { sanitizer } from "../utils/affiliatesUtils.js";

export type transactionsData = {
  id: number
  type: number
  date: string
  product: string
  price: number
  name: string
}

export async function saveData(listData: string[]) {
  const data = sanitizer(listData);

  await createTransactionsData(data)

  console.log(data);
}