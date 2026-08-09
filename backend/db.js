import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGODB_URI, { dbName: "Neza" });

    console.log(`MongoDB Connected: ${connect.connection.name}`);
  } catch (error) {
    res.status(500).json({ error: "Error connecting to MongoDB", message: error.message });
  }
};

export default connectDB;
