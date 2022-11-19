import express, { json } from "express";
import "express-async-errors";
import router from "./routes/router.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());

app.use(router);
app.use(errorHandler);

export default app;