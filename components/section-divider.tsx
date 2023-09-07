'use client';

import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ dealy: 0.125 }}
      className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block'
    ></motion.div>
  );
};

export default SectionDivider;
