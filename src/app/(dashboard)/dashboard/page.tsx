import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ParentDashboardClient } from "@/components/dashboard/parent-dashboard-client";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "My Dashboard" };

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-muted/20">
        <ParentDashboardClient />
      </main>
      <Footer />
    </>
  );
}
