/*
  Warnings:

  - Added the required column `author` to the `Boock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Boock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Boock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `editorial` to the `Boock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genderId` to the `Boock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pages` to the `Boock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place` to the `Boock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Boock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Boock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boock" ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "editorial" TEXT NOT NULL,
ADD COLUMN     "genderId" INTEGER NOT NULL,
ADD COLUMN     "pages" INTEGER NOT NULL,
ADD COLUMN     "place" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Gender" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Boock" ADD CONSTRAINT "Boock_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "Gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boock" ADD CONSTRAINT "Boock_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
