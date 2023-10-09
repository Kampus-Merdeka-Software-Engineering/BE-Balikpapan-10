/*
  Warnings:

  - Added the required column `profil_github` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profil_linkedin` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `team` ADD COLUMN `profil_github` VARCHAR(191) NOT NULL,
    ADD COLUMN `profil_linkedin` VARCHAR(191) NOT NULL;
