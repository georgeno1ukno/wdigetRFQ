require("dotenv").config();
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

//extracted RFQ data from email content
export const extractRFQData = async (emailContent: string) => {
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
        content: `Extract RFQ data from the following email: ${emailContent}`,
      },
    ],
  });

  const rfqData = response.choices[0].message?.content;
  const parsedData = rfqData ? JSON.parse(rfqData) : null;
  return parsedData;
};
