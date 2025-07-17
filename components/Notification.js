import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Notification = ({ message, type = 'success', onClose }) => {
  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500'
  }[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`fixed top-4 right-4 z-50 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-80 transition-opacity"
        aria-label="Cerrar notificación"
      >
        <X size={18} />
      </button>
    </motion.div>
  );
};

export default Notification; 