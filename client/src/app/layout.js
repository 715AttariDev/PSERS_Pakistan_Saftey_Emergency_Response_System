// app/layout.tsx
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/MyComponents/Header";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header/>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
