"use client"

import Loading from "@/app/loading";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
// Import your Loading component

const useAuthentication = (session: { status: unknown }) => {
  const router = useRouter();



  useEffect(() => {
    if (session?.status === "unauthenticated") {
      toast.success("Login First !!")
      redirect("/auth/login")

    }
  }, [session?.status]);

  if (session?.status === "loading") {
   
    return <Loading />;
  }

  // You can return additional data or components if needed
  return null;
};

export default useAuthentication;
