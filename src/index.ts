import dotenv from "dotenv";
import express, { Request, Response } from "express";
import ImageRoutes from "./Routes/ImageRoutes";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: "*",
}))

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Trip Planner API" });
});
app.use("/images",ImageRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
