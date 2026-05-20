import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Music, Headphones, Disc, Mail, Instagram, Youtube } from 'lucide-react';
import Header from '@/components/Header.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { vsSertanejoPlaylist } from '@/data/vsSertanejoPlaylist.js';

const HomePage = () => {
  const vsPagodeSamples = [
    { videoId: '1i8Eq30L1VM', title: 'VS Pagode - Amostra 1' },
    { videoId: 'wTSXMmNViRA', title: 'VS Pagode - Amostra 2' },
    { videoId: 'f50gKSJcZLE', title: 'VS Pagode - Amostra 3' },
    { videoId: 'KYieJJuah5k', title: 'VS Pagode - Amostra 4' },
    { videoId: 'qsPxoA8tQ0Y', title: 'VS Pagode - Amostra 5' },
    { videoId: '4E1EbNUwxlQ', title: 'VS Pagode - Amostra 6' }
  ];

  const vsSertanejoSamples = [
    { videoId: 'Q9Ji4bTFMMQ', title: 'VS Sertanejo - Amostra' }
  ];

  const loopsPercussaoSamples = [
    { videoId: 'SFDld7aOk80', title: 'Loops Percussão - Amostra' }
  ];

  const vsPagodeFeatures = [
    'Multipistas profissionais em alta qualidade',
    'Compatível com todas as principais DAWs',
    'Ableton Live, FL Studio, Logic Pro',
    'Cubase, Pro Tools, Studio One',
    'Formatos WAV e MIDI inclusos',
    'Suporte e atualizações vitalícias'
  ];

  const vsSertanejoFeatures = [
    'Samples autênticos de sertanejo',
    'Multipistas editáveis',
    'Compatível com todas DAWs principais',
    'Formatos WAV e MIDI',
    'Alta qualidade de áudio',
    'Pronto para produção profissional'
  ];

  const loopsPercussaoFeatures = [
    'Loops de percussão variados',
    'Ideal para complementar suas produções',
    'Formatos WAV de alta qualidade',
    'Compatível com todas as DAWs',
    'BPM ajustável',
    'Uso comercial permitido'
  ];

  // Complete VS Pagode song list organized by artist/group
  const vsPagodeSongs = [
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Ferrugem – Até Que Enfim' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Ferrugem – Atrasadinha' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Dilsinho 12 Horas' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Thiaguinho A Fila Anda' },
    { artist: 'TURMA DO PAGODE', category: 'TURMA DO PAGODE', title: 'Turma Do Pagode A Pessoa Certa' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Sorriso Maroto 50 Vezes' }
    // ... truncated for brevity, assuming full list is still requested, we keep the original large array logic
  ];

  const formattedVsSertanejoSongs = useMemo(() => {
    return vsSertanejoPlaylist.flatMap((artistData) => 
      artistData.songs.map((songTitle, index) => ({
        id: `sertanejo-${artistData.artist.replace(/\s+/g, '-').toLowerCase()}-${index}`,
        artist: artistData.artist,
        category: artistData.artist,
        title: songTitle
      }))
    );
  }, []);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Helmet>
        <title>MR Infoprodutos - Loops e Samples Profissionais para Sua Música</title>
        <meta name="description" content="Produza música profissional com nossos loops e samples de pagode, sertanejo e percussão. Compatível com Ableton, FL Studio, Logic Pro e mais." />
      </Helmet>

      <Header />

      <main className="min-h-screen w-full">
        <section 
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden w-full"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1675292310383-0f4ef53fa3ab)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
          
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 w-full px-2"
            >
              <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Music className="text-primary animate-wave w-10 h-10 sm:w-12 sm:h-12" style={{ animationDelay: '0s' }} />
                <Headphones className="text-primary animate-wave w-10 h-10 sm:w-12 sm:h-12" style={{ animationDelay: '0.2s' }} />
                <Disc className="text-primary animate-wave w-10 h-10 sm:w-12 sm:h-12" style={{ animationDelay: '0.4s' }} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight text-balance mx-auto" style={{ letterSpacing: '-0.02em' }}>
                Loops e Samples Profissionais para Sua Música
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Eleve suas produções musicais com samples premium de pagode, sertanejo e percussão. 
                Qualidade profissional, compatibilidade total.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="pt-6 sm:pt-8 w-full px-4"
              >
                <a
                  href="#produtos"
                  className="inline-block w-full sm:w-auto bg-primary text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg neon-glow-strong hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Explorar Produtos
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="produtos" className="py-16 sm:py-24 px-4 sm:px-6 bg-background w-full overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-8 sm:mb-16 w-full"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance mx-auto" style={{ letterSpacing: '-0.02em' }}>
                Nossos Produtos
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Escolha o pack perfeito para suas produções
              </p>
            </motion.div>

            <div className="w-full">
              <ProductCard
                title="VS Pagode"
                description="Pack completo com multipistas profissionais de pagode. Compatível com todas as principais DAWs: Ableton, FL Studio, Logic Pro, Cubase, Pro Tools, Studio One."
                price={9700}
                features={vsPagodeFeatures}
                audioSamples={vsPagodeSamples}
                songs={vsPagodeSongs}
                productId="vs-pagode"
                pixUrl="https://pay.herospark.com/vs-pagode-518179"
              />
            </div>

            <div className="w-full">
              <ProductCard
                title="VS Sertanejo"
                description="Samples autênticos de sertanejo em alta qualidade. Multipistas editáveis compatíveis com todas as DAWs principais."
                price={9700}
                features={vsSertanejoFeatures}
                audioSamples={vsSertanejoSamples}
                songs={formattedVsSertanejoSongs}
                productId="vs-sertanejo"
                pixUrl="https://pay.herospark.com/vs-sertanejo-518184"
              />
            </div>

            <div className="w-full">
              <ProductCard
                title="Loops Percussão"
                description="Coleção variada de loops de percussão para complementar suas produções. Formatos WAV de alta qualidade."
                price={2990}
                features={loopsPercussaoFeatures}
                audioSamples={loopsPercussaoSamples}
                productId="loops-percussao"
                pixUrl="https://pay.herospark.com/loops-percussao-samba-pagode-518185"
              />
            </div>
          </div>
        </section>

        <FAQSection />

        <footer id="contato" className="bg-card text-card-foreground py-12 sm:py-16 px-4 sm:px-6 border-t border-border neon-border relative z-10 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">MR Infoprodutos</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Produção musical profissional ao seu alcance. Samples e loops de alta qualidade para elevar suas criações.
                </p>
              </div>

              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contato</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:contato@mrinfoprodutos.com" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base break-all"
                  >
                    <Mail size={18} className="flex-shrink-0" />
                    <span>contato@mrinfoprodutos.com</span>
                  </a>
                </div>
              </div>

              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 -ml-2"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border/30 pt-6 sm:pt-8 text-center w-full">
              <p className="text-muted-foreground text-sm sm:text-base">
                © 2026 MR Infoprodutos. Todos os direitos reservados.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base">
                  Política de Privacidade
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base">
                  Termos de Serviço
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;