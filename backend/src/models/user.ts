import { Schema, model } from "mongoose";
import IUser from "./../interfaces/user";

export const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<IUser>("User", UserSchema);
