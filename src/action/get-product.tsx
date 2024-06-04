//@ts-nocheck
import { Product } from "@/lib/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
console.log(URL);

const getProduct = async (id: string): Promise<Product | null> => {
  try {
    console.log(id);
    const res = await axios.get<{ data: Product }>(`${URL}/public/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Handle known Axios error
      console.error("Failed to fetch product:", error.response?.data);
    } else {
      // Handle unknown error
      console.error("Failed to fetch product:", error);
    }
    return null;
  } finally {
    
  }
};

export default getProduct;
