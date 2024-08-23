/*
  Warnings:

  - Added the required column `entityType` to the `Application` table without a default value. This is not possible if the table is not empty.

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
    CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Application" ("accBen", "accNum", "bankAddr", "bankName", "bsnsAddr", "counterparty", "country", "iban", "id", "regAddr", "regCountry", "regId", "regName", "swiftCode", "telephone", "userId", "website") SELECT "accBen", "accNum", "bankAddr", "bankName", "bsnsAddr", "counterparty", "country", "iban", "id", "regAddr", "regCountry", "regId", "regName", "swiftCode", "telephone", "userId", "website" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
CREATE UNIQUE INDEX "Application_userId_key" ON "Application"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
