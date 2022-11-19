/*
  Warnings:

  - You are about to drop the column `typeId` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `type` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_typeId_fkey";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "typeId",
ADD COLUMN     "type" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_type_fkey" FOREIGN KEY ("type") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
