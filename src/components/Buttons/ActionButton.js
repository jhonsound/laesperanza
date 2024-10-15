import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ActionButton = ({ text = 'Click', onClick = () => {}, title }) => {
  const [blockLevel, setBlockLevel] = useState(false);
  useEffect(() => {
    if (title === 'level 2' || title === 'level 3') {
      setBlockLevel(true);
    }
  }, []);

  return (
    <motion.button
      className={`${
        blockLevel === true ? 'bg-gray-400 border-gray-200 hover:bg-gray-500' : 'bg-sky-500 border-4 border-sky-700 hover:bg-blue-700'
      } border-4 hover:bg-blue-700 mt-4 px-4 py-2 rounded-md shadow-md text-white transition-colors w-full`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={blockLevel}
    >
      {text}
    </motion.button>
  );
};
