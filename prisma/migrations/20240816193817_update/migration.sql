/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Application` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "counterparty" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "regName" TEXT NOT NULL,
    "regCountry" TEXT NOT NULL,
    "regId" TEXT NOT NULL,
    "regAddr" TEXT NOT NULL,
    "bsnsAddr" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "bankAddr" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "accNum" TEXT NOT NULL,
    "swiftCode" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "accBen" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT,
    "comment" TEXT,
    CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Application" ("accBen", "accNum", "bankAddr", "bankName", "bsnsAddr", "comment", "counterparty", "country", "entityType", "iban", "id", "regAddr", "regCountry", "regId", "regName", "status", "swiftCode", "telephone", "userId", "website") SELECT "accBen", "accNum", "bankAddr", "bankName", "bsnsAddr", "comment", "counterparty", "country", "entityType", "iban", "id", "regAddr", "regCountry", "regId", "regName", "status", "swiftCode", "telephone", "userId", "website" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
CREATE UNIQUE INDEX "Application_userId_key" ON "Application"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
