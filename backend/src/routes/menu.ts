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

router.post("", async (req: Request, res: Response) => {
  try {
    const { name, category, price, availability } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Item name is required",
      });
    } else if (!category) {
      return res.status(400).json({
        message: "Item category is required",
      });
    } else if (!price) {
      return res.status(400).json({
        message: "Item price is required",
      });
    } else if (!availability) {
      return res.status(400).json({
        message: "Item availability is required",
      });
    }

    const newItem = new Menu({
      name,
      category,
      price,
      availability,
    });

    const savedItem = await newItem.save();
    console.log("added new menu item", savedItem);

    res.status(201).json({
      message: "new item addded",
      savedItem,
    });
  } catch (error) {
    res.status(500).json({
      message: "error adding new item",
      error,
    });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const { name, category, price, availability } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Item name is required",
      });
    } else if (!category) {
      return res.status(400).json({
        message: "Item category is required",
      });
    } else if (!price) {
      return res.status(400).json({
        message: "Item price is required",
      });
    } else if (!availability) {
      return res.status(400).json({
        message: "Item availability is required",
      });
    }

    const updatedItem = await Menu.findByIdAndUpdate(
      itemId,
      {
        name,
        category,
        price,
        availability,
      },
      { new: true },
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({
      message: "updated menu item",
      updatedItem,
    });
  } catch (error) {
    res.status(500).json({
      message: "updating menu item failed",
      error,
    });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;

    const deletionResult = await Menu.deleteOne({ _id: itemId });

    if (deletionResult.deletedCount !== 1) {
      return res.status(404).json({ error: "menu item not found" });
    }

    res.status(200).json({
      message: "menu item deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "error while deleting menu item",
      err,
    });
  }
});

export default router;
