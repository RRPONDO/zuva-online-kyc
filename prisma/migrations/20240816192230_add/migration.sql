-- AlterTable
ALTER TABLE "Application" ADD COLUMN "comment" TEXT;
ALTER TABLE "Application" ADD COLUMN "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Application" ADD COLUMN "updatedAt" DATETIME;
