import { Router } from "express";
import {
  handleRFQ,
  getQuotes,
  finalizeQuote,
} from "../controllers/rfqController";

const router = Router();

router.post("/rfq", handleRFQ);
router.get("/quotes", getQuotes);
router.post("/quotes/:id/finalize", finalizeQuote);

export default router;
