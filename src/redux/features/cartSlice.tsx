import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  quantity: number;
  price:number;
  images:string;

}

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (!existingProduct) {
        state.cart = [product, ...state.cart];
      } else {
        existingProduct.quantity++;
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const product = state.cart.find((item) => item.id === id);

      if (product) {
        product.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const product = state.cart.find((item) => item.id === id);

      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
