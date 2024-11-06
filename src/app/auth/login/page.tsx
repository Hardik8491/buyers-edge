"use client";
import { UserAuthForm } from "@/components/user-auth-form";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/hoc/withAuth";
import redirectIfAuthenticated from "@/components/redirectIfAuthenticated";
const LoginPage = () => {
  return (
    <section>
      <div className="mx-auto   grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter email below to create your account
          </p>
        </div>
        <UserAuthForm />
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account? <Link href="/auth/register">Sign Up</Link>
        </div>
      </div>
    </section>
  );
};

export default redirectIfAuthenticated(LoginPage);
