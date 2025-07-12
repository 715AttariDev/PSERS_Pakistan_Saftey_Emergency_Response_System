"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "National Disaster Management Authority", src: "/partners/ndma.png" },
  { name: "Shaukat Khanum Hospital", src: "/partners/shaukat-khanum.webp" },
  { name: "Ministry of Health Pakistan", src: "/partners/health-pk.png" },
  { name: "Rescue 1122", src: "/partners/rescue1122.jpg" },
  { name: "PTA", src: "/partners/pta.png" },
  { name: "WHO", src: "/partners/who.svg" },
  { name: "NADRA", src: "/partners/nadra.png" },
  { name: "Edhi Foundation", src: "/partners/edhi.png" },
  { name: "IoT Pakistan", src: "/partners/iotpk.png" },
  { name: "ITU", src: "/partners/itu.png" },
];

const TrustedBySection = () => {
  return (
    <section className=" py-5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h2 className="text-center text-xl font-semibold">
          Trusted By Leading Institutions & Organizations
        </h2>

        {/* Scroll Container */}
        <div className="relative w-full py-15 overflow-hidden">
          <motion.div
            className="flex w-max gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="h-[60px] w-auto flex items-center justify-center"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill={false}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto object-contain opacity-80 grayscale 
             hover:grayscale-0 hover:opacity-100 
             transition duration-300 cursor-pointer 
             dark:invert"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
