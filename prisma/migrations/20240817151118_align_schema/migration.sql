/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "birthday" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_money" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "budget" DOUBLE PRECISION NOT NULL,
    "income" DOUBLE PRECISION NOT NULL,
    "expenses" DOUBLE PRECISION NOT NULL,
    "savings" DOUBLE PRECISION NOT NULL,
    "spent" DOUBLE PRECISION NOT NULL,
    "excess" DOUBLE PRECISION NOT NULL,
    "remaining" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "user_money_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "transaction_name" TEXT NOT NULL,
    "transaction_type" TEXT NOT NULL,
    "transaction_details" TEXT NOT NULL,
    "trasaction_amount" DOUBLE PRECISION NOT NULL,
    "transaction_date" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_money_user_id_key" ON "user_money"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_user_id_key" ON "transactions"("user_id");

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
