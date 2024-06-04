
import { Billboard } from "@/lib/types";
import Error from "next/error";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards/public`;


const getBillboard = async (id:string): Promise<Billboard> => {
  let res = await fetch(`${URL}/${id}`);


  return await res.json();
};
export default getBillboard;
