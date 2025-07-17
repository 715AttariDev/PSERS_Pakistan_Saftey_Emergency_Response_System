"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full h-full flex  items-center justify-center px-6 py-15 md:px-10 bg-background text-foreground"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Saving Lives,
            <br />
            <span className="text-lime-500">One Second at a Time.</span>
          </h1>
          <p className="text-sm uppercase text-lime-700 dark:text-primary font-medium tracking-wide">
           Pakistan Smart Emergency Response System
          </p>

          <p className="text-base text-muted-foreground max-w-md">
            Pakistan SERS connects victims and responders through real-time location,
            communication, and AI-powered dispatch — because every second
            counts.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 cursor-pointer">
            <Link href="/report_emergency">
              <Button size="lg" className='cursor-pointer'>Report Emergency</Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className='cursor-pointer' >
                How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 pt-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="h-5 w-5 hover:text-primary transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="h-5 w-5 hover:text-primary transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="h-5 w-5 hover:text-primary transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="h-5 w-5 hover:text-primary transition" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/undraw_medicine_hqqg.svg" // Replace with your actual image path
            alt="SERS emergency response"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
