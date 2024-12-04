import React from 'react';

const ConceptsSection = () => {
  return (
    <section id="conceptos" className="section">
      <h2 className="section-title">Minería de Datos</h2>
      
      <div className="content-block">
        <div className="text-content">
          <h3>¿Qué es la Minería de Datos?</h3>
          <p>La minería de datos es una disciplina que combina estadística, aprendizaje automático y bases de datos para descubrir patrones y relaciones ocultas en grandes conjuntos de datos. Este proceso permite transformar datos en conocimiento accionable para la toma de decisiones empresariales.</p>
          <p>A través de técnicas avanzadas de análisis, la minería de datos puede predecir tendencias futuras, identificar segmentos de clientes, detectar fraudes y optimizar procesos empresariales.</p>
        </div>
        <div className="image-content">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800" alt="Visualización de datos" />
        </div>
      </div>

      <div className="content-block reverse">
        <div className="text-content">
          <h3>Proceso de Minería de Datos</h3>
          <p>El proceso de minería de datos sigue varias etapas fundamentales:</p>
          <ul>
            <li><strong>Recopilación de datos:</strong> Obtención de datos de diversas fuentes</li>
            <li><strong>Preprocesamiento:</strong> Limpieza y transformación de datos</li>
            <li><strong>Análisis:</strong> Aplicación de algoritmos y técnicas estadísticas</li>
            <li><strong>Interpretación:</strong> Evaluación y validación de resultados</li>
          </ul>
        </div>
        <div className="image-content">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800" alt="Proceso de análisis" />
        </div>
      </div>
    </section>
  );
};

export default ConceptsSection;