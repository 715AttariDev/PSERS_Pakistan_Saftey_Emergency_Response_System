"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Imran",
    role: "ER Doctor, Lahore General Hospital",
    message:
      "SERS helped us receive patients faster than ever before. The instant alerts and live tracking gave our medical team a head-start — this system is a lifesaver, literally.",
    image: "/testimonials/uifaces-popular-image (1).jpg",
  },
  {
    name: "Inspector Salman Tariq",
    role: "Rescue 1122 Commander, Punjab",
    message:
      "The AI dispatching and location tracking feature is a game changer for on-ground coordination. We can now manage multiple teams more efficiently during disasters.",
    image: "/testimonials/uifaces-popular-image (2).jpg",
  },
  {
    name: "Basheer Ahmed",
    role: "Flood Victim, Gilgit",
    message:
      "When our village flooded, I used SERS to alert help. Within minutes, a rescue team arrived. I can't thank the developers enough for creating such a powerful app.",
    image: "/testimonials/uifaces-popular-image.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-background text-foreground">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">What People Are Saying</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Real stories from those who use SEF SERS — doctors, rescue teams, and citizens whose lives were changed by fast emergency response.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  “{item.message}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
