import express from "express";
import rfqRoutes from "./routes/rfqRoutes";

const app = express();

app.use(express.json());
app.use("/api", rfqRoutes);

export default app;
