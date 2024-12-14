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

      <div className="content-block reverse" data-aos="fade-left">
        <div className="text-content">
          <p>En el mercado existen diversas herramientas que nos facilitan el proceso de minería de datos, cada una con sus propias características y fortalezas. Estas herramientas ofrecen diferentes enfoques y funcionalidades para ayudarnos a llevar a cabo nuestros proyectos de análisis de datos.
            Algunas de las características clave que compararemos son:<br></br>
            <strong>Lenguajes Soportados:</strong> Qué lenguajes de programación podemos utilizar para realizar nuestros análisis, como Python, R, Java, etc.<br></br>
            <strong>Integración con Bases de Datos:</strong> Qué tan bien se integra la herramienta con diferentes fuentes de datos, tanto SQL como NoSQL.<br></br>
            <strong>Licencia:</strong> Si la herramienta es gratuita, de código abierto o requiere una licencia de pago.<br></br>
            <strong>Curva de Aprendizaje:</strong> Qué tan fácil o difícil es aprender a utilizar la herramienta, si es adecuada para usuarios principiantes o requiere más experiencia.<br></br>
            Al comparar estas características, podremos identificar cuál de estas herramientas se ajusta mejor a nuestras necesidades y nivel de experiencia en minería de datos.
          </p>
        </div>
        <div className="image-content">
          <img src="https://aodatacloud.es/wp-content/uploads/2024/02/data-mining-1.png" alt="Análisis avanzado" />
        </div>
      </div>



      <div className="content-block" data-aos="fade-right">
        <div className="text-content" >
          <p><strong>Orange:</strong> Herramienta visual de minería de datos que permite crear flujos de trabajo mediante programación visual. Ideal para principiantes y expertos.<br></br>
            Lenguajes Soportados: Python, R.<br></br>
            Integración con Bases de Datos: Buena integración con bases de datos SQL y NoSQL.<br></br>
            Licencia: Gratuita y de código abierto.<br></br>
            Curva de Aprendizaje: Moderada, adecuada para usuarios intermedios y avanzados.
          </p>
          <a href="https://orangedatamining.com/" className='style-link' target="_blank">Sitio Web</a>
          <p><strong>KNIME:</strong> Plataforma de análisis de datos que facilita la creación de flujos de trabajo complejos sin necesidad de programación.
            <br></br>
            Lenguajes Soportados: Python, R, Java, MATLAB, etc.<br></br>
            Integración con Bases de Datos: Excelente integración con bases de datos SQL y NoSQL.<br></br>
            Licencia: Gratuita y de código abierto (Community Edition), versiones de pago disponibles.<br></br>
            Curva de Aprendizaje: Moderada, adecuada para usuarios intermedios y avanzados.
          </p>
          <a href="https://www.knime.com/" className='style-link' target="_blank">Sitio Web</a>
        </div>
        <div className="image-content">
          <img src="https://orangedatamining.com/_next/static/media/orange_illustration_landing.58a920f0.png" alt="Herramientas de análisis" />
        </div>
      </div>

      <div className="content-block reverse" data-aos="fade-left">
        <div className="text-content">
          <p><strong>RapidMiner:</strong> Plataforma integral que cubre todo el ciclo de vida del análisis de datos, desde la preparación hasta el despliegue de modelos.
            <br></br>
            Lenguajes Soportados: Python, R, Java, etc.<br></br>
            Integración con Bases de Datos: Buena integración con bases de datos SQL y NoSQL.<br></br>
            Licencia: Versión gratuita (Community Edition), versiones de pago disponibles.<br></br>
            Curva de Aprendizaje: Moderada a alta, requiere más experiencia.
          </p>
          <a href="https://docs.rapidminer.com/" className='style-link' target="_blank">Sitio Web</a>
          <p><strong>Weka:</strong> Colección de algoritmos de aprendizaje automático para tareas de minería de datos, desarrollada por la Universidad de Waikato.
            <br></br>
            Lenguajes Soportados: Java<br></br>
            Integración con Bases de Datos: Integración básica con bases de datos.<br></br>
            Licencia: Gratuita y de código abierto.<br></br>
            Curva de Aprendizaje: Moderada, adecuada para usuarios intermedios y avanzados.
          </p>
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