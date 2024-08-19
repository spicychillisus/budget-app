/*
  Warnings:

  - Added the required column `account_activated` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `account_status` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "account_activated" BOOLEAN NOT NULL,
ADD COLUMN     "account_status" TEXT NOT NULL;
