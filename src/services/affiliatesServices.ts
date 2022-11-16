import { createTransactionsData } from "../repositories/affiliatesRepositories.js";
import { sanitizer } from "../utils/affiliatesUtils.js";

export async function saveData(listData: string[]) {
  const data = sanitizer(listData);

  await createTransactionsData(data)

  console.log(data);
}