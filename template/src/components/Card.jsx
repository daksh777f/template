import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, desc, className = "", ...props }) => {
  const cardDescription = description || desc;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-white/10 border border-white/20 rounded-xl p-6 text-white backdrop-blur-lg shadow-lg ${className}`}
      {...props}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{cardDescription}</p>
    </motion.div>
  );
};

export default Card;
