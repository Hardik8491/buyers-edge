"use client";
import { useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Loading from "../loading";

const OrderPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const fail = searchParams.get("canceled");
  const successful = searchParams.get("success");
  const canceled = fail === "1" ? true : false;
  const success = successful === "1" ? true : false;

  useEffect(() => {
    if (success) {
      router.push("/order/success");
    } else if (canceled) {
      router.push("/order/canceled");
    }
  }, [success, canceled, router]);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default OrderPage;
