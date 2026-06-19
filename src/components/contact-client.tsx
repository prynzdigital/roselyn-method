"use client";

import React, { useState } from "react";
import { Mail, Phone, Clock, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSent(true);
      toast.success("Message sent! We'll respond within 24 hours.");
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
            How Can We Help?
          </h2>
          <p className="font-inter text-base text-muted-foreground leading-relaxed mb-8">
            Whether you have questions about our guides, need help with a booking, or simply want to learn more about how we can support your family — we're here.
          </p>

          <div className="space-y-5">
            {[
              { icon: Mail, label: "Email Us", value: "hello@roselynmethod.com" },
              { icon: Clock, label: "Response Time", value: "Within 24 hours on business days" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-inter text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                  <p className="font-inter text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Message Sent!</h3>
              <p className="font-inter text-sm text-muted-foreground">
                Thank you for reaching out. We'll respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full rounded border border-border px-3 py-2 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
