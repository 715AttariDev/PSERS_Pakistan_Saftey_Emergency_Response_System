"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-12 h-7 bg-cyan-700 border rounded-full flex items-center justify-start dark:justify-end px-1 transition-transform hover:scale-105"
          >
            <motion.div
              className="w-5 h-5 bg-primary text-black rounded-full grid place-items-center shadow-md"
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
            </motion.div>
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="center">
          Toggle Theme
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;