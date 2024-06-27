const { OpenAIApi, Configuration } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//extracted RFQ data from email content
export const extractRFQData = async (emailContent: string) => {
  const response = await openai.createChatCompletion({
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

  const rfqData = response.data.choices[0].message?.content;
  return JSON.parse(rfqData);
};
