"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { object, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useSession } from "next-auth/react";
import { useUpdateUserMutation } from "../../redux/features/authApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
// Add setUser action to authSlice
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .nonempty({
      message: "An email is required.",
    }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;
interface User {
  firstName: string;
  lastName: string;
  email: string;
}
export function AccountForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const [updateUser, { isLoading, isError, isSuccess }] =
    useUpdateUserMutation();

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      name: `${user?.firstName ?? ""} ${user?.lastName ?? ""}`,
      email: user?.email ?? "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
      });
    }
  }, [user, form]);

  async function onSubmit(data: AccountFormValues) {
    try {
      const names = data.name.split(" ");
      const firstName = names[0];
      const lastName = names.slice(1).join(" ");

      const result = await updateUser({
        firstName,
        lastName,
        email: data.email,
      }).unwrap();
      console.log(result);

      form.reset({
        name: `${result.user.firstName} ${result.user.lastName}`,
        email: result.user.email,
      });

      router.refresh();
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.log(error);

      toast.error("Error updating profile");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormDescription>
                This is the email that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          Update account
        </Button>
      </form>
    </Form>
  );
}
