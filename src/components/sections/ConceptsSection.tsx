import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConceptsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="conceptos" className="section">
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
          <h3 className='title-etapas'>Definición del problema</h3>
          <div className="container-texto-etapas">
            <p>Descripción: Se identifica el objetivo del análisis y las preguntas clave que se desean responder.
              Ejemplo: En una tienda en línea, el objetivo podría ser predecir qué productos comprarán los clientes.

            </p>
          </div>
        </div>
        <div className="arrow" data-aos="fade-right">&#8594;</div>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Recopilación y selección de datos</h3>
          <div className="container-texto-etapas">
            <p>Descripción: Se obtienen los datos necesarios de diversas fuentes, como bases de datos, API, o datos abiertos.
              Ejemplo: Descargar registros de ventas de los últimos cinco años.
            </p>
          </div>
        </div>
        <div className="arrow" data-aos="fade-right">&#8594;</div>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Preprocesamiento y limpieza de datos</h3>
          <div className="container-texto-etapas">
            <p>Descripción: Los datos son revisados para detectar y corregir valores faltantes, inconsistencias o ruido.
              Ejemplo: Reemplazar valores faltantes con la media o eliminar duplicados.
            </p>
          </div>
        </div>
      </div>

      <div className='margin-etapas'></div>
      <div className="arrow visibility-hidden" data-aos="fade-right">&#8594;</div>


      <div className='container-main-etapas'>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Transformación</h3>
          <div className="container-texto-etapas">
            <p>Descripción: Los datos son transformados en un formato que los algoritmos puedan entender. También se eliminan variables irrelevantes o redundantes.
              Ejemplo: Normalizar valores entre 0 y 1 para reducir dimensiones.
            </p>
          </div>
        </div>
        <div className="arrow" data-aos="fade-right">&#8594;</div>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Selección del modelo</h3>
          <div className="container-texto-etapas">
            <p>Descripción: Se elige un método adecuado según el objetivo, como clasificación, regresión, agrupamiento o reglas de asociación.
              Ejemplo: Usar árboles de decisión para clasificación o K-means para agrupamiento.
            </p>
          </div>
        </div>
        <div className="arrow" data-aos="fade-right">&#8594;</div>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Entrenamiento y validación</h3>
          <div className="container-texto-etapas">
            <p>Descripción: Se divide el conjunto de datos en partes de entrenamiento y prueba. El modelo aprende patrones del conjunto de entrenamiento.
              Ejemplo: Entrenar un modelo de regresión logística para predecir la probabilidad de compra de un cliente.
            </p>
          </div>
        </div>
      </div>


      <div className='margin-etapas'></div>
      <div className="arrow visibility-hidden" data-aos="fade-right">&#8594;</div>


      <div className='container-main-etapas'>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Evaluación del modelo</h3>
          <div className="container-texto-etapas">
            <p>Descripción: Se evalúa el desempeño del modelo usando métricas como precisión, recall, F1-score o RMSE (error cuadrático medio).
              Ejemplo: Verificar si un modelo de clasificación predice correctamente el 90% de los casos.
            </p>
          </div>
        </div>
        <div className="arrow" data-aos="fade-right">&#8594;</div>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Implementación y despliegue</h3>
          <div className="container-texto-etapas">
            <p>Descripción: El modelo es implementado en un entorno de producción para realizar predicciones en tiempo real o generar informes.
              Ejemplo: Un modelo que recomienda productos en una tienda en línea.
            </p>
          </div>
        </div>
        <div className="arrow" data-aos="fade-right">&#8594;</div>
        <div className="container-etapas" data-aos="zoom-in">
          <h3 className='title-etapas'>Monitoreo y mantenimiento</h3>
          <div className="container-texto-etapas">
            <p>Descripción: Se supervisa el desempeño del modelo para garantizar que siga siendo útil con el tiempo.
              Ejemplo: Ajustar el modelo si los patrones de compra cambian drásticamente.
            </p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default ConceptsSection;
