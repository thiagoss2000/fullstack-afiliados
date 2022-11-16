import { dataSchema } from "../schemas/dataSchema.js";

export function sanitizer(list: string[]) {
  let data: object[] = [];
  list.forEach(e => {
    if (e.length > 0) {
      const obj = {
        type: parseInt(e.slice(0, 1).trim()),
        date: e.slice(1, 25).trim(),
        product: e.slice(26, 55).trim(),
        price: parseInt(e.slice(56, 65).trim()),
        name: e.slice(66, 85).trim()
      }      
      const { error } = dataSchema.validate(obj, { abortEarly: false });
      if (error) throw error;

      data.push(obj);
    } 
  })
  
  return data;
}