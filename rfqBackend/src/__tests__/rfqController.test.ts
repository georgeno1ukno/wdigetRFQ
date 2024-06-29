import request from "supertest";
import app from "../app";
import { extractRFQData } from "../services/openaiService";
import { checkInventory } from "../services/inventoryService";
import { Quote } from "../models/quote";

jest.mock("../services/openaiService");
jest.mock("../services/inventoryService");

const mockExtractRFQData = extractRFQData as jest.MockedFunction<
  typeof extractRFQData
>;
const mockCheckInventory = checkInventory as jest.MockedFunction<
  typeof checkInventory
>;

describe("RFQ Controller", () => {
  beforeEach(() => {
    mockExtractRFQData.mockClear();
    mockCheckInventory.mockClear();
  });

  it("should process RFQ and create a new quote", async () => {
    const mockRFQData = {
      customer: { name: "John Doe", email: "john.doe@example.com" },
      items: [
        {
          name: "Aluminum Sheet",
          quantity: 50,
          dimensions: "2mm thick, 1000mm x 2000mm",
        },
        {
          name: "Aluminum Sheet",
          quantity: 30,
          dimensions: "3mm thick, 1500mm x 3000mm",
        },
      ],
    };

    const mockInventoryData = [
      {
        name: "Aluminum Sheet",
        quantity: 50,
        dimensions: "2mm thick, 1000mm x 2000mm",
        price: 100,
        available: true,
      },
      {
        name: "Aluminum Sheet",
        quantity: 30,
        dimensions: "3mm thick, 1500mm x 3000mm",
        price: 150,
        available: true,
      },
    ];

    mockExtractRFQData.mockResolvedValue(mockRFQData);
    mockCheckInventory.mockResolvedValue(mockInventoryData);

    const response = await request(app)
      .post("/api/rfq")
      .send({ emailContent: "Sample RFQ email content" })
      .expect(201);

    expect(response.body).toEqual({
      id: "1",
      customer: { name: "John Doe", email: "john.doe@example.com" },
      items: mockInventoryData,
      totalPrice: 8500,
      status: "draft",
      createdAt: expect.any(String),
    });
  });

  it("should return all quotes", async () => {
    await request(app)
      .post("/api/rfq")
      .send({ emailContent: "Sample RFQ email content" });

    const response = await request(app).get("/api/quotes").expect(200);

    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toEqual({
      id: "1",
      customer: { name: "John Doe", email: "john.doe@example.com" },
      items: expect.any(Array),
      totalPrice: 8500,
      status: "draft",
      createdAt: expect.any(String),
    });
  });

  it("should finalize a quote", async () => {
    await request(app)
      .post("/api/rfq")
      .send({ emailContent: "Sample RFQ email content" });

    const response = await request(app)
      .post("/api/quotes/1/finalize")
      .expect(200);

    expect(response.body.status).toBe("finalized");
  });
});
