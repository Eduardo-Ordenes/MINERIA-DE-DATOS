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
        {isBasicoActive ? 'Glosario Básico' : 'Glosario Avanzado'}
      </button>

      <div id="basico" className={`glosario-content ${isBasicoActive ? 'active' : ''}`}>
        <h1 className="section-title">Glosario de Minería de Datos</h1>
        <h2>Glosario Básico</h2>
        <dl>
          <dt>Minería de Datos</dt>
          <dd>Proceso de descubrir patrones en grandes conjuntos de datos.</dd>

          <dt>Big Data</dt>
          <dd>Conjuntos de datos muy grandes o complejos que son difíciles de manejar con herramientas tradicionales.</dd>

          <dt>ETL</dt>
          <dd>Proceso para preparar datos: extraerlos, limpiarlos y transformarlos antes de analizarlos.</dd>

          <dt>Clustering</dt>
          <dd>Agrupación de datos similares en conjuntos o un Método para agrupar datos similares entre sí</dd>

          <dt>Clasificación</dt>
          <dd>Técnica para categorizar datos en grupos predefinidos.</dd>

          <dt>Regresión</dt>
          <dd>Técnica para predecir valores continuos a partir de datos históricos.</dd>

          <dt>Limpieza de datos</dt>
          <dd>Proceso de eliminar o corregir datos incorrectos o incompletos.</dd>

          <dt>Frecuencia de ítems</dt>
          <dd>Técnica para encontrar asociaciones entre productos o eventos.</dd>

          <dt>Algoritmos supervisados</dt>
          <dd>Algoritmos que usan datos etiquetados para entrenar modelos predictivos.</dd>

          <dt>Algoritmos no supervisados</dt>
          <dd>Modelos que analizan datos sin etiquetas para encontrar patrones.</dd>

          <dt>Reducción de dimensionalidad</dt>
          <dd>Métodos como PCA o LDA preservan la varianza más importante de los datos mientras eliminan redundancia.</dd>

          <dt>Overfitting</dt>
          <dd>Cuando un modelo aprende demasiado de los datos de entrenamiento y no generaliza bien.</dd>

          <dt>Underfitting</dt>
          <dd>Cuando un modelo no capta los patrones subyacentes de los datos.</dd>

          <dt>Aprendizaje automático</dt>
          <dd>Uso de algoritmos que aprenden patrones automáticamente de los datos.</dd>

          <dt>Validación cruzada</dt>
          <dd>Técnica para evaluar un modelo dividiendo los datos en conjuntos de entrenamiento y prueba.</dd>

          <dt>Métricas de evaluación</dt>
          <dd>Valores que indican el rendimiento de un modelo</dd>

          <dt>Outliers</dt>
          <dd>Datos que son muy diferentes al resto.</dd>

          <dt>Data Warehouse</dt>
          <dd>Repositorio centralizado para almacenar datos estructurados.</dd>

          <dt>Deep Learning</dt>
          <dd>Subcampo del machine learning basado en redes neuronales profundas.</dd>

          <dt>Text Mining</dt>
          <dd>Análisis de texto para extraer información útil.</dd>
        </dl>
      </div>

      <div id="avanzado" className={`glosario-content ${!isBasicoActive ? 'active' : ''}`}>
        <h1 className="section-title">Glosario de Minería de Datos Avanzado</h1>
        <h2>Glosario Avanzado</h2>
        <dl>
          <dt>Minería de Datos</dt>
          <dd>Es un subconjunto de la ciencia de datos que utiliza técnicas estadísticas, matemáticas y de aprendizaje automático para extraer conocimiento implícito, previamente desconocido y potencialmente útil</dd>

          <dt>Big Data</dt>
          <dd>Se caracteriza por las 4Vs: Volumen, Velocidad, Variedad y Veracidad. En minería de datos, las técnicas deben ser escalables y eficientes para procesar estas dimensiones.</dd>

          <dt>ETL</dt>
          <dd>Implica aplicar reglas de negocio, consolidar datos de múltiples fuentes y almacenarlos en un almacén de datos optimizado para minería.</dd>

          <dt>Clustering</dt>
          <dd>Utiliza algoritmos como K-means, DBSCAN o métodos jerárquicos. Evalúa la calidad del agrupamiento usando métricas como la silueta o el índice de Dunn.</dd>

          <dt>Clasificación</dt>
          <dd>Usa algoritmos supervisados como árboles de decisión, SVM o redes neuronales para maximizar métricas como precisión, recall y F1-score.</dd>

          <dt>Regresión</dt>
          <dd>Incluye técnicas lineales y no lineales, como la regresión polinómica y regularizada (Lasso, Ridge). Evalúa el modelo con métricas como RMSE o R².</dd>

          <dt>Limpieza de datos</dt>
          <dd>Incluye detección de valores atípicos, imputación de datos faltantes y normalización usando métodos estadísticos avanzados.</dd>

          <dt>Frecuencia de ítems</dt>
          <dd>Utiliza medidas como soporte, confianza y lift para evaluar reglas de asociación en grandes bases transaccionales.</dd>

          <dt>Algoritmos supervisados</dt>
          <dd>Incluyen técnicas como Boosting (ej. XGBoost) y Bagging (ej. Random Forest) para mejorar la precisión.</dd>

          <dt>Algoritmos no supervisados</dt>
          <dd>Aplican PCA, T-SNE o UMAP para reducción de dimensionalidad y clustering jerárquico.</dd>

          <dt>Reducción de dimensionalidad</dt>
          <dd>Métodos como PCA o LDA preservan la varianza más importante de los datos mientras eliminan redundancia.</dd>

          <dt>Overfitting</dt>
          <dd>Ocurre cuando un modelo aprende demasiado de los datos de entrenamiento. Se combate con regularización, validación cruzada y dropout.</dd>

          <dt>Underfitting</dt>
          <dd>Indica un modelo demasiado simple. Solución: aumentar la complejidad o ajustar parámetros.</dd>

          <dt>Aprendizaje automático</dt>
          <dd>Incluye enfoques supervisados, no supervisados y semi-supervisados para tareas como predicción, clasificación y clustering.</dd>

          <dt>Validación cruzada</dt>
          <dd>Métodos como K-Fold o Leave-One-Out estiman la capacidad de generalización de un modelo.</dd>

          <dt>Métricas de evaluación</dt>
          <dd>Métricas avanzadas como ROC-AUC, F1-score para clasificación, y RMSE o MAE para regresión.</dd>

          <dt>Outliers</dt>
          <dd>Técnica para predecir valores continuos a partir de datos históricos.</dd>

          <dt>Data Warehouse</dt>
          <dd>Optimizado para consultas rápidas con soporte para esquemas como estrella o copo de nieve.</dd>

          <dt>Deep Learning</dt>
          <dd>Aplicado en tareas avanzadas como procesamiento de imágenes y texto, usando arquitecturas como CNN, RNN o Transformers.</dd>

          <dt>Text Mining</dt>
          <dd>Técnicas como modelado de temas (LDA), extracción de entidades y embeddings de palabras (Word2Vec, BERT).</dd>
        </dl>
      </div>
    </section>
    </div>
    </>
  );
};

export default Glossary;
