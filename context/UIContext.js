import { createContext, useContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Notification from '../components/Notification';
import LoadingIndicator from '../components/LoadingIndicator';

const UIContext = createContext();

export function UIProvider({ children }) {
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <UIContext.Provider value={{ showNotification, showLoading, hideLoading }}>
      {children}
      <AnimatePresence>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isLoading && <LoadingIndicator />}
      </AnimatePresence>
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI debe ser usado dentro de un UIProvider');
  }
  return context;
} 