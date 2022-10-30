/*
  Warnings:

  - You are about to drop the column `dish` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `willBringPartner` on the `Attendance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "dish",
DROP COLUMN "willBringPartner",
ADD COLUMN     "numberOfAttendees" INTEGER NOT NULL DEFAULT 1;

-- DropEnum
DROP TYPE "Dish";
