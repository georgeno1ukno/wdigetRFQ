export interface Quote {
  id: string;
  customer: string;
  products: Array<{ name: string; quantity: number; price: number }>;
  totalPrice: number;
  status: "draft" | "finalized";
  createdAt: Date;
}
