"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ISidebarAccordionProps {
  title: string;
  children: React.ReactNode;
  startsOpen?: boolean;
}

export default function SidebarAccordion({
  title,
  children,
  startsOpen = false,
}: ISidebarAccordionProps) {
  const [isOpen, setIsOpen] = useState(startsOpen);

  return (
    <div>
      {/* Header with hover animation */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-row items-center justify-start gap-3 w-full h-10 px-2 border-line border-b text-secondary-white select-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i
          className={`ri-arrow-${isOpen ? "down" : "right"}-s-fill text-xl`}
        ></i>
        <p>{title}</p>
      </motion.div>

      {/* Content area */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-line border-b"
      >
        {children}
      </motion.div>
    </div>
  );
}
