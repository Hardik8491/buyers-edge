import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
