"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";
import { Input } from "./input";
import { Icons } from "./icons";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import { signIn } from "next-auth/react";
interface UserAuthRegisterFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthRegisterForm({
  className,
  ...props
}: UserAuthRegisterFormProps) {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  async function onSubmit(event: React.SyntheticEvent) {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await axios.post("/api/auth/user/signup", user);
      toast.success("Register Successful !");
    
      router.push("/auth/login");
    } catch (error: any) {
      console.log("SignUp failed", error.message);

      toast.error(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }
  React.useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.firstName.length > 0 &&
      user.lastName.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const handleGoogleLogin = async () => {
    try {
      const result = await signIn("google", {
        redirect: false, // Prevent default NextAuth redirect
      });

      if (result?.error) {
        console.error("Facebook login error:", result?.error);
        // Handle login errors (optional)
      } else {
        // Login successful!
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                FirstName
              </Label>
              <Input
                id="firstName"
                placeholder="First Name"
                type="text"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                LastNAme
              </Label>
              <Input
                id="lastName"
                placeholder="Last Name"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                type="text"
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          </div>
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
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Register
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
      <Button variant="outline" type="button" disabled={isLoading} onClick={handleGoogleLogin}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
