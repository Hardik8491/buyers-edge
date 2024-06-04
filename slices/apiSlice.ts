// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Adjust the base URL as per your API configuration
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/cart",
    }),
    addToCart: builder.mutation({
      query: (item) => ({
        url: "/cart",
        method: "POST",
        body: item,
      }),
    }),
    incrementCartItem: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}/increment`,
        method: "PATCH",
      }),
    }),
    decrementCartItem: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}/decrement`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useIncrementCartItemMutation,
  useDecrementCartItemMutation,
} = api;

