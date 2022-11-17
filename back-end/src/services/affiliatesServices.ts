import affiliatesRepositories from "../repositories/affiliatesRepositories.js";
import { dataSchema } from "../schemas/dataSchema.js";

export type transactionsData = {
  id: number
  type: number
  date: string
  product: string
  price: number
  name: string
}

async function searchSellers() {
  return await affiliatesRepositories.findSellers();
}

async function searchTransactions(seller: string) {
 return await affiliatesRepositories.findTransactions(seller);
}

async function saveData(listData: string[]) {
  const data = sanitizer(listData);

  await affiliatesRepositories.createTransactionsData(data)

  console.log(data);
}

export type createTransactionsDataType = Omit<transactionsData, "id">;

function sanitizer(list: string[]) {
  let data: createTransactionsDataType[] = [];
  list.forEach(e => {
    if (e.length > 0) {
      const obj = {
        type: parseInt(e.slice(0, 1).trim()),
        date: e.slice(1, 26).trim(),
        product: e.slice(26, 56).trim(),
        price: parseInt(e.slice(56, 66).trim()),
        name: e.slice(66, 86).trim()
      }    
      validateSchema(obj);
      data.push(obj);
    } 
  })
  
  return data;
}

function validateSchema(data: createTransactionsDataType) {
  const obj = {...data};
  obj.date = obj.date.slice(0, 19);
  
  const { error } = dataSchema.validate(obj, { abortEarly: false });
  if (error) throw error;
}

const functions = {
  searchSellers,
  searchTransactions,
  saveData
}

export default functions;