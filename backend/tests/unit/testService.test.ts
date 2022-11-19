import { faker } from '@faker-js/faker';
import affiliatesRepositories from "../../src/repositories/affiliatesRepositories";
import affiliatesServices from "../../src/services/affiliatesServices";

describe("service saveData", () => {
  it('insert...', () => {
    const fakerData = imputfaker();
    console.log(fakerData)
    jest.spyOn(affiliatesRepositories, "createTransactionsData").mockImplementationOnce((value):any => expect(value).toEqual(fakerData.outData));
    affiliatesServices.saveData(fakerData.data);

  });

})

function imputfaker() {
  
  const repeat = Math.floor(Math.random() * 30);
  let outData = [];
  let data = [];
  for (let i = 0; i <= repeat; i++){
    const fObj = generateFakerData();
    const { type, date, product, price, name } = fObj;
    outData.push(fObj);
    data.push(`${type.toString()}${date.padStart(25)}${product.padStart(30)}${price.toString().padStart(10)}${name.padStart(20)}`);
  }
  return { outData, data };
}

function generateFakerData() {
  return {
    type: Math.floor(Math.random() * 9),
    date: faker.date.recent().toISOString().substring(0, 19).concat('-03:00'),
    product: faker.name.jobTitle().substring(0, 30),
    price: parseInt(faker.finance.account(10)),
    name: faker.name.fullName().substring(0, 20)
  };
}

// FIXME: test with [] and incorrect size