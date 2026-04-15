import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";

dotenv.config();
const app = express();

// middlewares
app.use(
  cors({
    origin: "localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`You're on root`);
});

connectDb().then((res) => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});
