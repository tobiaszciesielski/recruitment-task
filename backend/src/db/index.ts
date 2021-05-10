import mongoose from "mongoose";
import { mongoUrl } from "../config";

mongoose.connect(mongoUrl, (err: any) => {
  err ? console.log(err.message) : console.log("Successfully Connected!");
});
