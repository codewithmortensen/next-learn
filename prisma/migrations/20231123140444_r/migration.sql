-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "email" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
