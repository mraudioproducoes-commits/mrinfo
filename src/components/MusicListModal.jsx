import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, ChevronRight, Search } from 'lucide-react';

const ArtistSection = ({ artist, artistSongs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 rounded-xl border border-primary/40 bg-card/60 overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(0,217,255,0.15)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-primary/10 focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2 uppercase tracking-wide">
          {artist}
          <span className="text-sm font-normal text-muted-foreground ml-2">
            ({artistSongs.length})
          </span>
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronRight className="text-primary h-6 w-6" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 border-t border-primary/20 bg-background/50">
              <ul className="space-y-2 mt-4">
                {artistSongs.map((song, idx) => (
                  <motion.li 
                    key={song.id || idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: Math.min(idx * 0.02, 0.5) }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-primary/10 group cursor-default"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary/60 shadow-[0_0_5px_currentColor] group-hover:bg-primary transition-colors" />
                    <span className="text-base">{song.title}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MusicListModal = ({ isOpen, onClose, songs, title }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Robust scroll lock to prevent layout shift and double scrollbars
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--removed-body-scroll-bar-size', `${scrollbarWidth}px`);
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      document.documentElement.style.removeProperty('--removed-body-scroll-bar-size');
      // Reset search when closed
      const timer = setTimeout(() => setSearchTerm(''), 300);
      return () => clearTimeout(timer);
    }
    
    return () => {
      document.body.classList.remove('modal-open');
      document.documentElement.style.removeProperty('--removed-body-scroll-bar-size');
    };
  }, [isOpen]);

  // Filter and group songs
  const groupedSongs = useMemo(() => {
    if (!songs) return {};
    
    const filtered = songs.filter(song => {
      const searchLower = searchTerm.toLowerCase();
      const titleMatch = song.title?.toLowerCase().includes(searchLower);
      const artistMatch = song.artist?.toLowerCase().includes(searchLower);
      return titleMatch || artistMatch;
    });

    return filtered.reduce((acc, song) => {
      const artist = song.artist || 'OUTROS';
      if (!acc[artist]) acc[artist] = [];
      acc[artist].push(song);
      return acc;
    }, {});
  }, [songs, searchTerm]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
            aria-hidden="true"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-card neon-border shadow-2xl pointer-events-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Fixed Header */}
            <div className="flex-shrink-0 flex flex-col gap-4 border-b border-primary/30 p-6 bg-background/95 backdrop-blur z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-foreground flex items-center gap-3">
                  <Music className="text-primary" size={28} />
                  {title || 'Lista de Músicas'}
                </h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Fechar modal"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Buscar por música ou artista..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-primary/30 bg-background/50 py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>
            
            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-background">
              {Object.keys(groupedSongs).length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(groupedSongs).map(([artist, artistSongs]) => (
                    <ArtistSection 
                      key={artist} 
                      artist={artist} 
                      artistSongs={artistSongs} 
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 space-y-4 text-muted-foreground">
                  <Music size={48} className="text-primary/40" />
                  <p className="text-lg">Nenhuma música encontrada para "{searchTerm}".</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MusicListModal;