"use client";

import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-[#161d1d]  text-foreground px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About PSERS</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            SEF SERS is an advanced, real-time emergency management platform designed to modernize and accelerate crisis response. 
            Combining IoT-based alerts, AI-driven decision-making, live geolocation tracking, and secure two-way communication, 
            it empowers communities, first responders, and government agencies to coordinate in high-pressure situations — 
            faster and smarter than ever before.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Our mission is simple yet powerful: reduce response times, optimize resources, and improve public safety outcomes. 
            With seamless integration across devices and agencies, SERS transforms emergencies into actionable intelligence — 
            ensuring help arrives exactly where—and when—it’s needed most.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src="/Health professional team-amico.svg" // Replace with your image path
            alt="SERS Emergency System Overview"
            width={500}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;
