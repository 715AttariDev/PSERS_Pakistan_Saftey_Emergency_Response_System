// app/layout.tsx
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/MyComponents/Header";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import RootLayoutClient from "./RootLayoutClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: "PSERS - Pakistan Smart Emergency Response System",
  description: "Report emergencies, track responders, and save lives in real-time.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <main>{children}</main> */}
          <RootLayoutClient>{children}</RootLayoutClient>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
