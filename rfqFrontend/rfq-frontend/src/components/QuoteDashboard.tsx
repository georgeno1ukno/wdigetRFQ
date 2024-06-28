import React, { useEffect, useState } from "react";
import { getQuotes, finalizeQuote } from "../services/api";

interface Quote {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    dimensions?: string;
    processing?: string;
    dueDate?: string;
    shippingRestrictions?: string;
    price: number;
  }>;
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
            <h2>Customer: {quote.customer.name}</h2>
            <p>Email: {quote.customer.email}</p>
            <p>Status: {quote.status}</p>
            <p>Total Price: ${quote.totalPrice.toFixed(2)}</p>
            <h3>Items:</h3>
            <ul>
              {quote.items.map((item, index) => (
                <li key={index}>
                  <p>Name: {item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  {item.dimensions && <p>Dimensions: {item.dimensions}</p>}
                  {item.processing && <p>Processing: {item.processing}</p>}
                  {item.dueDate && <p>Due Date: {item.dueDate}</p>}
                  {item.shippingRestrictions && (
                    <p>Shipping Restrictions: {item.shippingRestrictions}</p>
                  )}
                  <p>Price: ${item.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
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
