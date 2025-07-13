"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const CallToAction = () => {
  return (
    <section className="w-full py-16 text-center">
      <motion.div
        className="max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Be the First to Respond, Not the Last to Know.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Download the SERS app now and turn alerts into action — in seconds.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href='/report'  >
          <Button className='cursor-pointer'>Report Emergency</Button></Link>
          
          <Link href='#how-it-works' >
            <Button  className='cursor-pointer' variant="outline">How It Works</Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
