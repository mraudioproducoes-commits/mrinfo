import React from 'react';

const AudioPlayer = ({ videoId, title }) => {
  return (
    <div className="w-full">
      <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden neon-border">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default AudioPlayer;