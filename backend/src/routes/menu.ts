import express, { Request, Response } from "express";
import { Menu } from "../models/menu";

const router = express.Router();

router.get("", async (req: Request, res: Response) => {
  try {
    const items = await Menu.find();
    res.status(200).json({
      status: "fetching menu items successful",
      results: items.length,
      data: items,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error fetching items",
      message: error,
    });
  }
});

export default router;
