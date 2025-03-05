"use client";

import { motion } from "framer-motion";

const ProjectBox = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <motion.div 
      className="relative w-[90%] max-w-lg rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-300 hover:shadow-2xl transition-transform duration-300"
      whileHover={{ scale: 1.08 }}
    >
        <div className="p-3">
<div className="border-2 border-black rounded-3xl overflow-hidden">
  <img src={image} alt={title} className="w-full h-[250px] object-cover rounded-2xl" />
</div>
</div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700 text-md mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
