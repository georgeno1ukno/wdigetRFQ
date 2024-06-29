import express from "express";
import cors from "cors";
import rfqRoutes from "./routes/rfqRoutes";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", rfqRoutes);

export default app;
