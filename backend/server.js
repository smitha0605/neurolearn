import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

console.log("Server file loaded");  // DEBUG LINE

const app = express();
app.use(cors());
app.use(express.json());

console.log("Express initialized");  // DEBUG LINE

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
