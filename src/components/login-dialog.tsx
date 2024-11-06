"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserAuthForm } from "./user-auth-form";
import Link from "next/link";
import { useSelector } from "react-redux";

const LoginDialog = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!user) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }, 1000); // 30 seconds

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, [user]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register">Sign Up</Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
