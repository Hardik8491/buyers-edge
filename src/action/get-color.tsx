import {  Color} from "@/lib/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors/public`;

const getColors = async (): Promise<Color[]> => {
  let res = await fetch(URL);

  return await res.json();
};
export default getColors;
