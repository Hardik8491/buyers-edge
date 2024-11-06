/* eslint-disable react/display-name */
"use client";
import { useAuth } from "@/selectors/auth";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

const redirectIfAuthenticated = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const user = useAuth();
    console.log(user);
    
    const router = useRouter();

    useEffect(() => {
      if (user) {
        router.push("/account"); // or wherever you want to redirect authenticated users
      }
    }, [user, router]);

    if (user) {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default redirectIfAuthenticated;
