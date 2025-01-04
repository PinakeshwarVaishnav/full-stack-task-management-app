import { model, Schema, SchemaTypes, Types } from "mongoose";

interface OrderInterface {
  userId: Types.ObjectId;
  items: Types.ObjectId[];
  totalAmount: number;
  status: string;
  createdAt: Date;
}

const OrderSchema = new Schema<OrderInterface>(
  {
    userId: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        type: SchemaTypes.ObjectId,
        ref: "Menu",
        required: true,
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Order = model<OrderInterface>("Order", OrderSchema);
