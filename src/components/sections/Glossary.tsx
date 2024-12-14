import React, { useEffect, useState } from 'react';
import '../../styles/Glossary.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationForGraphsAndGlossary from './NavigationForGraphsAndGlossary ';

const Glossary = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isBasicoActive, setIsBasicoActive] = useState(true);

  const handleToggleView = () => {
    setIsBasicoActive(!isBasicoActive);
  };

  return (
  <>
    <NavigationForGraphsAndGlossary />
    <div className='container'>
    <section id="glosario" className="section-glossary">
      <button id="toggleView" className="toggle-button" onClick={handleToggleView}>
        {isBasicoActive ? 'Glosario Avanzado' : 'Glosario Basico'}
      </button>

      <div id="basico" className={`glosario-content ${isBasicoActive ? 'active' : ''}`}>
        <h1 className="section-title">Glosario de Minería de Datos</h1>
        <h2>Conceptos Básicos</h2>
        <dl>
          <dt>Minería de Datos</dt>
          <dd>Proceso de extraer información útil y patrones significativos de grandes conjuntos de datos.
          </dd>

          <dt>Base de Datos</dt>
          <dd>Conjunto organizado de datos almacenados electrónicamente que se utiliza como fuente para la minería de datos.</dd>

          <dt>Dataset (Conjunto de Datos)</dt>
          <dd>Colección estructurada de datos que se utiliza para análisis.</dd>

          <dt>Preprocesamiento de Datos</dt>
          <dd>Etapa inicial en la que los datos son limpiados y transformados para garantizar su calidad y consistencia.</dd>

          <dt>Normalización</dt>
          <dd>Escalado de las variables para que estén en un rango comparable.</dd>

          <dt>Clasificación</dt>
          <dd>Técnica de minería de datos para predecir una categoría a la que pertenece un dato.</dd>

          <dt>Clúster (Agrupamiento)</dt>
          <dd>Proceso de agrupar datos similares basándose en ciertas características comunes.</dd>

          <dt>Regresión</dt>
          <dd>Método que predice valores numéricos continuos a partir de datos existentes.</dd>

          <dt>Patrones</dt>
          <dd>Relaciones recurrentes entre datos que tienen relevancia estadística.</dd>

          <dt>Overfitting (Sobreajuste)</dt>
          <dd>Fenómeno en el que un modelo se adapta demasiado a los datos de entrenamiento, pero no generaliza bien.</dd>

          <dt>Submuestreo (Under Sampling)</dt>
          <dd>Reducción de datos de una clase para equilibrar un conjunto de datos desbalanceado.</dd>

          <dt>Muestreo</dt>
          <dd> Proceso de seleccionar una parte representativa de los datos para análisis.</dd>

          <dt>Validación Cruzada</dt>
          <dd>Método para evaluar la precisión de un modelo dividiendo el conjunto de datos en partes de entrenamiento y prueba.</dd>

          <dt>Frecuencia de Atributo</dt>
          <dd>Número de veces que un atributo o característica aparece en los datos.</dd>

          <dt>Limpieza de Datos</dt>
          <dd>Eliminación de valores atípicos, inconsistencias y datos faltantes.</dd>

          <dt>Algoritmo</dt>
          <dd>Conjunto de reglas o procesos utilizados para realizar cálculos y predicciones en minería de datos.</dd>

          <dt>Atributo (Variable)</dt>
          <dd>Propiedad o característica específica de un dato en un conjunto de datos.</dd>

          <dt>Regla de Asociación</dt>
          <dd>Método para identificar relaciones entre variables en grandes conjuntos de datos.</dd>

          <dt>Visualización de Datos</dt>
          <dd>Representación gráfica de datos para facilitar su interpretación.</dd>

          <dt>Big Data</dt>
          <dd>Grandes volúmenes de datos que requieren tecnologías avanzadas para ser procesados y analizados.</dd>
        </dl>
      </div>

      <div id="avanzado" className={`glosario-content ${!isBasicoActive ? 'active' : ''}`}>
        <h1 className="section-title">Glosario de Minería de Datos</h1>
        <h2>Conceptos Avanzados</h2>
        <dl>
          <dt>Aprendizaje Supervisado</dt>
          <dd>Técnica de minería de datos donde el modelo se entrena con datos etiquetados para predecir valores o categorías.</dd>

          <dt>Aprendizaje No Supervisado</dt>
          <dd>Técnica donde no se utilizan etiquetas en los datos; el objetivo es descubrir patrones ocultos.</dd>

          <dt>Aprendizaje Semi-Supervisado</dt>
          <dd>Combina datos etiquetados y no etiquetados para mejorar el entrenamiento del modelo.</dd>

          <dt>Algoritmo K-Means</dt>
          <dd>Algoritmo de agrupamiento que divide los datos en clústeres basados en proximidad.</dd>

          <dt>Árbol de Decisión</dt>
          <dd>Modelo predictivo basado en una estructura de árbol que divide los datos en subconjuntos basados en reglas.</dd>

          <dt>Bosques Aleatorios (Random Forest)</dt>
          <dd>Algoritmo de ensamblaje que combina múltiples árboles de decisión para mejorar la precisión.</dd>

          <dt>Gradient Boosting</dt>
          <dd>Técnica de aprendizaje que construye modelos predictivos en secuencia para minimizar errores.</dd>

          <dt>Red Neuronal Artificial (RNA)</dt>
          <dd>Modelo inspirado en el cerebro humano, compuesto por capas de neuronas artificiales para el aprendizaje profundo.</dd>

          <dt>Deep Learning (Aprendizaje Profundo)</dt>
          <dd>Subcampo del aprendizaje automático que utiliza redes neuronales profundas para tareas complejas.</dd>

          <dt>SVM (Máquinas de Vectores de Soporte)</dt>
          <dd>Algoritmo utilizado para clasificación y regresión que encuentra un hiperplano óptimo en los datos.</dd>

          <dt>Clúster Jerárquico</dt>
          <dd>Método de agrupamiento que organiza los datos en una estructura jerárquica (árbol dendrograma).</dd>

          <dt>Análisis de Componentes Principales (PCA)</dt>
          <dd>Técnica para reducir la dimensionalidad de los datos conservando la mayor variabilidad posible.</dd>

          <dt>AUC (Área Bajo la Curva)</dt>
          <dd>Métrica que evalúa el rendimiento de un modelo basado en la relación entre sensibilidad y especificidad.</dd>

          <dt>Regularización</dt>
          <dd>Técnica para prevenir el sobreajuste penalizando coeficientes grandes en un modelo.</dd>

          <dt>Matriz de Confusión</dt>
          <dd>Herramienta para evaluar el rendimiento de un modelo de clasificación mostrando verdaderos y falsos positivos y negativos.</dd>

          <dt>Optimización de Hiper Parámetros</dt>
          <dd>Proceso de ajustar los parámetros del modelo para maximizar su rendimiento.</dd>

          <dt>Análisis de Sentimientos</dt>
          <dd>Técnica para extraer emociones o actitudes de datos textuales.</dd>

          <dt>Text Mining (Minería de Textos)</dt>
          <dd>Proceso de extraer patrones útiles de datos no estructurados como textos.</dd>

          <dt>Clustering DBSCAN</dt>
          <dd>Algoritmo de agrupamiento basado en densidad que identifica clústeres de forma arbitraria.</dd>

          <dt>Algoritmos Evolutivos</dt>
          <dd>Métodos de optimización inspirados en la evolución biológica, como los algoritmos genéticos.</dd>
        </dl>
      </div>
    </section>
    </div>
    </>
  );
};

export default Glossary;
