"use client";

import React, { useState } from "react";
import {
  Calendar, Users, DollarSign, Clock, Settings, Bell,
  FileText, TrendingUp, Check, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDateTime } from "@/lib/utils";

const tabs = [
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "clients", label: "Clients", icon: Users },
  { id: "availability", label: "Availability", icon: Clock },
  { id: "notes", label: "Client Notes", icon: FileText },
  { id: "revenue", label: "Revenue", icon: DollarSign },
  { id: "profile", label: "Profile Settings", icon: Settings },
];

const upcomingAppointments = [
  {
    id: "1", client: "Sarah Mitchell", type: "Comprehensive Consultation",
    date: new Date("2026-06-20T10:00:00"), duration: 60, status: "CONFIRMED",
  },
  {
    id: "2", client: "Priya Kumar", type: "Quick Guidance Session",
    date: new Date("2026-06-20T14:00:00"), duration: 30, status: "CONFIRMED",
  },
  {
    id: "3", client: "Amanda Torres", type: "Ongoing Support Check-In",
    date: new Date("2026-06-21T11:00:00"), duration: 30, status: "PENDING",
  },
];

const dayAvailability = [
  { day: "Monday", times: ["9:00 AM – 12:00 PM", "2:00 PM – 5:00 PM"], enabled: true },
  { day: "Tuesday", times: ["10:00 AM – 4:00 PM"], enabled: true },
  { day: "Wednesday", times: [], enabled: false },
  { day: "Thursday", times: ["9:00 AM – 1:00 PM"], enabled: true },
  { day: "Friday", times: ["10:00 AM – 3:00 PM"], enabled: true },
  { day: "Saturday", times: [], enabled: false },
  { day: "Sunday", times: [], enabled: false },
];

export function ConsultantDashboardClient() {
  const [activeTab, setActiveTab] = useState("calendar");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 border-2 border-secondary">
            <AvatarFallback className="bg-secondary/20 text-primary text-lg font-playfair">
              RC
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-playfair text-2xl font-semibold text-primary">
              Dr. Roselyn Carter
            </h1>
            <p className="font-cormorant text-base italic text-secondary">
              Founder & Lead Consultant
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full border border-border">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "This Week's Sessions", value: "8", icon: Calendar, change: "+2" },
          { label: "Active Clients", value: "24", icon: Users, change: "+3" },
          { label: "Revenue This Month", value: "$3,240", icon: DollarSign, change: "+18%" },
          { label: "Avg. Session Rating", value: "4.97", icon: TrendingUp, change: "↑" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="h-5 w-5 text-secondary" />
              <span className="font-inter text-xs text-green-600 font-semibold">{stat.change}</span>
            </div>
            <p className="font-playfair text-2xl font-semibold text-primary">{stat.value}</p>
            <p className="font-inter text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
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
                  activeTab === tab.id ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 min-w-0">
          {/* Calendar / Appointments */}
          {activeTab === "calendar" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-border">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="font-playfair text-xl font-semibold text-primary">
                    Upcoming Appointments
                  </h2>
                  <Badge variant="secondary">{upcomingAppointments.length} scheduled</Badge>
                </div>
                <div className="divide-y divide-border">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="p-6 flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary font-playfair font-bold flex-shrink-0">
                          {apt.client.charAt(0)}
                        </div>
                        <div>
                          <p className="font-inter text-sm font-semibold text-foreground">
                            {apt.client}
                          </p>
                          <p className="font-inter text-xs text-muted-foreground mb-1">{apt.type}</p>
                          <p className="font-inter text-xs text-secondary font-medium">
                            {formatDateTime(apt.date)} · {apt.duration} min
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={apt.status === "CONFIRMED" ? "success" : "warning"}>
                          {apt.status}
                        </Badge>
                        <Button size="sm" variant="secondary">
                          Start Session
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Availability */}
          {activeTab === "availability" && (
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="font-playfair text-xl font-semibold text-primary mb-6">
                Weekly Availability
              </h2>
              <div className="space-y-4">
                {dayAvailability.map((day) => (
                  <div key={day.day} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${day.enabled ? "bg-green-400" : "bg-border"}`} />
                      <span className="font-inter text-sm font-medium text-foreground w-24">
                        {day.day}
                      </span>
                    </div>
                    <div className="flex-1 mx-4">
                      {day.enabled ? (
                        <div className="flex flex-wrap gap-2">
                          {day.times.map((t) => (
                            <span key={t} className="font-inter text-xs bg-muted px-2.5 py-1 rounded-full text-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="font-inter text-xs text-muted-foreground">Unavailable</span>
                      )}
                    </div>
                    <Button size="sm" variant="ghost">Edit</Button>
                  </div>
                ))}
              </div>
              <Button className="mt-6">Save Availability</Button>
            </div>
          )}

          {/* Other tabs */}
          {!["calendar", "availability"].includes(activeTab) && (
            <div className="bg-white rounded-xl border border-border p-12 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                {React.createElement(tabs.find((t) => t.id === activeTab)?.icon || Settings, {
                  className: "h-7 w-7 text-secondary",
                })}
              </div>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-2">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h2>
              <p className="font-inter text-sm text-muted-foreground mb-6">
                Connect your database to manage this section.
              </p>
              <Button size="sm" variant="secondary" onClick={() => setActiveTab("calendar")}>
                Back to Calendar
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
