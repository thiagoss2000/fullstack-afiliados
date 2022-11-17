import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  
  await prisma.types.createMany({
    data: [
      {
        id: 1,
        description: "Venda produtor",
        type: "Entrada"
      },
      {
        id: 2,
        description: "Venda afiliado",
        type: "Entrada"
      },
      {
        id: 3,
        description: "Comissão paga",
        type: "Saída"
      },
      {
        id: 4,
        description: "Comissão recebida",
        type: "Entrada"
      },
    ]      
  });   
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
