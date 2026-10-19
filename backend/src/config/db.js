import { mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB_URI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose
      .connect(DB_URI)
      .then(() => console.log("connected to db..."));
  } catch (error) {
    console.log("mongodb connections error:", error);
  }
};

export default connectDB;
