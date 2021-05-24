import express from "express";
import dbConnection from "./DB.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


dbConnection();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server started on port ${PORT}`)
);