"use client";

import React, { useState } from "react";
import {
  BarChart2, Users, ShoppingBag, Calendar, BookOpen, Settings,
  TrendingUp, DollarSign, Star, Bell, ChevronUp, ChevronDown,
  Package, FileText, UserCheck, Tag, Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";

const navItems = [
  { id: "overview", label: "Overview", icon: BarChart2 },
  { id: "orders", label: "Orders", icon: ShoppingBag },
  { id: "consultations", label: "Consultations", icon: Calendar },
  { id: "products", label: "Products", icon: Package },
  { id: "users", label: "Users", icon: Users },
  { id: "consultants", label: "Consultants", icon: UserCheck },
  { id: "blog", label: "Blog CMS", icon: FileText },
  { id: "newsletter", label: "Newsletter", icon: Mail },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "affiliate", label: "Affiliates", icon: Tag },
  { id: "settings", label: "Settings", icon: Settings },
];

const revenueData = [
  { month: "Jan", revenue: 3200 }, { month: "Feb", revenue: 4800 },
  { month: "Mar", revenue: 5600 }, { month: "Apr", revenue: 7200 },
  { month: "May", revenue: 8900 }, { month: "Jun", revenue: 11400 },
];

const ordersData = [
  { day: "Mon", orders: 12 }, { day: "Tue", orders: 18 }, { day: "Wed", orders: 8 },
  { day: "Thu", orders: 24 }, { day: "Fri", orders: 31 }, { day: "Sat", orders: 22 }, { day: "Sun", orders: 14 },
];

const recentOrders = [
  { id: "ORD-089", user: "Sarah M.", product: "Ultimate Sleep Guide", amount: 29.99, status: "COMPLETED" },
  { id: "ORD-090", user: "Priya K.", product: "Complete Bundle", amount: 59.99, status: "COMPLETED" },
  { id: "ORD-091", user: "Amanda T.", product: "Feeding Templates", amount: 12.99, status: "PENDING" },
  { id: "ORD-092", user: "Tanya L.", product: "Postpartum Guide", amount: 14.99, status: "COMPLETED" },
];

export function AdminDashboardClient() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-2xl font-semibold text-primary">
            Admin Dashboard
          </h1>
          <p className="font-inter text-sm text-muted-foreground">
            The Roselyn Method — Executive Overview
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="secondary">Export Report</Button>
          <button className="relative p-2 rounded-full border border-border">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-56 flex-shrink-0">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-inter text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {activeSection === "overview" && (
            <div className="space-y-6">
              {/* KPI cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Revenue", value: "$11,400", change: "+28%", up: true, icon: DollarSign, color: "text-green-600 bg-green-50" },
                  { label: "Total Orders", value: "247", change: "+12%", up: true, icon: ShoppingBag, color: "text-blue-600 bg-blue-50" },
                  { label: "Consultations", value: "38", change: "+5%", up: true, icon: Calendar, color: "text-purple-600 bg-purple-50" },
                  { label: "Active Users", value: "1,842", change: "+18%", up: true, icon: Users, color: "text-secondary bg-secondary/10" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-white rounded-xl border border-border p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`inline-flex p-2 rounded-lg ${kpi.color}`}>
                        <kpi.icon className="h-4 w-4" />
                      </div>
                      <span className={`font-inter text-xs font-semibold flex items-center gap-0.5 ${kpi.up ? "text-green-600" : "text-red-500"}`}>
                        {kpi.up ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                        {kpi.change}
                      </span>
                    </div>
                    <p className="font-playfair text-2xl font-semibold text-primary">{kpi.value}</p>
                    <p className="font-inter text-xs text-muted-foreground">{kpi.label}</p>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-border p-6">
                  <h3 className="font-inter text-sm font-semibold text-foreground mb-6">
                    Monthly Revenue
                  </h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E8CFC8" />
                      <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "Inter" }} />
                      <YAxis tick={{ fontSize: 11, fontFamily: "Inter" }} />
                      <Tooltip
                        contentStyle={{ fontFamily: "Inter", fontSize: 12, borderColor: "#E8CFC8" }}
                        formatter={(v) => [`$${v}`, "Revenue"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#D7B0A3"
                        strokeWidth={2.5}
                        dot={{ fill: "#03051A", r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl border border-border p-6">
                  <h3 className="font-inter text-sm font-semibold text-foreground mb-6">
                    Orders This Week
                  </h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={ordersData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E8CFC8" />
                      <XAxis dataKey="day" tick={{ fontSize: 11, fontFamily: "Inter" }} />
                      <YAxis tick={{ fontSize: 11, fontFamily: "Inter" }} />
                      <Tooltip contentStyle={{ fontFamily: "Inter", fontSize: 12, borderColor: "#E8CFC8" }} />
                      <Bar dataKey="orders" fill="#D7B0A3" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent orders */}
              <div className="bg-white rounded-xl border border-border">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h3 className="font-inter text-sm font-semibold text-foreground">
                    Recent Orders
                  </h3>
                  <Button size="sm" variant="ghost" onClick={() => setActiveSection("orders")}>
                    View All
                  </Button>
                </div>
                <div className="divide-y divide-border">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between px-6 py-4">
                      <div>
                        <p className="font-inter text-sm font-medium text-foreground">{order.user}</p>
                        <p className="font-inter text-xs text-muted-foreground">{order.product} · {order.id}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-inter text-sm font-semibold text-foreground">
                          ${order.amount}
                        </span>
                        <Badge variant={order.status === "COMPLETED" ? "success" : "warning"}>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other sections placeholder */}
          {activeSection !== "overview" && (
            <div className="bg-white rounded-xl border border-border p-12 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                {React.createElement(navItems.find((n) => n.id === activeSection)?.icon || Settings, {
                  className: "h-7 w-7 text-secondary",
                })}
              </div>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-2">
                {navItems.find((n) => n.id === activeSection)?.label}
              </h2>
              <p className="font-inter text-sm text-muted-foreground mb-6">
                This section is ready for content management. Connect your database to populate real data.
              </p>
              <Button size="sm" variant="secondary" onClick={() => setActiveSection("overview")}>
                Back to Overview
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
