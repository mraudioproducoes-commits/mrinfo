import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';

const stripeUrls = {
  'vs-pagode': 'https://buy.stripe.com/eVqbJ30f917m6ChdN08ww04',
  'vs-sertanejo': 'https://buy.stripe.com/cNieVf2nh7vKd0F24i8ww05',
  'loops-percussao': 'https://buy.stripe.com/5kQbJ3bXRdU80dT4cq8ww06',
};

const CheckoutButton = ({ productId }) => {
  const url = stripeUrls[productId];

  return (
    <div className="w-full flex flex-col gap-3">
      <Button
        asChild
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-strong font-bold text-lg py-6 transition-all duration-200 active:scale-[0.98]"
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          Comprar Agora
        </a>
      </Button>

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <CreditCard size={16} />
        <span>Cartão de Crédito</span>
      </div>
    </div>
  );
};

export default CheckoutButton;
