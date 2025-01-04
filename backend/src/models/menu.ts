import mongoose, { Schema } from "mongoose";

interface MenuInterface {
  name: string;
  category: string;
  price: number;
  availability: boolean;
}

const MenuSchema = new Schema<MenuInterface>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  availability: {
    type: Boolean,
    default: true,
  },
});

export const Menu = mongoose.model<MenuInterface>("Menu", MenuSchema);
