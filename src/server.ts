import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
require("dotenv").config();

const corsConfig = {
  origin: "*",
};

app.use(cors(corsConfig));

app.get("/health", (req: Request, res: Response) => {
  res.json({ data: "Application works!" });
});

app.listen(6969, () => {
  console.log("Application started on port 6969!");
});
