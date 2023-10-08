/*
  Warnings:

  - You are about to drop the column `image` on the `lesson` table. All the data in the column will be lost.
  - Added the required column `image_lesson` to the `lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_lesson_page` to the `lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_date` to the `lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lesson` DROP COLUMN `image`,
    ADD COLUMN `image_lesson` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_lesson_page` VARCHAR(191) NOT NULL,
    ADD COLUMN `release_date` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `subscriber` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lessonId` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
