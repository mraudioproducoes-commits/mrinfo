import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AudioPlayer from '@/components/AudioPlayer.jsx';
import CheckoutButton from '@/components/CheckoutButton.jsx';
import MusicListButton from '@/components/MusicListButton.jsx';
import MusicListModal from '@/components/MusicListModal.jsx';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink } from 'lucide-react';

const ProductCard = ({ 
  title, 
  description, 
  price, 
  features = [], 
  audioSamples = [], 
  songs = [],
  productId,
  pixUrl,
  showFullList = false,
  onShowFullList
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasSongsList = (productId === 'vs-pagode' || productId === 'vs-sertanejo') && songs.length > 0;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full w-full"
      >
        <Card className="bg-card border-border neon-border hover:neon-glow transition-all duration-300 flex flex-col h-full w-full overflow-hidden">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              {title}
            </CardTitle>
            <p className="text-muted-foreground text-base sm:text-lg mt-2 leading-relaxed">
              {description}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6 flex-grow p-4 sm:p-6 pt-0 sm:pt-0">
            {features.length > 0 && (
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {hasSongsList && (
              <div className="pt-2 pb-2 sm:pb-4 w-full">
                <MusicListButton onClick={() => setIsModalOpen(true)} />
              </div>
            )}

            {audioSamples.length > 0 && (
              <div className="space-y-4 w-full">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  Amostras de Áudio
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {audioSamples.map((sample, index) => (
                    <div key={index} className="w-full max-w-full overflow-hidden">
                      <AudioPlayer 
                        videoId={sample.videoId}
                        title={sample.title || `Amostra ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {onShowFullList && !showFullList && !hasSongsList && (
              <Button
                onClick={onShowFullList}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm sm:text-base"
              >
                Ver lista completa de músicas
              </Button>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-4 mt-auto p-4 sm:p-6 pt-2 sm:pt-6 w-full">
            <div className="text-center w-full">
              <p className="text-3xl sm:text-4xl font-bold text-primary break-words">
                R$ {(price / 100).toFixed(2).replace('.', ',')}
              </p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <CheckoutButton
                amount={price / 100} // Convert from centavos to Reais for the backend
                productName={title}
                productId={productId}
              />
              {pixUrl && (
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 py-5 sm:py-6 text-base sm:text-lg font-semibold"
                >
                  <a href={pixUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Pagar com PIX</span>
                  </a>
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      <MusicListModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        songs={songs}
        title={`Repertório: ${title}`}
      />
    </>
  );
};

export default ProductCard;