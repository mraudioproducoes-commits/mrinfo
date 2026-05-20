import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { XCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CancelPage = () => {
  return (
    <>
      <Helmet>
        <title>Pagamento Cancelado - MR Infoprodutos</title>
        <meta name="description" content="Seu pagamento foi cancelado" />
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
                <XCircle className="text-destructive" size={80} />
              </div>
              <CardTitle className="text-4xl font-bold text-foreground">
                Pagamento Cancelado
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-center text-muted-foreground text-lg leading-relaxed">
                Seu pagamento não foi completado. Nenhuma cobrança foi realizada.
              </p>

              <div className="bg-muted rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Por que isso aconteceu?
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Você pode ter fechado a janela de pagamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>O tempo para completar o pagamento expirou</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Você escolheu não prosseguir com a compra</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card/50 rounded-xl p-6 border border-border">
                <p className="text-muted-foreground text-center">
                  Não se preocupe! Você pode tentar novamente quando estiver pronto. 
                  Nossos produtos continuam disponíveis para compra.
                </p>
              </div>

              <Button 
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-semibold py-6 transition-all duration-200 active:scale-[0.98]"
              >
                <Link to="/">
                  <ArrowLeft className="mr-2" size={20} />
                  Voltar aos Produtos
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default CancelPage;