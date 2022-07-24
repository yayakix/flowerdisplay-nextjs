-- CreateTable
CREATE TABLE "Flower" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT,

    CONSTRAINT "Flower_pkey" PRIMARY KEY ("id")
);
