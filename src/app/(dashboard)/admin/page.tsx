import { Navbar } from "@/components/layout/navbar";
import { AdminDashboardClient } from "@/components/admin/admin-dashboard-client";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Dashboard" };

export default function AdminPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-muted/20">
        <AdminDashboardClient />
      </main>
    </>
  );
}
