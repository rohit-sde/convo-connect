import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

import connectToMongooDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
import { CONFIG } from "./config.mjs";
import routes from "./routes/index.routes.js";

dotenv.config();

const middlewares = [
  express.json(),
  cookieParser(),
  (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  },
];

app.use("/ws", middlewares);

app.use(
  "/api",
  ...[
    ...middlewares,
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

app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

server.listen(CONFIG.port, CONFIG.host, () => {
  connectToMongooDB();
  console.info(`Server is running at http://${CONFIG.host}:${CONFIG.port}`);
});
