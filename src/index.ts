import dotenv from "dotenv";
import express, { Request, Response } from "express";
import ImageRoutes from "./Routes/ImageRoutes";
import TripRoutes from "./Routes/TripRoutes";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import cors from "cors";

dotenv.config();


const client = new DynamoDBClient({ region: "ap-south-1" }); // change region if needed
export const docClient = DynamoDBDocumentClient.from(client);


const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Trip Planner API" });
});

app.use("/images", ImageRoutes);
app.use("/trip", TripRoutes);

app.listen(PORT, () => {
  // http://localhost:3000/ - for local testing
  console.log(`🚀 Server is running on port ${PORT}`);
});
