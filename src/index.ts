import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import affiliatesRouter from "./routes/affiliatesRouter";
dotenv.config();

const app = express();

app.use(json());
app.use(cors());

app.use(affiliatesRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server on port ${port}`));