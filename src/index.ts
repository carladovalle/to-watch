import express, { json } from "express";
import dotenv from "dotenv";

dotenv.config();

import seriesRouter from "./Routes/seriesRouter.js";

const app = express();
app.use(json());

app.use(seriesRouter);

const port: number = +process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});