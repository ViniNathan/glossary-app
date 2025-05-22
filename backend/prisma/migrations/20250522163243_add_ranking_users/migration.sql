/*
  Warnings:

  - You are about to drop the column `userId` on the `Ranking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ranking" DROP CONSTRAINT "Ranking_userId_fkey";

-- AlterTable
ALTER TABLE "Ranking" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_RankingToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_RankingToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_RankingToUser_B_index" ON "_RankingToUser"("B");

-- AddForeignKey
ALTER TABLE "_RankingToUser" ADD CONSTRAINT "_RankingToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Ranking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RankingToUser" ADD CONSTRAINT "_RankingToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
