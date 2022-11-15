
export function sanitizer(list: string[]) {
  let data: object[] = [];
  list.forEach(e => {
    if (e.length > 0) {
      const type = e.slice(0,1);
      const date = e.slice(1, 25);
      const product = e.slice(26, 55);
      const price = e.slice(56, 65);
      const name = e.slice(66, 85);
      data.push({
        type,
        date,
        product,
        price,
        name
      })
    } 
  })
  return data;
}