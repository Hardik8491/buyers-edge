import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your product type
interface Product {
  id: string;
  name: string;
  // Add other fields as per your product structure
}

// Create an API using RTK Query
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products/public",
    }),
  }),
});

// Export the generated hook for fetching products
export const { useGetProductsQuery } = productsApi;