import express, { json } from "express";
import "express-async-errors";
import router from "./routes/router.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(json());

app.use(router);
app.use(errorHandler);

export default app;