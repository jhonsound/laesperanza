import React from 'react';
import { motion } from 'framer-motion';

export const ActionButtonCTA = ({ selectedMission, handleLetsGoClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${selectedMission === null
        ? "bg-blueGray-300 text-blueGray-500 cursor-not-allowed"
        : "bg-emerald-500 hover:bg-emerald-600"
        } text-white text-lg px-4 font-semibold py-2 px-6 rounded-lg shadow-lg`}
      disabled={selectedMission === null}
      onClick={handleLetsGoClick}
    >
      Let's Go!
    </motion.button>
  );
};
