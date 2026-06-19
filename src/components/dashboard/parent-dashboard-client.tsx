"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download, Calendar, BookOpen, Settings, Bell, Star, Clock,
  ChevronRight, Package, Heart, FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDate, formatDateTime } from "@/lib/utils";

const tabs = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "consultations", label: "Consultations", icon: Calendar },
  { id: "downloads", label: "Downloads", icon: Download },
  { id: "saved", label: "Saved Items", icon: Heart },
  { id: "settings", label: "Settings", icon: Settings },
];

const mockOrders = [
  { id: "ORD-001", product: "Ultimate Sleep Guide", date: new Date("2026-06-01"), price: 2999, status: "COMPLETED" },
  { id: "ORD-002", product: "Feeding Schedule Templates", date: new Date("2026-06-10"), price: 1299, status: "COMPLETED" },
];

const mockConsultations = [
  {
    id: "CON-001", type: "Comprehensive Consultation", consultant: "Dr. Roselyn Carter",
    date: new Date("2026-06-20T10:00:00"), status: "CONFIRMED", duration: 60,
  },
];

const mockDownloads = [
  { id: "1", name: "Ultimate Sleep Guide", downloadedAt: new Date("2026-06-01"), size: "3.2 MB" },
  { id: "2", name: "Feeding Schedule Templates", downloadedAt: new Date("2026-06-10"), size: "1.8 MB" },
];

export function ParentDashboardClient() {
  const [activeTab, setActiveTab] = useState("overview");

  const userName = "Sarah";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 border-2 border-secondary">
            <AvatarFallback className="bg-secondary/20 text-primary text-lg font-playfair">
              SM
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-playfair text-2xl font-semibold text-primary">
              Welcome back, {userName}
            </h1>
            <p className="font-inter text-sm text-muted-foreground">
              Manage your guides, consultations, and account
            </p>
          </div>
        </div>
        <button className="relative p-2 rounded-full border border-border hover:border-secondary transition-colors">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-56 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          {/* Overview */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stat cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Guides Purchased", value: "2", icon: BookOpen, color: "text-primary bg-primary/10" },
                  { label: "Consultations", value: "1", icon: Calendar, color: "text-secondary bg-secondary/10" },
                  { label: "Downloads", value: "2", icon: Download, color: "text-green-600 bg-green-50" },
                  { label: "Saved Items", value: "3", icon: Heart, color: "text-rose-500 bg-rose-50" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl border border-border p-5">
                    <div className={`inline-flex p-2 rounded-lg ${stat.color} mb-3`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <p className="font-playfair text-2xl font-semibold text-primary">{stat.value}</p>
                    <p className="font-inter text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Upcoming consultation */}
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="font-playfair text-xl font-semibold text-primary mb-4">
                  Upcoming Consultation
                </h2>
                {mockConsultations.map((c) => (
                  <div key={c.id} className="flex items-start justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-inter text-sm font-semibold text-foreground">{c.type}</p>
                        <p className="font-inter text-xs text-muted-foreground">with {c.consultant}</p>
                        <p className="font-inter text-xs text-secondary mt-1 font-medium">
                          {formatDateTime(c.date)} · {c.duration} min
                        </p>
                      </div>
                    </div>
                    <Badge variant="success">Confirmed</Badge>
                  </div>
                ))}
              </div>

              {/* Recent downloads */}
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-playfair text-xl font-semibold text-primary">
                    Recent Downloads
                  </h2>
                  <button
                    onClick={() => setActiveTab("downloads")}
                    className="font-inter text-xs text-secondary hover:text-primary"
                  >
                    View all
                  </button>
                </div>
                <div className="space-y-3">
                  {mockDownloads.map((d) => (
                    <div key={d.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-secondary" />
                        <div>
                          <p className="font-inter text-sm font-medium text-foreground">{d.name}</p>
                          <p className="font-inter text-xs text-muted-foreground">
                            {formatDate(d.downloadedAt)} · {d.size}
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended */}
              <div className="bg-gradient-to-br from-primary to-[#1B2333] rounded-xl p-6 text-white">
                <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-2">
                  Recommended for You
                </p>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  Sleep Regression Survival Guide
                </h3>
                <p className="font-inter text-sm text-white/60 mb-4">
                  Based on your baby's age, the 4-month sleep regression may be coming. Be prepared.
                </p>
                <Link href="/store/sleep-regression-guide">
                  <Button size="sm" className="bg-secondary text-primary hover:bg-accent">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Orders */}
          {activeTab === "orders" && (
            <div className="bg-white rounded-xl border border-border">
              <div className="p-6 border-b border-border">
                <h2 className="font-playfair text-xl font-semibold text-primary">My Orders</h2>
              </div>
              <div className="divide-y divide-border">
                {mockOrders.map((order) => (
                  <div key={order.id} className="p-6 flex items-center justify-between">
                    <div>
                      <p className="font-inter text-sm font-semibold text-foreground">{order.product}</p>
                      <p className="font-inter text-xs text-muted-foreground mt-1">
                        {order.id} · {formatDate(order.date)}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-inter text-sm font-medium text-foreground">
                        ${(order.price / 100).toFixed(2)}
                      </span>
                      <Badge variant="success">Completed</Badge>
                      <Button size="sm" variant="secondary">
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consultations */}
          {activeTab === "consultations" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-border">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h2 className="font-playfair text-xl font-semibold text-primary">My Consultations</h2>
                  <Link href="/booking">
                    <Button size="sm">Book New</Button>
                  </Link>
                </div>
                <div className="divide-y divide-border">
                  {mockConsultations.map((c) => (
                    <div key={c.id} className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-inter text-sm font-semibold text-foreground">{c.type}</p>
                          <p className="font-inter text-xs text-muted-foreground">with {c.consultant}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="font-inter text-xs text-muted-foreground">
                              {formatDateTime(c.date)} · {c.duration} minutes
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="success">Confirmed</Badge>
                          <Button size="sm" variant="secondary">Join Call</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Downloads */}
          {activeTab === "downloads" && (
            <div className="bg-white rounded-xl border border-border">
              <div className="p-6 border-b border-border">
                <h2 className="font-playfair text-xl font-semibold text-primary">My Downloads</h2>
              </div>
              <div className="divide-y divide-border">
                {mockDownloads.map((d) => (
                  <div key={d.id} className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <FileText className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-inter text-sm font-semibold text-foreground">{d.name}</p>
                        <p className="font-inter text-xs text-muted-foreground">
                          Downloaded {formatDate(d.downloadedAt)} · {d.size}
                        </p>
                      </div>
                    </div>
                    <Button size="sm">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === "settings" && (
            <div className="bg-white rounded-xl border border-border p-6 space-y-6">
              <h2 className="font-playfair text-xl font-semibold text-primary">Account Settings</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input defaultValue="Sarah Mitchell" />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input defaultValue="sarah@example.com" type="email" />
                </div>
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Email Notifications
                </label>
                <div className="space-y-2">
                  {["Booking confirmations", "New resources", "Weekly tips newsletter"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 font-inter text-sm text-foreground">
                      <input type="checkbox" defaultChecked className="rounded border-border" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <Button>Save Changes</Button>
            </div>
          )}

          {activeTab === "saved" && (
            <div className="text-center py-16">
              <Heart className="h-12 w-12 text-border mx-auto mb-4" />
              <p className="font-playfair text-xl text-muted-foreground mb-2">No saved items yet</p>
              <p className="font-inter text-sm text-muted-foreground mb-6">
                Wishlist items you save from the store will appear here.
              </p>
              <Link href="/store">
                <Button>Browse Store</Button>
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
