"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function SignInClient() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
      toast.success("Magic link sent! Check your email.");
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    toast.info("Redirecting to Google...");
  };

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-flex flex-col items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="The Roselyn Method"
            width={72}
            height={72}
            className="rounded-full border-2 border-secondary/30 shadow-lg"
          />
          <div>
            <p className="font-playfair text-xl font-semibold text-primary">
              The Roselyn Method
            </p>
            <p className="font-cormorant text-sm italic text-secondary">
              Night Nurse. Better Nights. Brighter Days.
            </p>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
        <h1 className="font-playfair text-2xl font-semibold text-primary mb-2 text-center">
          Welcome Back
        </h1>
        <p className="font-inter text-sm text-muted-foreground text-center mb-8">
          Sign in to access your guides, consultations, and dashboard.
        </p>

        {emailSent ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7 text-secondary" />
            </div>
            <h2 className="font-playfair text-xl font-semibold text-primary mb-2">
              Check Your Email
            </h2>
            <p className="font-inter text-sm text-muted-foreground mb-4">
              We sent a magic link to <strong>{email}</strong>. Click it to sign in instantly.
            </p>
            <button
              onClick={() => setEmailSent(false)}
              className="font-inter text-xs text-secondary hover:text-primary transition-colors"
            >
              Use a different email
            </button>
          </div>
        ) : (
          <>
            {/* Google */}
            <Button
              variant="secondary"
              className="w-full mb-4"
              onClick={handleGoogleSignIn}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-border" />
              <span className="font-inter text-xs text-muted-foreground">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Email magic link */}
            <form onSubmit={handleEmailSignIn} className="space-y-4">
              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Send Magic Link
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </>
        )}

        <p className="font-inter text-xs text-muted-foreground text-center mt-6">
          Don't have an account?{" "}
          <Link href="/auth/signin" className="text-secondary hover:text-primary font-medium">
            Create one for free
          </Link>
        </p>
      </div>

      <p className="font-inter text-xs text-muted-foreground text-center mt-6">
        By signing in, you agree to our{" "}
        <Link href="/terms" className="text-secondary hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-secondary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
