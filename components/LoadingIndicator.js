import { motion } from 'framer-motion';

const LoadingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
    >
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#A98BFF] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#4B4BF9] border-t-transparent rounded-full animate-spin-reverse"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingIndicator; 