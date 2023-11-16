-- CreateEnum
CREATE TYPE "Pays" AS ENUM ('BZH', 'FR');

-- CreateEnum
CREATE TYPE "Langue" AS ENUM ('FR', 'EN', 'BRE', 'WEL', 'COR', 'GLV', 'GLA', 'GLE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prenom" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailconfirmed" BOOLEAN NOT NULL DEFAULT false,
    "phone" TEXT,
    "phoneconfirmed" BOOLEAN DEFAULT false,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "pic" TEXT DEFAULT '/img/defaultprofilepic.png',
    "password" TEXT NOT NULL,
    "pays" "Pays",
    "codepostal" TEXT,
    "rue" TEXT,
    "ville" TEXT,
    "complementadresse" TEXT,
    "isadmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sentence" (
    "id" SERIAL NOT NULL,
    "langue" "Langue" NOT NULL,

    CONSTRAINT "Sentence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "mot" TEXT NOT NULL,
    "langue" "Langue" NOT NULL,
    "definition" TEXT NOT NULL,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Learn" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "from" "Langue" NOT NULL,
    "to" "Langue" NOT NULL,

    CONSTRAINT "Learn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_followUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_blockUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_phrase" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_traduction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LearnToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_pseudo_key" ON "User"("pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Sentence_id_key" ON "Sentence"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Word_id_key" ON "Word"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Learn_id_key" ON "Learn"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_followUser_AB_unique" ON "_followUser"("A", "B");

-- CreateIndex
CREATE INDEX "_followUser_B_index" ON "_followUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blockUser_AB_unique" ON "_blockUser"("A", "B");

-- CreateIndex
CREATE INDEX "_blockUser_B_index" ON "_blockUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_phrase_AB_unique" ON "_phrase"("A", "B");

-- CreateIndex
CREATE INDEX "_phrase_B_index" ON "_phrase"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_traduction_AB_unique" ON "_traduction"("A", "B");

-- CreateIndex
CREATE INDEX "_traduction_B_index" ON "_traduction"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LearnToUser_AB_unique" ON "_LearnToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LearnToUser_B_index" ON "_LearnToUser"("B");

-- AddForeignKey
ALTER TABLE "_followUser" ADD CONSTRAINT "_followUser_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_followUser" ADD CONSTRAINT "_followUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blockUser" ADD CONSTRAINT "_blockUser_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blockUser" ADD CONSTRAINT "_blockUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_phrase" ADD CONSTRAINT "_phrase_A_fkey" FOREIGN KEY ("A") REFERENCES "Sentence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_phrase" ADD CONSTRAINT "_phrase_B_fkey" FOREIGN KEY ("B") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_traduction" ADD CONSTRAINT "_traduction_A_fkey" FOREIGN KEY ("A") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_traduction" ADD CONSTRAINT "_traduction_B_fkey" FOREIGN KEY ("B") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LearnToUser" ADD CONSTRAINT "_LearnToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Learn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LearnToUser" ADD CONSTRAINT "_LearnToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
