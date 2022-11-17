import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export interface userData {
  username: string;
  password: string;
}

export async function searchUser(username: string) {
  return await prisma.users.findUnique({
    where: { username }
  });
}

export async function createUser(userData: userData) {
  await prisma.users.create({
    data: userData
  });
}

export async function insertToken(userId: number, token: string) {
  await prisma.sessions.updateMany({
    where: { userId }, data: { deleted_at: new Date() }
  });
  await prisma.sessions.create({
    data: { userId, token }
  });
}
