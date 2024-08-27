/*
  Warnings:

  - You are about to drop the column `roleName` on the `roles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[role_name]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role_name` to the `roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "roles_roleName_key";

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "roleName",
ADD COLUMN     "role_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "roles_role_name_key" ON "roles"("role_name");
