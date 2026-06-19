import { Navbar } from "@/components/layout/navbar";
import { ConsultantDashboardClient } from "@/components/dashboard/consultant-dashboard-client";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Consultant Dashboard" };

export default function ConsultantDashboardPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-muted/20">
        <ConsultantDashboardClient />
      </main>
    </>
  );
}
