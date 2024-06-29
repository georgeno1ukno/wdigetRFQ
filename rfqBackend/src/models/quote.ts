export interface Quote {
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
