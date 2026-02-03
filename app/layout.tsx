import type { Metadata } from "next";
import { Geist, Mozilla_Headline  } from "next/font/google";
import "./globals.css"
import CustomCursor from "./components/custumCorsor";
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: '--font-mozilla-headline',
  subsets: ['latin'],
});

const geistMono = Mozilla_Headline ({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSA",
  description: "Computer Student Association",
  icons: {
    icon: "/Logo.ico",
  },
};

// layout.tsx
// layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.className} antialiased bg-black`}>
        {/* Navbar is REMOVED from here */}
        <CustomCursor />
        <main className="relative z-0">
  
           {children}
        </main>
      </body>
    </html>
  );
}