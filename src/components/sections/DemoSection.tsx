import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoCard from '../ui/VideoCard';

const DemoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/kRS_WJaMbvM?si=k9-ot_KGukPHPqbt" title="YouTube video player',
      title: 'Introducción a la Minería de Datos',
      description: 'Explicacion breve sobre La Importancia de la Mineria de datos.'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/7wklFBVveiY?si=Aymj3CGdgnjhLuCb',
      title: 'Análisis de clasificación',
      description: 'Explicacion breve con ejemplo.'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/sm8Ueanz6Cw?si=HBaMYAdOxc-bgg1K',
      title: 'Análisis de agrupamiento o clustering',
      description: 'Explicacion breve con ejemplo.'
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/AuyMxGOpK4M?si=ENX_J9OeYeb93gH6',
      title: 'Análisis de Regresión',
      description: 'Explicacion breve con ejemplo.'
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/zVae3cRkZQY?si=GgkMJZT7dXeFA5a5',
      title: 'Reglas de asociación',
      description: 'Explicacion breve con ejemplo.'
    }

    
  ];

  return (
    <section id="demostraciones" className="section">
      <h2 className="section-title">Repaso Express en Youtube</h2>
      
      <div className="video-grid" data-aos="fade-up-left">
        {videos.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </section>
  );
};

export default DemoSection;