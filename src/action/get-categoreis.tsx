import { Category } from "@/lib/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/public`;



const getCategories = async (): Promise<Category[]> => {
  
  
      let res = await fetch(URL);
      
      
      return await res.json();

};
export default getCategories;
