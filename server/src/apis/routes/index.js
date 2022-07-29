import internshipsRouter from "./internships.js";
import express from "express";

const router = express.Router();

router.use("/internships", internshipsRouter);

export default router;
