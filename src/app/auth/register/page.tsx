"use client"
import redirectIfAuthenticated from '@/components/redirectIfAuthenticated'
import { UserAuthRegisterForm } from '@/components/ui/usr-register-form'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
    <div className="grid gap-2 text-center">
      <h1 className="text-3xl font-bold">Register</h1>
      <p className="text-nowrap text-muted-foreground">
        Enter your email below to create your account
      </p>
    </div>
    <UserAuthRegisterForm />
    <div className="mt-4 text-center text-sm">
      Already have an account?{" "}
      <Link href="/auth/login" className="underline">
        Sign In
      </Link>
    </div>
  </div>
  )
}

export default redirectIfAuthenticated(Register);
