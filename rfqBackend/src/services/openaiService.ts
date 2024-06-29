require("dotenv").config();
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

interface RFQData {
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
  }>;
}

//extracted RFQ data from email content

export const extractRFQData = async (
  emailContent: string
): Promise<RFQData> => {
  const prompt = `
  Extract the RFQ data from the following email and return it as a JSON structure with "customer" and "items":

  Email:
  "${emailContent}"

  JSON format:
  {
    "customer": {
      "name": "Customer Name",
      "email": "customer@example.com"
    },
    "items": [
      {
        "name": "Item Name",
        "quantity": 10,
        "dimensions": "Dimensions",
        "processing": "Processing instructions",
        "dueDate": "Due date",
        "shippingRestrictions": "Shipping restrictions"
      }
    ]
  }
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: [
      {
        role: "system",
        content:
          "You are an assistant that helps to extract RFQ data from emails.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const rfqDataString = response.choices[0].message?.content;
  const rfqData: RFQData = rfqDataString ? JSON.parse(rfqDataString) : null;

  // Validate and transform data if necessary
  if (!rfqData.customer || !rfqData.items) {
    throw new Error("Invalid RFQ data format");
  }

  return rfqData;
};
