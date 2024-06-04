import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: number;
  // Add other properties as needed
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToLocalCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    incrementLocalCartItem: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decrementLocalCartItem: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
     
      
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const {
  addItemToLocalCart,
  incrementLocalCartItem,
  decrementLocalCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;

