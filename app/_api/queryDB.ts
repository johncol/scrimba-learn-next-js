import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

export const queryDB = <T>(callback: (prisma: PrismaClient) => Promise<T>) => {
  const prisma = new PrismaClient().$extends(withAccelerate());
  return callback(prisma)
    .then(async (result) => {
      await prisma.$disconnect();
      return result;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error;
    });
};
