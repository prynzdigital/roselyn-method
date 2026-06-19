import { Navbar } from "@/components/layout/navbar";
import { SignInClient } from "@/components/auth/signin-client";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sign In" };

export default function SignInPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted/20 flex items-center justify-center pt-20 pb-12 px-4">
        <SignInClient />
      </main>
    </>
  );
}
