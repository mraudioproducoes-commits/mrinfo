import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, CreditCard, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import apiServerClient from '@/lib/apiServerClient';

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      apiServerClient.fetch(`/stripe/session/${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setPayment(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  const getMethodDisplay = (method) => {
    if (method === 'pix') return 'PIX';
    if (method === 'card') return 'Cartão de Crédito';
    return 'Cartão/PIX';
  };

  const methodDisplay = payment ? getMethodDisplay(payment.paymentMethod) : '';

  return (
    <>
      <Helmet>
        <title>Pagamento Confirmado - MR Infoprodutos</title>
        <meta name="description" content="Seu pagamento foi processado com sucesso" />
      </Helmet>

      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <Card className="bg-card border-border neon-border">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="text-primary animate-pulse-glow" size={80} />
              </div>
              <CardTitle className="text-4xl font-bold text-foreground">
                Pagamento Confirmado!
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {loading ? (
                <div className="text-center text-muted-foreground py-8">
                  <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                  Carregando detalhes do pagamento...
                </div>
              ) : (
                <>
                  <p className="text-center text-muted-foreground text-lg leading-relaxed">
                    Obrigado pela sua compra. Seu pagamento {payment?.paymentMethod && <span>via <strong className="text-foreground font-semibold">{methodDisplay}</strong></span>} foi processado com sucesso.
                  </p>

                  {payment && (
                    <div className="bg-muted rounded-xl p-6 space-y-4">
                      <div className="flex justify-between items-center border-b border-border pb-3">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="text-primary font-semibold">
                          {payment.status === 'paid' ? 'Pago' : 'Pendente'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center border-b border-border pb-3">
                        <span className="text-muted-foreground">Valor:</span>
                        <span className="text-foreground font-bold text-xl">
                          R$ {(payment.amountTotal / 100).toFixed(2).replace('.', ',')}
                        </span>
                      </div>

                      {payment.paymentMethod && (
                        <div className="flex justify-between items-center border-b border-border pb-3">
                          <span className="text-muted-foreground">Método:</span>
                          <span className="text-foreground flex items-center gap-2">
                            {payment.paymentMethod === 'pix' ? <QrCode size={16} /> : <CreditCard size={16} />}
                            {methodDisplay}
                          </span>
                        </div>
                      )}
                      
                      {payment.customerEmail && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Email:</span>
                          <span className="text-foreground truncate ml-4">{payment.customerEmail}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="bg-card/50 rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Próximos Passos
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <span>Você receberá um email de confirmação em breve</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <span>O link para download será enviado para o seu email</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <span>Em caso de dúvidas, entre em contato conosco</span>
                      </li>
                    </ul>
                  </div>
                </>
              )}

              <Button 
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-semibold py-6 transition-all duration-200 active:scale-[0.98] mt-6"
              >
                <Link to="/">
                  <Home className="mr-2" size={20} />
                  Voltar para Home
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default SuccessPage;