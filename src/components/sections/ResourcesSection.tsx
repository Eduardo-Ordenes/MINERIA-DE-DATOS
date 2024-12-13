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
            <li><a href="https://www.kaggle.com/datasets" className='style-link' target="_blank" rel="noopener noreferrer">UCI Machine Learning Repository</a></li>
            <a>Una de las fuentes más populares para conjuntos de datos relacionados con aprendizaje automático y minería de datos.</a>
            <li><a href="https://data.europa.eu" className='style-link' target="_blank" rel="noopener noreferrer">Datos abiertos de la Unión Europea</a></li>
            <a>Proporciona acceso a millones de conjuntos de datos relacionados con economía, medio ambiente, salud y otros temas de interés europeo. </a>
            <li><a href="https://www.inegi.org.mx/datosabiertos/" className='style-link' target="_blank" rel="noopener noreferrer">INEGI (México)</a></li>
            <a>Información estadística y geográfica con formatos abiertos, útil para análisis demográficos, económicos y sociales en México.</a>
            <li><a href="https://registry.opendata.aws/" className='style-link' target="_blank" rel="noopener noreferrer">AWS Open Data Registry</a></li>
            <a>Un registro de conjuntos de datos abiertos alojados en AWS, que incluye temas como genómica, clima y datos sociales</a>
            <li><a href="https://data.worldbank.org" className='style-link' target="_blank" rel="noopener noreferrer">World Bank Data</a></li>
            <a>Base de datos mundial que proporciona información económica y social organizada por país.</a>
            <li><a href="https://www.data.gov" className='style-link' target="_blank" rel="noopener noreferrer">Data.gov (EE.UU.)</a></li>
            <a>Una plataforma gubernamental que ofrece datos sobre economía, educación, salud, medio ambiente y más.</a>
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