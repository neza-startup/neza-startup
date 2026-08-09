import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import connectDB from "./db.js";
import contactRoutes from "./routes/contact.js";
import formRoutes from "./routes/form.js";
import newsletterRoutes from "./routes/newsletter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world!");
})

app.use('/api', contactRoutes);
app.use('/api', formRoutes);
app.use('/api', newsletterRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
