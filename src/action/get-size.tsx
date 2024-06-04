import {  Size } from "@/lib/types";
import Error from "next/error";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes/public`;

const getSizes = async (): Promise<Size[]> => {
  let res = await fetch(URL);

  return await res.json();
};
export default getSizes;
