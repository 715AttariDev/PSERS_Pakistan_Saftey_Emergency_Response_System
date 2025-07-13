"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Real-Time Emergency Alerts",
    description:
      "SERS enables instant emergency reporting via mobile apps, wearables, or embedded IoT devices—notifications go out within seconds. IoT sensors continuously monitor environmental and structural indicators, triggering early warnings to prevent incidents from escalating. " +
      "Our AI processes incident data—location, type, responder availability—and auto-dispatches the best-fit medical, fire, or security team without manual intervention. This smart dispatch reduces delays and optimizes resource use. " +
      "Additionally, SERS supports two-way secure communication: victims, bystanders, and responders can connect via text, voice, or quick-status polling (“Are you safe?”), ensuring real-time situational awareness and coordination during emergencies.",
    image: "/features/Emergency call-bro.svg",
  },
  {
    title: "AI-Based Responder Dispatch",
    description:
      "Our AI-powered dispatch dramatically improves 911-style call handling. It rapidly analyzes incoming data—caller speech patterns, incident urgency, caller location—and triages calls so the most critical cases get priority. " +
      "Research shows AI can categorize emergencies faster than humans, ease dispatcher workload by 30–36%, and even detect caller emotional state to assist with crisis de-escalation :contentReference[oaicite:1]{index=1}. " +
      "AI also handles non-critical calls, filters duplicates during major events, and frees human dispatchers for life‑threatening situations—improving overall efficiency and accuracy.",
    image: "/features/Chat bot-pana.svg",
  },
  {
    title: "Live Location & Communication",
    description:
      "Using GPS and geofencing, SERS pinpoints victims and responders in real time. This enables secure map-based tracking, precise coordination, and faster identification of resources. " +
      "Advanced systems like AML automatically send accurate caller location during 911 calls—often within 30 meters—reducing time spent querying for location. " +
      "Live communication via text, voice, or media uploads enhances situational awareness; platforms like BluLink already enable video, photos, and chat during emergencies, helping responders assess scenes before arrival",
    image: "/features/Location tracking-bro.svg",
  },
  {
    title: "Analytics & Reports",
    description:
      "After each incident, SERS generates comprehensive analytics: dispatch times, geospatial maps, responder routes, incident density, and user feedback. " +
      "These reports enable authorities to evaluate performance, identify hotspots, and fine-tune resource deployment. Leading mass notification systems use similar analytics to track delivery rates, engagement, and geographic effectiveness. " +
      "By reviewing post-event data, agencies can improve policies, increase accuracy, and build public trust.",
    image: "/features/Online report-bro.svg",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background text-foreground px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Features That Save Lives</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            SEF SERS is built with powerful features that make emergency response smarter, faster, and more humane.
          </p>
        </div>

        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10 md:gap-20 `}
          >
            {/* Text */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {feature.description}
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 w-full flex justify-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={350}
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
