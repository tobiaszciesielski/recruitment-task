import express from "express";
import cors from "cors";
import helmet from "helmet";
import "./db/index";
import apiRouter from "./routes/api";
import { port } from "../src/config";;

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use("/api", apiRouter);
