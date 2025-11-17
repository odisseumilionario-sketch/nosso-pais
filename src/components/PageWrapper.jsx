import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen w-full bg-[#D4292A] flex flex-col items-center justify-center p-4"
    >
        {children}
    </motion.div>
);

export default PageWrapper;