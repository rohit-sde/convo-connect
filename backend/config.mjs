import dotenv from "dotenv";
dotenv.config();

const cors = {
  origin: [],
  methods: ["GET", "POST"],
};

if (process.env.NODE_ENV === "development") {
  cors.origin.push(
    "http://localhost:5066",
    "http://localhost:5173",
    "http://localhost:3000"
  );
}

export const CONFIG = {
  port: 5066, // Port on which, Backend is running
  host: "0.0.0.0",
  cors,
};
