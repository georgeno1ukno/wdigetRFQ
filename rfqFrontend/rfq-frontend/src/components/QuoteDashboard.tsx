import React, { useEffect, useState } from "react";
import { getQuotes, finalizeQuote } from "../services/api";

interface Quote {
  id: string;
  customer: string;
  products: Array<{ name: string; quantity: number; price: number }>;
  totalPrice: number;
  status: "draft" | "finalized";
  createdAt: Date;
}

const QuoteDashboard: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const quotes = await getQuotes();
    setQuotes(quotes);
  };

  const handleFinalize = async (id: string) => {
    await finalizeQuote(id);
    fetchQuotes();
  };

  return (
    <div>
      <h1>Quote Dashboard</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <h2>Customer: {quote.customer}</h2>
            <p>Status: {quote.status}</p>
            <p>Total Price: ${quote.totalPrice.toFixed(2)}</p>
            <button
              onClick={() => handleFinalize(quote.id)}
              disabled={quote.status === "finalized"}
            >
              Finalize Quote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteDashboard;
