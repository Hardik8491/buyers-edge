import { Product } from "@/lib/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/public`;





interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      // colorId: query.colorId,
      // sizeId: query.sizeId,
      categoryId: query.categoryId,
      // isFeatured: query.isFeatured,
    },
  });


  const res = await fetch(url).then(res=>res.json());

 
  return  res;
};

export default getProducts;
