"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, MessageSquare, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Instant Emergency Reporting",
    icon: <Zap className="h-6 w-6 text-primary" />,
    desc: "Report emergencies in real-time from anywhere, instantly and reliably.",
  },
  {
    title: "Live Responder Tracking",
    icon: <MapPin className="h-6 w-6 text-primary" />,
    desc: "Track the exact location of victims and responders during emergencies.",
  },
  {
    title: "Seamless Communication",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    desc: "Stay connected with rescue teams through live chat and updates.",
  },
  {
    title: "Secure & Encrypted System",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    desc: "All data is encrypted to protect location, identity, and health info.",
  },
];

const WhySERSSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-[#161d1d] text-foreground">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose PSERS?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            A next-level emergency system built for fast response, public safety, and smart coordination.
          </p>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition">
              <CardContent className="p-6 space-y-3">
                <div>{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhySERSSection;
