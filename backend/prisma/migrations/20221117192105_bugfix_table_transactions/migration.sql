/*
  Warnings:

  - You are about to drop the column `nameId` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `name` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_nameId_fkey";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "nameId",
ADD COLUMN     "name" TEXT NOT NULL;
