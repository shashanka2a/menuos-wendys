import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wendy's - Fresh, Never Frozen",
  description: "Quality is our recipe. Order fresh, never frozen burgers, chicken, and more from Wendy's.",
  keywords: ["wendys", "burgers", "chicken", "fresh", "fast food", "dining"],
  authors: [{ name: "Wendy's Team" }],
  icons: {
    icon: "/menupro-logo.svg",
    shortcut: "/menupro-logo.svg",
    apple: "/menupro-logo.svg",
  },
  openGraph: {
    title: "Wendy's - Fresh, Never Frozen",
    description: "Quality is our recipe. Order fresh, never frozen burgers, chicken, and more from Wendy's.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/menupro-logo.svg",
        width: 198,
        height: 191,
        alt: "Wendy's Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wendy's - Fresh, Never Frozen",
    description: "Quality is our recipe. Order fresh, never frozen burgers, chicken, and more from Wendy's.",
    images: ["/menupro-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
