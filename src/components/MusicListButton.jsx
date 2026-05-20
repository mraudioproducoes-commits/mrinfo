import React from 'react';
import { Button } from '@/components/ui/button';
import { ListMusic } from 'lucide-react';

const MusicListButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="w-full border-primary text-primary bg-background/50 hover:bg-primary hover:text-primary-foreground neon-border hover:neon-glow transition-all duration-300 py-6 text-lg font-semibold group"
      aria-haspopup="dialog"
    >
      <ListMusic className="mr-2 h-5 w-5 group-hover:animate-pulse" />
      Veja a lista de músicas completas
    </Button>
  );
};

export default MusicListButton;