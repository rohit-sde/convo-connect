import express from "express";
import dotenv from "dotenv";

import router from "./routes/auth.routes.js";
import connectToMongooDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 8181;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth", router);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  connectToMongooDB();
  console.log(`server is runnig on port: ${PORT}`);
});
