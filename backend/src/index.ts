import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import registerRouter from "./routes/auth/register";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("mongodb uri is not defined in .env file");
}

app.use(express.json());

mongoose
  .connect(uri)
  .then(() => console.log("database connected"))
  .catch((error) =>
    console.log("connecting to database failed, error:", error),
  );

app.use("/user", registerRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
