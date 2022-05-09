import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ['query'] //loga todas as queries realizadas (select, insert, update, delete)
});
