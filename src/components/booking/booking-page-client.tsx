"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Clock, Calendar, User, FileText, CreditCard, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

const consultationTypes = [
  {
    id: "QUICK_GUIDANCE",
    name: "Quick Guidance Session",
    duration: "30 Minutes",
    price: 7500,
    description: "Perfect for specific questions, a single concern, or a quick check-in on progress.",
    features: ["Video consultation", "Personalized action plan", "Follow-up email summary", "1 week of messaging support"],
    badge: "Most Popular",
    highlight: true,
  },
  {
    id: "COMPREHENSIVE",
    name: "Comprehensive Consultation",
    duration: "60 Minutes",
    price: 14500,
    description: "An in-depth session to create a complete, personalized sleep and care plan for your family.",
    features: ["Video consultation", "Complete care plan", "Customized sleep schedule", "2 weeks of messaging support", "Follow-up call (15 min)"],
    badge: null,
    highlight: false,
  },
  {
    id: "ONGOING_SUPPORT",
    name: "Ongoing Support Package",
    duration: "Monthly",
    price: 39900,
    description: "Continuous expert support for the whole newborn period. Unlimited messaging, weekly check-ins.",
    features: ["Monthly video calls (4x)", "Unlimited messaging", "Personalized sleep plan", "Feeding guidance", "Priority scheduling", "Progress tracking"],
    badge: "Best Value",
    highlight: false,
  },
];

const consultants = [
  { id: "1", name: "Dr. Roselyn Carter", title: "Founder & Lead Consultant", photo: "/images/expert-roselyn.jpg", yearsExp: 12, rating: 5.0, available: true },
  { id: "2", name: "Maria Santos, RN", title: "Senior Newborn Specialist", photo: "/images/expert-maria.jpg", yearsExp: 8, rating: 4.9, available: true },
  { id: "3", name: "Jennifer Walsh", title: "Postpartum Wellness Consultant", photo: "/images/expert-jennifer.jpg", yearsExp: 6, rating: 4.8, available: false },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

const steps = [
  { id: 1, label: "Service", icon: FileText },
  { id: 2, label: "Consultant", icon: User },
  { id: 3, label: "Schedule", icon: Calendar },
  { id: 4, label: "Intake Form", icon: FileText },
  { id: 5, label: "Payment", icon: CreditCard },
];

export function BookingPageClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedConsultant, setSelectedConsultant] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [intakeForm, setIntakeForm] = useState({
    babyName: "", babyAge: "", concerns: "", currentRoutine: "", goals: "",
  });

  const selectedService = consultationTypes.find((t) => t.id === selectedType);
  const selectedConsultantData = consultants.find((c) => c.id === selectedConsultant);

  const canProceed = () => {
    if (currentStep === 1) return !!selectedType;
    if (currentStep === 2) return !!selectedConsultant;
    if (currentStep === 3) return !!selectedDate && !!selectedTime;
    if (currentStep === 4) return !!intakeForm.concerns && !!intakeForm.goals;
    return true;
  };

  const handlePayment = () => {
    toast.success("Redirecting to secure checkout...");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Progress steps */}
      <div className="flex items-center justify-center gap-2 mb-16 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <React.Fragment key={step.id}>
            <button
              onClick={() => step.id < currentStep && setCurrentStep(step.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-inter text-sm font-medium whitespace-nowrap transition-all ${
                currentStep === step.id
                  ? "bg-primary text-white"
                  : currentStep > step.id
                  ? "bg-secondary/20 text-secondary cursor-pointer hover:bg-secondary/30"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {currentStep > step.id ? (
                <Check className="h-4 w-4" />
              ) : (
                <step.icon className="h-4 w-4" />
              )}
              {step.label}
            </button>
            {i < steps.length - 1 && (
              <ChevronRight className="h-4 w-4 text-border flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Service Selection */}
      {currentStep === 1 && (
        <div>
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-2 text-center">
            Choose Your Consultation
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground text-center mb-10">
            Select the service that best fits your needs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {consultationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`relative text-left p-6 rounded-2xl border-2 transition-all ${
                  selectedType === type.id
                    ? "border-secondary bg-secondary/5 shadow-lg"
                    : "border-border bg-white hover:border-secondary/50"
                }`}
              >
                {type.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs">
                    {type.badge}
                  </Badge>
                )}
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span className="font-inter text-sm text-secondary font-medium">
                    {type.duration}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                  {type.name}
                </h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-inter text-xs text-foreground">
                      <Check className="h-3.5 w-3.5 text-secondary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-playfair text-2xl font-semibold text-primary">
                  {formatPrice(type.price / 100)}
                  {type.id === "ONGOING_SUPPORT" && (
                    <span className="font-inter text-sm text-muted-foreground font-normal">/mo</span>
                  )}
                </p>
                {selectedType === type.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Consultant Selection */}
      {currentStep === 2 && (
        <div>
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-2 text-center">
            Choose Your Consultant
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground text-center mb-10">
            Select the specialist you'd like to work with.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {consultants.map((c) => (
              <button
                key={c.id}
                onClick={() => c.available && setSelectedConsultant(c.id)}
                disabled={!c.available}
                className={`relative text-left p-6 rounded-2xl border-2 transition-all ${
                  !c.available ? "opacity-50 cursor-not-allowed border-border bg-muted" :
                  selectedConsultant === c.id
                    ? "border-secondary bg-secondary/5 shadow-lg"
                    : "border-border bg-white hover:border-secondary/50"
                }`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto border-2 border-border">
                  <Image src={c.photo} alt={c.name} width={80} height={80} className="object-cover object-top w-full h-full" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-primary mb-1 text-center">
                  {c.name}
                </h3>
                <p className="font-cormorant text-sm italic text-secondary text-center mb-3">
                  {c.title}
                </p>
                <div className="flex items-center justify-center gap-4 text-xs font-inter text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-secondary text-secondary" /> {c.rating}
                  </span>
                  <span>{c.yearsExp} yrs exp</span>
                </div>
                {!c.available && (
                  <p className="text-center font-inter text-xs text-muted-foreground mt-3">
                    Currently Unavailable
                  </p>
                )}
                {selectedConsultant === c.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Schedule */}
      {currentStep === 3 && (
        <div>
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-2 text-center">
            Select Date & Time
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground text-center mb-10">
            All times shown in your local timezone.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label className="font-inter text-sm font-medium text-foreground mb-3 block">
                Select a Date
              </label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="mb-6"
              />
            </div>

            <div>
              <label className="font-inter text-sm font-medium text-foreground mb-3 block">
                Available Times
              </label>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-3 rounded-lg border font-inter text-sm font-medium transition-all ${
                      selectedTime === time
                        ? "border-secondary bg-secondary/10 text-secondary"
                        : "border-border bg-white text-foreground hover:border-secondary/50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Intake Form */}
      {currentStep === 4 && (
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-2 text-center">
            Intake Form
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground text-center mb-10">
            Help your consultant prepare the most personalized guidance for your session.
          </p>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Baby's Name (optional)
                </label>
                <Input
                  value={intakeForm.babyName}
                  onChange={(e) => setIntakeForm({ ...intakeForm, babyName: e.target.value })}
                  placeholder="e.g., Baby Emma"
                />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Baby's Age
                </label>
                <Input
                  value={intakeForm.babyAge}
                  onChange={(e) => setIntakeForm({ ...intakeForm, babyAge: e.target.value })}
                  placeholder="e.g., 3 weeks, 2 months"
                />
              </div>
            </div>

            <div>
              <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                Primary Concerns *
              </label>
              <textarea
                value={intakeForm.concerns}
                onChange={(e) => setIntakeForm({ ...intakeForm, concerns: e.target.value })}
                placeholder="What challenges are you facing? (e.g., frequent night wakings, trouble settling, feeding difficulties)"
                className="w-full h-28 rounded border border-border px-3 py-2 text-sm font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                required
              />
            </div>

            <div>
              <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                Current Routine
              </label>
              <textarea
                value={intakeForm.currentRoutine}
                onChange={(e) => setIntakeForm({ ...intakeForm, currentRoutine: e.target.value })}
                placeholder="Describe your current feeding and sleep routine..."
                className="w-full h-24 rounded border border-border px-3 py-2 text-sm font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            <div>
              <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                Goals for This Session *
              </label>
              <textarea
                value={intakeForm.goals}
                onChange={(e) => setIntakeForm({ ...intakeForm, goals: e.target.value })}
                placeholder="What would you like to achieve? (e.g., longer sleep stretches, establish a routine, reduce night feeds)"
                className="w-full h-24 rounded border border-border px-3 py-2 text-sm font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Payment */}
      {currentStep === 5 && selectedService && selectedConsultantData && (
        <div className="max-w-lg mx-auto">
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-2 text-center">
            Review & Pay
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground text-center mb-10">
            Confirm your booking details.
          </p>

          <div className="bg-muted rounded-2xl p-6 mb-6 space-y-4">
            <h3 className="font-inter text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Booking Summary
            </h3>
            {[
              { label: "Service", value: selectedService.name },
              { label: "Consultant", value: selectedConsultantData.name },
              { label: "Date", value: selectedDate },
              { label: "Time", value: selectedTime },
              { label: "Duration", value: selectedService.duration },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-start">
                <span className="font-inter text-sm text-muted-foreground">{label}</span>
                <span className="font-inter text-sm font-medium text-foreground text-right max-w-[60%]">
                  {value}
                </span>
              </div>
            ))}
            <div className="border-t border-border pt-4 flex justify-between">
              <span className="font-inter text-base font-semibold text-foreground">Total</span>
              <span className="font-playfair text-xl font-semibold text-primary">
                {formatPrice(selectedService.price / 100)}
              </span>
            </div>
          </div>

          <Button size="xl" className="w-full mb-3" onClick={handlePayment}>
            <CreditCard className="h-5 w-5" />
            Pay Securely — {formatPrice(selectedService.price / 100)}
          </Button>
          <p className="font-inter text-xs text-muted-foreground text-center">
            Secure checkout powered by Stripe. Booking confirmed instantly.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t border-border">
        <Button
          variant="secondary"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          Back
        </Button>

        {currentStep < 5 ? (
          <Button
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={!canProceed()}
          >
            Continue
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
