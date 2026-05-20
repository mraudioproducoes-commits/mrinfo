import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "Consigo alterar o BPM e o Tom?",
    answer: "Sim! Como as pistas são separadas em formato WAV, você pode alterar o BPM e o Tom diretamente na sua DAW de preferência sem perder a qualidade, proporcionando total flexibilidade para as suas produções."
  },
  {
    question: "As pistas são separadas?",
    answer: "Sim, absolutamente. Todos os arranjos são divididos em pistas individuais (bateria, baixo, violão, sanfona, teclados, percussão, etc.), permitindo que você realize mixagens, edições e mute os canais que não deseja utilizar."
  },
  {
    question: "Quais DAWs são compatíveis?",
    answer: "Nossos VS Multipistas são 100% compatíveis com Reaper, Cubase, FL Studio, Ableton Live, Logic Pro, Pro Tools, Studio One, Audacity e qualquer outro software profissional que aceite importação de áudio WAV multipista."
  },
  {
    question: "O acesso é imediato após a compra?",
    answer: "Sim! Assim que o pagamento for confirmado pelo sistema, você receberá automaticamente o link para download de todo o material diretamente no seu e-mail cadastrado."
  },
  {
    question: "Qual o formato e qualidade dos arquivos?",
    answer: "Todos os áudios estão em formato WAV profissional, renderizados em 44.1kHz e 16-bit. Essa é a melhor qualidade e o formato padrão utilizado na indústria musical, garantindo fidelidade sonora máxima."
  },
  {
    question: "Posso usar comercialmente?",
    answer: "Sim! Os loops e samples adquiridos conosco são 100% royalty-free. Você pode utilizá-los tranquilamente em suas produções comerciais, shows ao vivo, lançamentos no Spotify, Apple Music e YouTube sem problemas com direitos autorais."
  },
  {
    question: "Os backing vocals estão inclusos?",
    answer: "Sim, nas músicas que possuem arranjos originais com vozes de apoio, as pistas de backing vocal estão devidamente separadas, afinadas e inclusas no seu pacote para dar mais preenchimento às suas tracks."
  },
  {
    question: "Os downloads são ilimitados?",
    answer: "Com certeza. Ao adquirir o pack, você terá acesso vitalício aos arquivos. Você pode baixar os packs quantas vezes quiser, sempre que precisar, em qualquer computador ou dispositivo."
  },
  {
    question: "Qual a diferença entre VS Pagode e VS Sertanejo?",
    answer: "A diferença principal está na instrumentação gravada e na levada rítmica. O VS Pagode foca em percussões essenciais (pandeiro, surdo, rebolo), cavaco e banjo. Já o VS Sertanejo destaca violões (bases e solos), sanfona e uma bateria com a pegada característica do gênero."
  },
  {
    question: "Funciona offline?",
    answer: "Sim! Após realizar o download de todos os arquivos para o armazenamento do seu computador ou HD externo, você poderá carregá-los em sua DAW e usá-los em suas produções ou shows ao vivo totalmente offline, sem depender de internet."
  }
];

const FAQSection = () => {
  // Split FAQs into two columns for desktop view
  const leftColumnFAQs = faqData.slice(0, 5);
  const rightColumnFAQs = faqData.slice(5, 10);

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-background relative z-10 border-t border-border/50 overflow-hidden w-full max-w-[100vw]">
      {/* Decorative background elements - positioned safely inside container to prevent overflow */}
      <div className="absolute top-1/4 left-[-10%] w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 md:mb-16 w-full"
        >
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/30 neon-glow">
              <HelpCircle className="text-primary w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance" style={{ letterSpacing: '-0.02em' }}>
            Perguntas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Tire suas dúvidas sobre compatibilidade, formatos e direitos de uso dos nossos VS Multipistas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Changed x to y animation to prevent horizontal scroll issues on mobile
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <Accordion type="multiple" className="w-full space-y-4">
              {leftColumnFAQs.map((faq, index) => (
                <AccordionItem 
                  key={`left-faq-${index}`} 
                  value={`left-item-${index}`}
                  className="faq-item-container border-b-0 w-full overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline py-4 md:py-5 text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4 md:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} // Changed x to y animation to prevent horizontal scroll issues on mobile
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <Accordion type="multiple" className="w-full space-y-4">
              {rightColumnFAQs.map((faq, index) => (
                <AccordionItem 
                  key={`right-faq-${index}`} 
                  value={`right-item-${index}`}
                  className="faq-item-container border-b-0 w-full overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline py-4 md:py-5 text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4 md:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;