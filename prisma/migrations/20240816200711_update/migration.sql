/*
  Warnings:

  - The primary key for the `Application` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Application` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `ApplicationFile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `applicationId` on the `ApplicationFile` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `ApplicationFile` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
CREATE TABLE "new_ApplicationFile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "applicationId" INTEGER NOT NULL,
    CONSTRAINT "ApplicationFile_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ApplicationFile" ("applicationId", "id", "url") SELECT "applicationId", "id", "url" FROM "ApplicationFile";
DROP TABLE "ApplicationFile";
ALTER TABLE "new_ApplicationFile" RENAME TO "ApplicationFile";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
