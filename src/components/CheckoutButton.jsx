import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CreditCard } from 'lucide-react';
import apiServerClient from '@/lib/apiServerClient';
import { toast } from 'sonner';

const CheckoutButton = ({ amount, productName, productId }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // amount is expected to be in Reais (e.g., 97 or 29.90)
      const response = await apiServerClient.fetch('/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          productName,
          successUrl: window.location.origin + '/success?session_id={CHECKOUT_SESSION_ID}',
          cancelUrl: window.location.origin + '/cancel',
          currency: 'brl'
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Falha ao criar checkout');
      }

      const data = await response.json();
      
      if (data.url) {
        // Use window.location.href for iOS compatibility
        // This method works on all devices including Safari on iOS
        // and avoids pop-up blocking restrictions
        window.location.href = data.url;
      } else {
        throw new Error('URL de checkout não retornada pelo servidor');
      }
    } catch (error) {
      console.error('Erro no checkout:', error);
      toast.error('Erro ao processar pagamento. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <Button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-strong font-bold text-lg py-6 transition-all duration-200 active:scale-[0.98]"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processando...
          </>
        ) : (
          'Comprar Agora'
        )}
      </Button>
      
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <CreditCard size={16} />
        <span>Cartão de Crédito</span>
      </div>
    </div>
  );
};

export default CheckoutButton;