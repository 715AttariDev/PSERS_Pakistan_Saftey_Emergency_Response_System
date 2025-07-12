"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t pt-10 pb-6 bg-gray-100 dark:bg-[#161d1d] text-foreground">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & Description */}
        <div>
          <h3 className="text-xl font-bold">PSERS</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Smart Emergency Response System — saving lives through instant alerts,
            smart coordination, and AI-driven action. Trusted by responders and citizens.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/features" className="hover:underline">Features</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-md font-semibold mb-2">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">Our Blog</Link>
            </li>
            <li>
              <Link href="/report-incident" className="hover:underline">Report Incident</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Socials */}
        <div>
          <h4 className="text-md font-semibold mb-2">Stay Connected</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Subscribe for updates and emergency response tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 text-sm border rounded-md bg-background"
            />
            <Button type="submit">Subscribe</Button>
          </form>

          <div className="flex gap-4 mt-6">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PSERS — Smart Emergency Response System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
