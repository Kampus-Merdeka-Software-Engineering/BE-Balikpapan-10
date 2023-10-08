/*
  Warnings:

  - You are about to drop the column `description` on the `lesson` table. All the data in the column will be lost.
  - Added the required column `comments` to the `lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creator` to the `lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likes` to the `lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_github` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_linkedin` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_people` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lesson` DROP COLUMN `description`,
    ADD COLUMN `comments` VARCHAR(191) NOT NULL,
    ADD COLUMN `creator` VARCHAR(191) NOT NULL,
    ADD COLUMN `desc` TEXT NOT NULL,
    ADD COLUMN `likes` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `team` ADD COLUMN `image_github` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_linkedin` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_people` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `message` (
    `id_message` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,

    PRIMARY KEY (`id_message`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
