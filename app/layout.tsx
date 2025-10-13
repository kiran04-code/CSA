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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.className} antialiased  `}
      >
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
