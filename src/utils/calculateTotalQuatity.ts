interface Product {
  id: string;
  quantity: number;
  price: number;
  // Add other fields as needed
}

export const calculateTotalQuantity = (cart: Product[] = []): number => {
    console.log(cart);
  
    console.log(cart.reduce((acc, curr) => acc + curr.quantity, 0)
);
    
  return cart.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const calculateGrandTotal = (cart: Product[] = []): number => {
  console.log(cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0));
  
  return cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
};
