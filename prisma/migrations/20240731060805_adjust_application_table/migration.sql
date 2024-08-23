/*
  Warnings:

  - You are about to drop the column `accBen` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `accNum` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `bankAddr` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `bankName` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `benOwnership` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `bsnsAddr` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `certOfInc` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `cr14` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `cr6` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `iban` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `ids` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `maa` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `proofOfRes` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `regAddr` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `regCountry` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `regDate` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `regId` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `resolutionAuth` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `status1` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `swiftCode` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `taxClearance` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `telephone` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Application` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "counterparty" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "regName" TEXT NOT NULL
);
INSERT INTO "new_Application" ("counterparty", "email", "entityType", "id", "regName") SELECT "counterparty", "email", "entityType", "id", "regName" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
