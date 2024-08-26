import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import router from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongooDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 8181;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", router);
app.use("/api/message", messageRouter);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

server.listen(PORT, () => {
  connectToMongooDB();
  console.log(`server is runnig on port: ${PORT}`);
});
