import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';

const NAMES = ["Ana", "João", "Maria", "Pedro", "Lucas", "Julia", "Marcos", "Carla", "Fernando", "Aline", "Rafael", "Beatriz", "Thiago", "Camila", "Bruno"];
const CITIES = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Curitiba", "Porto Alegre", "Goiânia", "Fortaleza", "Recife", "Brasília", "Campinas", "Manaus", "Vitória"];
const STATES = ["SP", "RJ", "MG", "BA", "PR", "RS", "GO", "CE", "PE", "DF", "SP", "AM", "ES"];

const generateNotification = () => {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const cityIndex = Math.floor(Math.random() * CITIES.length);
  const city = CITIES[cityIndex];
  const state = STATES[cityIndex];
  
  return {
    id: Date.now().toString(),
    message: `${name} - ${city} - ${state} acabou de comprar`,
    time: new Date()
  };
};

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    let timeoutId;

    const scheduleNextNotification = () => {
      // Random interval between 5 and 15 seconds
      const nextInterval = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
      
      timeoutId = setTimeout(() => {
        const newNotification = generateNotification();
        
        setNotifications(prev => {
          const updated = [...prev, newNotification];
          // Keep max 3 notifications
          if (updated.length > 3) {
            return updated.slice(updated.length - 3);
          }
          return updated;
        });

        // Auto dismiss after 4 seconds
        setTimeout(() => {
          setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
        }, 4000);

        scheduleNextNotification();
      }, nextInterval);
    };

    // Start the cycle
    scheduleNextNotification();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="pointer-events-auto flex items-center gap-4 rounded-xl border border-primary/30 bg-card/95 p-4 shadow-lg backdrop-blur-md neon-border max-w-sm"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <ShoppingBag size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground leading-snug">
                {notification.message}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Agora mesmo
              </p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationSystem;