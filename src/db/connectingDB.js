import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URL);
    console.log("✅ MONGO Connected");
  } catch (error) {
    console.error("MongoDB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
