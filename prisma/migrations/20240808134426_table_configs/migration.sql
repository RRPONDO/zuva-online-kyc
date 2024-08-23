/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - Added the required column `accBen` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accNum` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bankAddr` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bankName` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bsnsAddr` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iban` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regAddr` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regCountry` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regId` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `swiftCode` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "ApplicationFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,
    CONSTRAINT "ApplicationFile_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
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
INSERT INTO "new_Application" ("counterparty", "email", "entityType", "id", "regName") SELECT "counterparty", "email", "entityType", "id", "regName" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
CREATE UNIQUE INDEX "Application_userId_key" ON "Application"("userId");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" DATETIME
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "password") SELECT "email", "emailVerified", "id", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
