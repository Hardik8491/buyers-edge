// slices/productsSlice.ts

import { Category } from "@/lib/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your product type

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl:process.env.NEXT_PUBLIC_API_URL }),
  // Replace '/api' with your API endpoint
  endpoints: (builder) => ({
    getCategories: builder.query<Category, void>({
      query: () => 'categories/public',
    }),
  }),
});




export const { useGetCategoriesQuery } = categoriesApi;
