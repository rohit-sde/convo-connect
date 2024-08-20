import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth.routes.js";
import connectToMongooDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 8181;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", router);

app.listen(PORT, () => {
  connectToMongooDB();
  console.log(`server is runnig on port: ${PORT}`);
});
