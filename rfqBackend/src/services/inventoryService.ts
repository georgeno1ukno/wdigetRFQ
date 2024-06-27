export const checkInventory = async (
  products: Array<{ name: string; quantity: number }>
) => {
  // Check inventory and return availability and pricing, dummy logic
  const availableProducts = products.map((product) => ({
    ...product,
    available: true,
    price: Math.random() * 100, // Example pricing logic , dummy logic
  }));
  return availableProducts;
};
