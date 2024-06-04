"use client";

import * as React from "react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSession, signIn } from "next-auth/react";
import { Icons } from "./ui/icons";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isEmailLoading, setIsEmailLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  async function onSubmit(event: React.SyntheticEvent) {
    try {
      event.preventDefault();
      setIsEmailLoading(true);
      const response = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });
      console.log(response);
      if (response?.status === 200 || response?.ok === true) {
        console.log("Login success", response?.ok);
        toast.success("Login success");
        router.push("/account");
      } else {
        toast.error("Login failed");
        return;
      }
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setTimeout(() => {
        setIsEmailLoading(false);
      }, 3000);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoading(true);
      const result = await signIn("google", {
        redirect: false, // Prevent default NextAuth redirect
      });

      if (result?.error) {
        console.error("Google login error:", result?.error);
        toast.error("Login failed");
        // Handle login errors (optional)
      } else {
        // Login successful!
        toast.success("Login successful");
        router.push("/account");
      }
    } catch (error) {
      toast.error("Login failed");
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsGoogleLoading(false);
      }, 3000);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isEmailLoading || isGoogleLoading}
            />
          </div>
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="********"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isEmailLoading || isGoogleLoading}
            />
            <div className="flex items-center">
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <Button disabled={isEmailLoading || buttonDisabled}>
            {isEmailLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isGoogleLoading}
        onClick={handleGoogleLogin}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
