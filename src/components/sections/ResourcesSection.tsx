import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResourcesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="recursos" className="section">
      <h2 className="section-title">Recursos y Aplicaciones</h2>
      
      <div className="content-block" data-aos="fade-up-right">
        <div className="text-content">
          <h3>Bases de Datos Públicas</h3>
          <ul>
            <li><a href="https://www.kaggle.com/datasets" className='style-link' target="_blank" rel="noopener noreferrer">Kaggle Datasets</a></li>
            <li><a href="https://archive.ics.uci.edu/ml/index.php" className='style-link' target="_blank" rel="noopener noreferrer">UCI Machine Learning Repository</a></li>
          </ul>
        </div>
        <div className="image-content">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800" alt="Recursos de datos" />
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;