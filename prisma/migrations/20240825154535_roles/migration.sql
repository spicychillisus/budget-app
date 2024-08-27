/*
  Warnings:

  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "roleName" TEXT NOT NULL,
    "role" INTEGER NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_roleName_key" ON "roles"("roleName");
