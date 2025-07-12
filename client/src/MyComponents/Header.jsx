"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// Navigation Links
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/70 "
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 text-xl font-semibold ">
          <Leaf className="w-6 h-6 text-[#88dc00]" strokeWidth={2.5} />
          <span>PSERS</span>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Auth Buttons + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3 ">
          {mounted && (
            <button
              className="text-muted-foreground hover:text-primary cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <Link href="/login">
            <button className="hover:text-primary cursor-pointer">Login</button>
          </Link>
          <Link href="/signup">
            <Button variant="default" size="sm" className='cursor-pointer' >Sign Up</Button>
          </Link>
        </div>

        {/* Right (Mobile): Theme + Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {mounted && (
            <button
            
              className="hover:text-primary"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <button
            className="hover:text-primary"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3 bg-background/95">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-muted-foreground hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-2">
            <Link href="/login">
              <Button variant="outline" className="w-full text-left bor">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="default" className="w-full text-left">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
