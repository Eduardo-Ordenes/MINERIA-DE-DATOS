import React from 'react';
import VideoCard from '../ui/VideoCard';

const DemoSection = () => {
  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/R-bf5IFE79s',
      title: 'Introducción a la Minería de Datos',
      description: 'Conceptos fundamentales y aplicaciones prácticas en el mundo real.'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/Cx2tGUze60s',
      title: 'Técnicas de Clasificación',
      description: 'Ejemplos prácticos de clasificación en minería de datos.'
    }
  ];

  return (
    <section id="demostraciones" className="section">
      <h2 className="section-title">Demostraciones Prácticas</h2>
      
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </section>
  );
};

export default DemoSection;