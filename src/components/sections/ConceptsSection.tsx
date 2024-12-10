import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConceptsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="section">
      <h2 className="section-title" data-aos="fade-up">Minería de Datos</h2>

      <div className="content-block" data-aos="fade-right">
        <div className="text-content">
          <h3>¿Qué es la Minería de Datos?</h3>
          <p>
            La minería de datos es una disciplina que combina estadística, aprendizaje automático y bases de datos para descubrir patrones y relaciones ocultas en grandes conjuntos de datos. Este proceso permite transformar datos en conocimiento accionable para la toma de decisiones empresariales.
          </p>
          <p>
            A través de técnicas avanzadas de análisis, la minería de datos puede predecir tendencias futuras, identificar segmentos de clientes, detectar fraudes y optimizar procesos empresariales.
          </p>
        </div>
        <div className="image-content">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800" alt="Visualización de datos" />
        </div>
      </div>

      <h2 className="section-title" data-aos="fade-up">Etapas / Procesos</h2>
      <div className='container-main-etapas'>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Etapa 1</h3>
          <div className="container-texto-etapas">
            <p>(Información de la etapa)</p>
          </div>
        </div>
        <div className="arrow" data-aos="fade-right">&#8594;</div>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Etapa 2</h3>
          <div className="container-texto-etapas">
            <p>(Información de la etapa)</p>
          </div>
        </div>
        <div className="arrow" data-aos="fade-right">&#8594;</div>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Etapa 3</h3>
          <div className="container-texto-etapas">
            <p>(Información de la etapa)</p>
          </div>
        </div>
      </div>

      <div className='margin-etapas'></div>
      <div className="arrow visibility-hidden" data-aos="fade-right">&#8594;</div>
      

      <div className='container-main-etapas'>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Etapa 4</h3>
          <div className="container-texto-etapas">
            <p>(Información de la etapa)</p>
          </div>
        </div>
        <div className="arrow" data-aos="fade-right">&#8594;</div>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Etapa 5</h3>
          <div className="container-texto-etapas">
            <p>(Información de la etapa)</p>
          </div>
        </div>
        <div className="arrow arrow-invisible" style={{ visibility: 'hidden' }}>&#8594;</div>
        <div className="container-etapas container-invisible" style={{ visibility: 'hidden' }}>
          <h3>Proceso de Minería de Datos</h3>
        </div>
      </div>
    </section>
  );
};

export default ConceptsSection;
