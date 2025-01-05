import express, { Request, Response } from "express";
import { User } from "../../models/user";
import { registerUser } from "../../controllers/user";

const router = express.Router();

router.post("/register", registerUser);

export default router;
