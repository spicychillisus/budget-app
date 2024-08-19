/*
  Warnings:

  - You are about to drop the column `account_activated` on the `users` table. All the data in the column will be lost.
  - Added the required column `account_activation_status` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "account_activated",
ADD COLUMN     "account_activation_status" BOOLEAN NOT NULL;
