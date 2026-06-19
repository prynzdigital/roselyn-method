import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "The Roselyn Method — Night Nurse. Better Nights. Brighter Days.",
    template: "%s | The Roselyn Method",
  },
  description:
    "Expert newborn guidance, personalized consultations, and trusted support for every stage of early parenthood. Sleep guides, booking, and premium newborn care.",
  keywords: [
    "night nurse", "newborn sleep training", "new parent support", "postpartum support",
    "baby sleep consultant", "newborn care specialist", "luxury night nurse services",
    "sleep guide", "newborn consultant", "feeding schedule",
  ],
  authors: [{ name: "The Roselyn Method" }],
  creator: "The Roselyn Method",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://roselynmethod.com",
    siteName: "The Roselyn Method",
    title: "The Roselyn Method — Night Nurse. Better Nights. Brighter Days.",
    description:
      "Expert newborn guidance, personalized consultations, and trusted support for every stage of early parenthood.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Roselyn Method",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Roselyn Method",
    description: "Expert newborn guidance and personalized consultations for modern parents.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#FFFFFF",
              color: "#1B2333",
              border: "1px solid #E8CFC8",
            },
          }}
        />
      </body>
    </html>
  );
}
