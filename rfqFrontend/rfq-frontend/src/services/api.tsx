import axios from "axios";

const API_URL = "http://localhost:3100/api";

export const getQuotes = async () => {
  const response = await axios.get(`${API_URL}/quotes`);
  return response.data;
};

export const finalizeQuote = async (id: string) => {
  const response = await axios.post(`${API_URL}/quotes/${id}/finalize`);
  return response.data;
};

export const submitRFQ = async (emailContent: string) => {
  const response = await axios.post(`${API_URL}/rfq`, { emailContent });
  return response.data;
};
