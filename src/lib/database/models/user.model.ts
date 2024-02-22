import { Schema, model, models } from "mongoose";

export interface User extends Document {
  clerkId: string;
  email: string;
  userName: string;
  lastName: string;
  planId: number;
  creditBalance: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  email: { type: String, required: true },
  userName: { type: String, required: true },
  lastName: { type: String, required: true },
  planId: { type: Number, required: true },
  creditBalance: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = models?.User || model("User", UserSchema);

export default User;
