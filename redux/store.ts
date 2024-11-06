"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import authSlice from "./features/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartSlice from "./features/cartSlice";
import { productsApi } from "./features/productSlice";
import { categoriesApi } from "../slices/categoriesSlices";
import reviewsSlice from "../slices/reviewSlices";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,

    [productsApi.reducerPath]: productsApi.reducer,

    cart: cartSlice,
    review: reviewsSlice,
    auth: authSlice,
  },
  // devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware as any,
      productsApi.middleware,
      categoriesApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const initializeApp = async () => {
  await store.dispatch(
    apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true })
  );
  await store.dispatch(
    apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};
initializeApp();
