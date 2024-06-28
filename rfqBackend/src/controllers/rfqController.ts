import { Request, Response } from "express";
import { extractRFQData } from "../services/openaiService";
import { checkInventory } from "../services/inventoryService";
import { Quote } from "../models/quote";

let quotes: Quote[] = [];

export const handleRFQ = async (req: Request, res: Response) => {
  const { emailContent } = req.body;

  try {
    const rfqData = await extractRFQData(emailContent);

    const availableProducts = await checkInventory(rfqData.items);

    const totalPrice = availableProducts.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );

    const newQuote: Quote = {
      id: (quotes.length + 1).toString(),
      customer: rfqData.customer.name,
      products: availableProducts,
      totalPrice,
      status: "draft",
      createdAt: new Date(),
    };

    quotes.push(newQuote);

    res.status(201).json(newQuote);
  } catch (error) {
    res.status(500).json({ error: "Failed to process RFQ" });
  }
};

export const getQuotes = (req: Request, res: Response) => {
  res.json(quotes);
};

export const finalizeQuote = (req: Request, res: Response) => {
  const { id } = req.params;
  const quote = quotes.find((q) => q.id === id);
  if (quote) {
    quote.status = "finalized";
    res.json(quote);
  } else {
    res.status(404).send("Quote not found");
  }
};
