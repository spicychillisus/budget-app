/*
  Warnings:

  - You are about to drop the column `activityDate` on the `account_activity` table. All the data in the column will be lost.
  - You are about to drop the column `activityDetails` on the `account_activity` table. All the data in the column will be lost.
  - You are about to drop the column `activityName` on the `account_activity` table. All the data in the column will be lost.
  - You are about to drop the column `activityType` on the `account_activity` table. All the data in the column will be lost.
  - Added the required column `account_message` to the `account_activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activity_date` to the `account_activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activity_details` to the `account_activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activity_name` to the `account_activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activity_type` to the `account_activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "account_activity" DROP COLUMN "activityDate",
DROP COLUMN "activityDetails",
DROP COLUMN "activityName",
DROP COLUMN "activityType",
ADD COLUMN     "account_message" TEXT NOT NULL,
ADD COLUMN     "activity_date" TEXT NOT NULL,
ADD COLUMN     "activity_details" TEXT NOT NULL,
ADD COLUMN     "activity_name" TEXT NOT NULL,
ADD COLUMN     "activity_type" TEXT NOT NULL;
