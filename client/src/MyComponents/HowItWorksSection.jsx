"use client";

import { motion } from "framer-motion";
import { PhoneCall, Brain, Map, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Report Emergency",
    icon: PhoneCall,
    desc: "Users or IoT devices report emergencies in real-time using the SERS app or sensors.",
  },
  {
    title: "AI Processes the Alert",
    icon: Brain,
    desc: "Our smart system evaluates the situation and automatically assigns the nearest responder.",
  },
  {
    title: "Live Location & Chat",
    icon: Map,
    desc: "Victims and responders can track each other and communicate live during the rescue.",
  },
  {
    title: "Resolved & Feedback",
    icon: CheckCircle,
    desc: "After the rescue, users can submit feedback to improve future response accuracy.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-6 bg-background text-foreground">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            From alert to rescue — here’s how SERS handles every emergency with precision.
          </p>
        </div>

        {/* Step Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map(({ title, icon: Icon, desc }, index) => (
            <Card key={index} className="hover:shadow-md transition">
              <CardContent className="p-6 space-y-3 flex flex-col items-center text-center h-full">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold  uppercase tracking-wide">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
