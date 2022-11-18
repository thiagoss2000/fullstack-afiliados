import supertest from "supertest";
import dotenv from "dotenv";
import app from "../src/app.js";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
dotenv.config();

const userData = {
    username: "test@test",
    password: "test123456"
}

const header = {
    auth: "Authorization",
    token: ""
}

describe("authentication test", () => {
    it("testing signup...", async () => {
        await clearTest();
        const response = await supertest(app).post("/sign-up").send(userData);
        expect(response.statusCode).toBe(201);
    });
    
    it("testing signin...", async () => {
      const response = await supertest(app).post("/sign-in").send(userData);
      expect(response.statusCode).toBe(200);
      header.token = response.body.token;
    });
  
    it("testing signup...", async () => {
        const response = await supertest(app).post("/sign-up").send(userData);
        expect(response.statusCode).toBe(409);
    });
});

async function clearTest() {
    await prisma.sessions.deleteMany({});
    await prisma.users.deleteMany({});
}