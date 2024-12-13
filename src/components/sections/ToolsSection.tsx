import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToolsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <section id="herramientas" className="section">
      <h2 className="section-title">Herramientas de Minería de Datos</h2>
      
      <div className="content-block" data-aos="fade-right">
        <div className="text-content" >
          <p><strong>Orange:</strong> Herramienta visual de minería de datos que permite crear flujos de trabajo mediante programación visual. Ideal para principiantes y expertos.</p>
          <a href="https://orangedatamining.com/" className='style-link' target="_blank">Sitio Web</a>
          <p><strong>KNIME:</strong> Plataforma de análisis de datos que facilita la creación de flujos de trabajo complejos sin necesidad de programación.</p>
          <a href="https://www.knime.com/" className='style-link' target="_blank">Sitio Web</a>
        </div>
        <div className="image-content">
          <img src="https://orangedatamining.com/_next/static/media/orange_illustration_landing.58a920f0.png" alt="Herramientas de análisis" />
        </div>
      </div>

      <div className="content-block reverse" data-aos="fade-left">
        <div className="text-content">
          <p><strong>RapidMiner:</strong> Plataforma integral que cubre todo el ciclo de vida del análisis de datos, desde la preparación hasta el despliegue de modelos.</p>
          <a href="https://docs.rapidminer.com/" className='style-link' target="_blank">Sitio Web</a>
          <p><strong>Weka:</strong> Colección de algoritmos de aprendizaje automático para tareas de minería de datos, desarrollada por la Universidad de Waikato.</p>
          <a href="https://ml.cms.waikato.ac.nz/weka" className='style-link' target="_blank">Sitio Web</a>
        </div>
        <div className="image-content">
          <img src="https://a0.anyrgb.com/pngimg/1640/1396/learning-analytics-data-analytics-business-analytics-predictive-analytics-google-analytics-data-analysis-big-data-web-analytics-report-analysis.png" alt="Análisis avanzado" />
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;