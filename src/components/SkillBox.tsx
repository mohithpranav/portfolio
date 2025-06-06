import { ReactElement } from "react";
import { motion } from "framer-motion";

interface SkillBoxProps {
  imgURL: ReactElement;
  name: string;
  description: string;
}

export function SkillBox({ imgURL, name, description }: SkillBoxProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.98 }}
      className="flex sm:w-64 w-1/2 onHover:bg-gray-800 rounded-lg sm:p-3 mb-6 sm:mb-0 hover:bg-[#1C1A19] cursor-pointer"
    >
      <motion.div
        className="pr-2 sm:w-auto sm:pr-4 mr-4 sm:mr-0"
        whileHover={{ rotate: [0, -10, 10, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {imgURL}
      </motion.div>
      <motion.div
        className="flex flex-col justify-center"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="font-semibold text-base w-10 sm:w-auto">{name}</div>
        <div className="text-gray-250 text-xs w-8 sm:w-auto">{description}</div>
      </motion.div>
    </motion.div>
  );
}
