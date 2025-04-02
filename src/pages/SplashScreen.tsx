
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Navigate to landing page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <motion.div 
      className="min-h-screen bg-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          ScamShield🦾
        </h1>
        <p className="mt-2 text-slate-500">
          AI-powered security at its core
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
