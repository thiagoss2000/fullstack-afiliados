import { dataSchema } from "../schemas/dataSchema.js";
import { transactionsData } from "../services/affiliatesServices.js";

export type createTransactionsData = Omit<transactionsData, "id">;

export function sanitizer(list: string[]) {
  let data: createTransactionsData[] = [];
  list.forEach(e => {
    if (e.length > 0) {
      const obj = {
        type: parseInt(e.slice(0, 1).trim()),
        date: e.slice(1, 25).trim(),
        product: e.slice(26, 55).trim(),
        price: parseInt(e.slice(56, 65).trim()),
        name: e.slice(66, 85).trim()
      }    
      validateSchema(obj);
      data.push(obj);
    } 
  })
  
  return data;
}

function validateSchema(data: createTransactionsData) {
  const obj = {...data};
  obj.date = obj.date.slice(0, 19);
  
  const { error } = dataSchema.validate(obj, { abortEarly: false });
  if (error) throw error;
}