import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongooDB from "./db/connectToMongoDB.js";
import { app } from "./socket/socket.js";
import { CONFIG } from "./config.mjs";
import routes from "./routes/index.routes.js";

dotenv.config();

app.use(
  "/api",
  ...[
    express.json(),
    cookieParser(),
    (req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      next();
    },
    routes,
    (req, res) => {
      if (req.method === "OPTIONS") {
        return res.sendStatus(200);
      }

      res.status(404).json({ message: "Not found" });
    },
  ]
);

app.use(express.static("public"));

app.listen(CONFIG.port, CONFIG.host, () => {
  connectToMongooDB();
  console.info(`Server is running at http://${CONFIG.host}:${CONFIG.port}`);
});
