import React, { useEffect, useState } from 'react';
import '../../styles/EstilosDataMining.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter, Sector } from 'recharts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationForGraphsAndGlossary from './NavigationForGraphsAndGlossary ';
import Logistica_Imagen from '../../assets/Análisis de clasificación.png';
import Clustering_Imagen from '../../assets/Análisis de agrupamiento (Clustering).png';
import AssociationRules_Imagen from '../../assets/Reglas de asociación.png';
import ProfitabilityAnalysis_Imagen from '../../assets/Identificación de clientes rentables.png';



const DataMiningCharts: React.FC = () => {
  // const initialAlgorithmData = [
  //   { name: 'Decision Trees', accuracy: 85, speed: 90 },
  //   { name: 'Random Forest', accuracy: 92, speed: 75 },
  //   { name: 'SVM', accuracy: 88, speed: 60 },
  //   { name: 'K-Means', accuracy: 78, speed: 95 },
  //   { name: 'Neural Networks', accuracy: 94, speed: 50 },
  // ];

  const initialAlgorithmData = [
    { rango: "2000 - 2200", frecuencia: 22 },
    { rango: "2200 - 2400", frecuencia: 19 },
    { rango: "2400 - 2600", frecuencia: 15 },
    { rango: "2600 - 2800", frecuencia: 21 },
    { rango: "2800 - 3000", frecuencia: 21 },
    { rango: "3000 - 3200", frecuencia: 22 },
    { rango: "3200 - 3400", frecuencia: 27 },
    { rango: "3400 - 3600", frecuencia: 28 },
    { rango: "3600 - 3800", frecuencia: 23 },
    { rango: "3800 - 4000", frecuencia: 21 },
    { rango: "4000 - 4200", frecuencia: 13 },
    { rango: "4200 - 4400", frecuencia: 21 },
    { rango: "4400 - 4600", frecuencia: 27 },
    { rango: "4600 - 4800", frecuencia: 35 },
    { rango: "4800 - 5000", frecuencia: 16 },
    { rango: "5000 - 5200", frecuencia: 20 },
    { rango: "5200 - 5400", frecuencia: 16 },
    { rango: "5400 - 5600", frecuencia: 12 },
    { rango: "5600 - 5800", frecuencia: 23 },
    { rango: "5800 - 6000", frecuencia: 19 },
  ];

  const initialDataGrowthData = [
    { year: 2010, dataVolume: 1 },
    { year: 2012, dataVolume: 2.5 },
    { year: 2014, dataVolume: 4.4 },
    { year: 2016, dataVolume: 8.5 },
    { year: 2018, dataVolume: 18 },
    { year: 2020, dataVolume: 44 },
    { year: 2022, dataVolume: 97 },
  ];

  const ClusterData1 = [
    { x: 1, y: 12, cluster: 'B' },
    { x: 2, y: 3, cluster: 'B' },
    { x: 2, y: 10, cluster: 'B' },
    { x: 2, y: 14, cluster: 'B' },
    { x: 2, y: 10, cluster: 'A' },
    { x: 2, y: 15, cluster: 'B' },
    { x: 2, y: 25, cluster: 'A' },
    { x: 3, y: 8, cluster: 'B' },
    { x: 3, y: 10, cluster: 'A' },
    { x: 3, y: 20, cluster: 'B' },
    { x: 4, y: 1, cluster: 'A' },
    { x: 4, y: 5, cluster: 'A' },
    { x: 5, y: 2, cluster: 'A' },
    { x: 5, y: 9, cluster: 'B' },
    { x: 5, y: 10, cluster: 'A' },
    { x: 5, y: 1, cluster: 'A' },
    { x: 6, y: 8, cluster: 'B' },
    { x: 7, y: 11, cluster: 'A' },
    { x: 7, y: 9, cluster: 'A' },
    { x: 7, y: 12, cluster: 'A' }
  ];



  const ClusterData2 = [
    { y: 1, x: 2554, cluster: 'B' },
    { y: 5, x: 2604, cluster: 'B' },
    { y: 5, x: 2616, cluster: 'B' },
    { y: 5, x: 2728, cluster: 'B' },
    { y: 4, x: 2731, cluster: 'B' },
    { y: 6, x: 2750, cluster: 'B' },
    { y: 6, x: 2811, cluster: 'B' },
    { y: 7, x: 2841, cluster: 'B' },
    { y: 4, x: 2877, cluster: 'B' },
    { y: 2, x: 2965, cluster: 'B' },
    { y: 6, x: 3089, cluster: 'A' },
    { y: 4, x: 3113, cluster: 'A' },
    { y: 6, x: 3155, cluster: 'A' },
    { y: 1, x: 3242, cluster: 'C' },
    { y: 5, x: 3296, cluster: 'A' },
    { y: 4, x: 3347, cluster: 'A' },
    { y: 3, x: 3349, cluster: 'A' },
    { y: 6, x: 3372, cluster: 'A' },
    { y: 6, x: 3476, cluster: 'A' },
    { y: 6, x: 3561, cluster: 'A' },
    { y: 4, x: 3572, cluster: 'A' },
    { y: 7, x: 3700, cluster: 'A' },
    { y: 1, x: 3721, cluster: 'C' },
    { y: 6, x: 3786, cluster: 'A' },
    { y: 4, x: 3788, cluster: 'A' },
    { y: 5, x: 3879, cluster: 'A' },
    { y: 2, x: 3949, cluster: 'A' },
    { y: 2, x: 4053, cluster: 'A' },
    { y: 7, x: 4145, cluster: 'A' },
    { y: 2, x: 4153, cluster: 'A' },
    { y: 4, x: 4174, cluster: 'A' },
    { y: 3, x: 4273, cluster: 'A' },
    { y: 7, x: 4291, cluster: 'A' },
    { y: 7, x: 4301, cluster: 'A' },
    { y: 6, x: 4315, cluster: 'A' },
    { y: 1, x: 4329, cluster: 'C' },
    { y: 4, x: 4362, cluster: 'A' },
    { y: 1, x: 4462, cluster: 'C' },
    { y: 2, x: 4494, cluster: 'A' },
    { y: 4, x: 4520, cluster: 'A' },
    { y: 1, x: 4559, cluster: 'C' },
    { y: 6, x: 4573, cluster: 'A' },
    { y: 3, x: 4581, cluster: 'A' },
    { y: 1, x: 4582, cluster: 'C' },
    { y: 6, x: 4591, cluster: 'A' },
    { y: 3, x: 4603, cluster: 'A' },
    { y: 1, x: 4620, cluster: 'C' },
    { y: 4, x: 4641, cluster: 'A' },
    { y: 5, x: 4659, cluster: 'A' },
    { y: 6, x: 4663, cluster: 'A' },
    { y: 3, x: 4677, cluster: 'A' },
    { y: 5, x: 4690, cluster: 'A' },
    { y: 5, x: 4708, cluster: 'A' },
    { y: 1, x: 4735, cluster: 'C' },
    { y: 6, x: 4754, cluster: 'A' },
    { y: 7, x: 4795, cluster: 'A' }

  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);
  const [algorithmData, setAlgorithmData] = useState(initialAlgorithmData);
  const [dataGrowthData, setDataGrowthData] = useState(initialDataGrowthData);
  const [clusterData, setClusterData] = useState(ClusterData1);

  const [newAlgorithm, setNewAlgorithm] = useState({ name: '', accuracy: 0, speed: 0 });
  const [newDataGrowth, setNewDataGrowth] = useState({ year: 0, dataVolume: 0 });
  const [newClusterPoint, setNewClusterPoint] = useState({ x: 0, y: 0, cluster: '' });

  // Sample data for data types distribution (unchanged)
  const dataTypesData = [
    { name: 'Iris-setosa', value: 50 },
    { name: 'Iris-versicolor', value: 50 },
    { name: 'Iris-virginica', value: 50 },
  ];

  const dataTypes = [
    { name: 'Iris-setosa', value: 50 },
    { name: 'Iris-versicolor', value: 48 },
    { name: 'Iris-virginica', value: 52 },
  ];


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Value ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  // const handleAddAlgorithm = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setAlgorithmData([...algorithmData, newAlgorithm]);
  //   setNewAlgorithm({ name: '', accuracy: 0, speed: 0 });
  // };

  const handleAddDataGrowth = (e: React.FormEvent) => {
    e.preventDefault();
    setDataGrowthData([...dataGrowthData, newDataGrowth]);
    setNewDataGrowth({ year: 0, dataVolume: 0 });
  };

  const handleAddClusterPoint = (e: React.FormEvent) => {
    e.preventDefault();
    setClusterData([...clusterData, newClusterPoint]);
    setNewClusterPoint({ x: 0, y: 0, cluster: '' });
  };

  const handleResetAlgorithmData = () => {
    setAlgorithmData(initialAlgorithmData);
  };

  const handleResetDataGrowthData = () => {
    setDataGrowthData(initialDataGrowthData);
  };

  const handleResetClusterData = () => {
    setClusterData(ClusterData1);
  };



  // const handleDeleteAlgorithm = (name: string) => {
  //   setAlgorithmData(algorithmData.filter(algo => algo.name !== name));
  // };

  const handleDeleteDataGrowth = (year: number) => {
    setDataGrowthData(dataGrowthData.filter(data => data.year !== year));
  };

  const handleDeleteClusterPoint = (x: number, y: number) => {
    setClusterData(ClusterData1.filter(point => point.x !== x || point.y !== y));
  };



  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavigationForGraphsAndGlossary />
      <div id='graficos' className="data-mining-charts">
        <h2 className="section-title">Graficos Demostrativos</h2>
        <div className="chart-container" data-aos="fade-up">
          <h2>Análisis de clasificación simple</h2>
          <p>El análisis de clasificación es una técnica fundamental en minería de datos. Nos permite categorizar elementos en diferentes clases basándonos en sus características. Para este ejemplo utilizaremos el conjunto de datos Iris, que incluye información sobre las medidas de tres especies de flores: setosa, versicolor y virginica. Nuestro objetivo será entrenar un modelo que pueda predecir correctamente la especie de una flor desconocida usando sus medidas, estas son la longitud y ancho del pétalo y del sépalo.
            Empleando Orange Data Mining, lo que haremos será: cargar los datos, explorar sus características, entrenar un modelo de regresión logística, y evaluar su rendimiento con métricas estándar como precisión y F1 score. No sólo veremos cómo implementar un modelo de clasificación, sino que además entenderemos cómo evaluar su efectividad.

            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
              <a
                href="files/Análisis de clasificación simple.ows"
                download="Análisis de clasificación simple.ows"
                className="download-link orange"
              >
                Descargar Orange .ows
              </a>
              <br />
              <a
                href="files/iris.tab"
                download="example.xlsx"
                className="download-link green"
              >
                Descargar DataMainig .xlsx
              </a>
            </div>

            <h3>Objetivo:</h3>
            <p>Clasificar flores en el conjunto de datos Iris basado en sus características.</p>
            <h3>Pasos:</h3>
            <ol>
              <li>
                <strong>Cargar datos:</strong>
                <ul>
                  <li>Arrastra el widget <strong>File</strong> al lienzo y selecciona el archivo <code>iris.tab</code> (disponible por defecto en Orange).</li>
                </ul>
              </li>
              <li>
                <strong>Previsualizar datos:</strong>
                <ul>
                  <li>Conecta el widget <strong>File</strong> al widget <strong>Data Table</strong> para visualizar las características y las clases de las flores.</li>
                </ul>
              </li>
              <li>
                <strong>Entrenar un modelo:</strong>
                <ul>
                  <li>Arrastra el widget <strong>Logistic Regression</strong> al lienzo.</li>
                  <li>Conecta <strong>File → Logistic Regression</strong>.</li>
                </ul>
              </li>
              <li>
                <strong>Evaluar el modelo:</strong>
                <ul>
                  <li>Arrastra el widget <strong>Test &amp; Score</strong>.</li>
                  <li>Conecta <strong>File → Test &amp; Score</strong> y <strong>Logistic Regression → Test &amp; Score</strong>.</li>
                </ul>
              </li>
              <li>
                <strong>Resultados:</strong>
                <ul>
                  <li>Observa las métricas de rendimiento (precisión, F1 score, etc.) en el widget <strong>Test &amp; Score</strong>.</li>
                  <br></br>
                </ul>
              </li>
            </ol>

            <div>
              <img src={Logistica_Imagen} className='image-charts' alt='imagen-logistica'></img>
            </div>

          </p>

          <div className="chart-container">
            <p><h3>Datos Reales</h3></p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={dataTypesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                >
                  {dataTypesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>


          <div className="chart-container">
            <p><h3>Datos Predicción</h3></p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={dataTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                >
                  {dataTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container">
          <h2>Análisis de agrupamiento (Clustering)</h2>
          <p>
            El análisis de agrupamiento, o clustering, es una técnica de aprendizaje no supervisado que permite organizar elementos en grupos basados en sus similitudes. En este ejemplo, utilizaremos un conjunto de datos sobre frutas y vegetales, clasificándolas según características como peso, tamaño y color.
            Este enfoque es útil en diversas áreas, como marketing, biología o análisis de inventarios. Con Orange Data Mining, aplicaremos el algoritmo de K-Means, una de las técnicas más utilizadas para clustering, y visualizaremos los resultados de forma gráfica para identificar patrones y estructuras ocultas en los datos. Además, exploraremos los datos, configuraremos el modelo de agrupamiento y visualizaremos los clústeres, proporcionando una experiencia práctica en el uso de herramientas visuales para análisis de datos.

            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
              <a
                href="files/Análisis de agrupamiento (Clustering).ows"
                download="Análisis de agrupamiento (Clustering).ows"
                className="download-link orange"
              >
                Descargar Orange .ows
              </a>
              <br />
              <a
                href="files/fruits_vegetables.tab"
                download="fruits_vegetables.tab"
                className="download-link green"
              >
                Descargar Datamainig .xlsx
              </a>
            </div>

            <h3>Objetivo:</h3>
            <p>Agrupar frutas por características en un conjunto de datos.</p>
            <h3>Pasos:</h3>
            <ol>
              <li>
                <strong>Cargar datos:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>File</strong> para cargar el archivo <code>fruits_vegetables.tab</code> (podemos crear uno con características como peso, tamaño, etc.).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Visualizar datos:</strong>
                <ul>
                  <li>
                    Conecta el widget <strong>File</strong> al widget <strong>Scatter Plot</strong>.
                  </li>
                  <li>
                    Configura las dimensiones del gráfico para observar patrones en las características.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Aplicar clustering:</strong>
                <ul>
                  <li>Arrastra el widget <strong>K-Means</strong> al lienzo.</li>
                  <li>Conecta <strong>File → K-Means</strong>.</li>
                </ul>
              </li>
              <li>
                <strong>Visualizar resultados:</strong>
                <ul>
                  <li>
                    Conecta <strong>K-Means → Scatter Plot</strong> para ver los clústeres formados.
                  </li>
                  <li>
                    Cambia los ejes en el gráfico para explorar diferentes relaciones entre las características.
                  </li>
                </ul>
              </li>
            </ol>

            <div >
              <img src={Clustering_Imagen} className='image-charts' alt="Visualización del clustering" />
            </div>
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart
              width={600}
              height={400}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis
                type="number"
                dataKey="x"
                name="Color"
                label={{ value: 'Color', position: 'insideBottom', offset: -5 }}
                domain={[Math.min(...ClusterData1.map(d => d.x)), Math.max(...ClusterData1.map(d => d.x))]}
                allowDecimals={false} // Evita decimales en los valores del eje X
              />
              <YAxis
                type="number"
                dataKey="y"
                name="Size"
                label={{ value: 'Size', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter
                name="Fruta"
                data={ClusterData1.filter(d => d.cluster === 'A')}
                fill="#8884d8"
              />
              <Scatter
                name="Vegetables"
                data={ClusterData1.filter(d => d.cluster === 'B')}
                fill="#82ca9d"
              />
            </ScatterChart>
          </ResponsiveContainer>

          {/* <form onSubmit={handleAddClusterPoint} className="add-data-form">
            <input
              type="number"
              placeholder="Coordenada X"
              value={newClusterPoint.x || ''}
              onChange={(e) => setNewClusterPoint({ ...newClusterPoint, x: Number(e.target.value) })}
              required
            />
            <input
              type="number"
              placeholder="Coordenada Y"
              value={newClusterPoint.y || ''}
              onChange={(e) => setNewClusterPoint({ ...newClusterPoint, y: Number(e.target.value) })}
              required
            />
            <input
              type="text"
              placeholder="Cluster (A, B, o C)"
              value={newClusterPoint.cluster}
              onChange={(e) => setNewClusterPoint({ ...newClusterPoint, cluster: e.target.value })}
              required
            />
            <button type="submit">Agregar punto de Cluster </button>
          </form>
          <div className="data-actions">
            <button onClick={handleResetClusterData}>Reiniciar datos</button>
          </div>
          <div className="data-list">
            {clusterData.map((point, index) => (
              <div key={index} className="data-item">
                <span>({point.x}, {point.y}) - Cluster {point.cluster}</span>
                <button onClick={() => handleDeleteClusterPoint(point.x, point.y)}>Eliminar</button>
              </div>
            ))}
          </div> */}
        </div>

        <div className="chart-container">
          <h2>Reglas de asociación</h2>
          <p>
            Las reglas de asociación son una técnica poderosa de análisis utilizada para descubrir relaciones interesantes entre elementos en grandes conjuntos de datos. Este enfoque es particularmente útil en el análisis de transacciones, como en un supermercado, donde el objetivo es identificar patrones de compra que puedan sugerir qué productos suelen comprarse juntos.
            En este ejemplo, trabajaremos con un conjunto de datos de transacciones y aplicaremos un análisis de reglas de asociación mediante el algoritmo Apriori, ampliamente reconocido en el análisis de canastas de mercado. Utilizando Orange Data Mining, extraeremos estas reglas, visualizaremos su soporte y confianza, y filtraremos aquellas que puedan ser útiles para la toma de decisiones, como estrategias de promoción o diseño de tiendas.

            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
              <a
                href="files/Reglas de asociación.ows"
                download="Reglas de asociación.ows"
                className="download-link orange"
              >
                Descargar Orange .ows
              </a>
              <br />
              <a
                href="files/market-basket.xlsx"
                download="market-basket.xlsx"
                className="download-link green"
              >
                Descargar Datamainig .xlsx
              </a>
            </div>

            <h3>Objetivo:</h3>
            <p>Encontrar reglas de asociación entre productos en un conjunto de datos de transacciones.</p>

            <h3>Pasos:</h3>
            <ol>
              <li>
                <strong>Cargar datos:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>File</strong> para cargar un archivo de transacciones (utilizaremos: <code>market-basket.xlsx</code>).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Extraer reglas de asociación:</strong>
                <ul>
                  <li>Arrastra el widget <strong>Associate Rules</strong> al lienzo.</li>
                  <li>Conecta <strong>File → Associate Rules</strong>.</li>
                </ul>
              </li>
              <li>
                <strong>Visualizar las reglas:</strong>
                <ul>
                  <li>
                    Conecta <strong>Associate Rules → Data Table</strong> para ver las reglas generadas con soporte y confianza.
                  </li>
                </ul>
              </li>
            </ol>

            <div>
              <img src={AssociationRules_Imagen} className='image-charts' alt="Visualización de reglas de asociación" />
            </div>
          </p>


          {/* <ResponsiveContainer width="100%" height={300}>
            <ScatterChart
              width={600}
              height={400}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis
                type="category"
                dataKey="x"
                name="Color"
                label={{ value: 'Color', position: 'insideBottom', offset: -5 }}
              />
              <YAxis
                type="number"
                dataKey="y"
                name="Size"
                label={{ value: 'Size', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter
                name="Fruta"
                data={clusterData.filter(d => d.cluster === 'A')}
                fill="#8884d8"
              />
              <Scatter
                name="Vegetables"
                data={clusterData.filter(d => d.cluster === 'B')}
                fill="#82ca9d"
              />
 
            </ScatterChart>
          </ResponsiveContainer>
          <form onSubmit={handleAddClusterPoint} className="add-data-form">
            <input
              type="number"
              placeholder="Coordenada X"
              value={newClusterPoint.x || ''}
              onChange={(e) => setNewClusterPoint({ ...newClusterPoint, x: Number(e.target.value) })}
              required
            />
            <input
              type="number"
              placeholder="Coordenada Y"
              value={newClusterPoint.y || ''}
              onChange={(e) => setNewClusterPoint({ ...newClusterPoint, y: Number(e.target.value) })}
              required
            />
            <input
              type="text"
              placeholder="Cluster (A, B, o C)"
              value={newClusterPoint.cluster}
              onChange={(e) => setNewClusterPoint({ ...newClusterPoint, cluster: e.target.value })}
              required
            />
            <button type="submit">Agregar punto de Cluster </button>
          </form>
          <div className="data-actions">
            <button onClick={handleResetClusterData}>Reiniciar datos</button>
          </div>
          <div className="data-list">
            {clusterData.map((point, index) => (
              <div key={index} className="data-item">
                <span>({point.x}, {point.y}) - Cluster {point.cluster}</span>
                <button onClick={() => handleDeleteClusterPoint(point.x, point.y)}>Eliminar</button>
              </div>
            ))}
          </div> */}
        </div>

        <div className="chart-container">
          <h2> Identificación de clientes rentables</h2>
          <p>
            En el mundo empresarial, una de las estrategias clave para optimizar los recursos y maximizar los beneficios consiste en identificar a los clientes más rentables.
            A lo largo de este ejercicio, trabajaremos con un conjunto de datos históricos de ventas. Este conjunto incluye información clave como el monto total de las compras, la frecuencia de compra, la edad, el género, y otros indicadores relevantes. Además, se han introducido dos variables derivadas: Rentabilidad, que mide la relación entre el monto total y la frecuencia de compra, y Rentable, que clasifica a los clientes con base en un umbral específico (monto total mayor a 3000).
            El ejercicio no solo se enfoca en la limpieza, preparación y análisis de los datos, sino también en la implementación de modelos de clasificación binaria, como Regresión Logística y Random Forest, para predecir cuáles clientes son rentables. Estos modelos serán evaluados rigurosamente para determinar su efectividad, precisión y utilidad práctica en la toma de decisiones estratégicas.

            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
              <a
                href="files/Identificacion de clientes rentables.ows"
                download="Identificacion de clientes rentables.ows"
                className="download-link orange"
              >
                Descargar Orange .ows
              </a>
              <br />
              <a
                href="files/comercial_delta_data_large.csv"
                download="comercial_delta_data_large.csv"
                className="download-link green"
              >
                Descargar Datamainig .xlsx
              </a>
            </div>

            <h3>Objetivo:</h3>
            <p>
              Lograr la identificación de los clientes rentables de una manera precisa, utilizando técnicas de análisis de datos avanzadas y herramientas de modelado predictivo.
            </p>

            <div>
              <img src={ProfitabilityAnalysis_Imagen} className='image-charts' alt="Visualización de clientes rentables" />
            </div>

            <h3>Pasos:</h3>
            <ol>
              <li>
                <strong>Carga de los Datos:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>File</strong> para cargar el archivo con los datos históricos de ventas. Este archivo contiene las variables necesarias para el análisis (Monto Total de Compras, Frecuencia de Compra, Género, Edad, entre otras).
                  </li>
                  <li>
                    Verifica que los datos se cargaron correctamente explorando las columnas disponibles.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Limpieza de los Datos:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>Edit Domain</strong> para:
                    <ul>
                      <li>Género: Simplificar los valores a "F" (Femenino) y "M" (Masculino).</li>
                      <li>Ciudad: Eliminar los registros con valores desconocidos ("Unknown").</li>
                      <li>Método de Pago: Corregir valores mal escritos, como cambiar "tarj" a "Tarjeta".</li>
                      <li>Promoción Activa: Eliminar registros con valores desconocidos.</li>
                    </ul>
                  </li>
                  <li>
                    Utiliza el widget <strong>Select Rows</strong> o <strong>Impute</strong> para manejar valores faltantes o inconsistencias adicionales.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Creación de Variables Derivadas:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>Formula</strong> para calcular:
                    <ul>
                      <li>
                        <strong>Rentabilidad:</strong> Calcula la relación entre el Monto Total de Compras y la Frecuencia de Compra. <br />
                        Fórmula: Rentabilidad = Monto Total de Compras / Frecuencia de Compra
                      </li>
                      <li>
                        <strong>Rentable:</strong> Clasifica a los clientes según su monto total. <br />
                        Fórmula: Rentable = Monto Total de Compras &gt; 3000
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Análisis Exploratorio de los Datos:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>Scatter Plot</strong> para observar:
                    <ul>
                      <li>
                        Relación entre Frecuencia de Compra y Monto Total de Compras. Configura el color de los puntos según la variable Rentabilidad para identificar visualmente a los clientes más rentables.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Usa el widget <strong>Histogram</strong> para analizar la distribución de los valores en el Monto Total de Compras y detectar frecuencias sobresalientes.
                  </li>
                </ul>

                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={initialAlgorithmData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rango" label={{ value: "MontoTotalCompras", position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Frequency", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Bar dataKey="frecuencia" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
                {/* {selectedAlgorithm && (
            <div className="algorithm-details">
              <h3>{selectedAlgorithm}</h3>
              <p>
                {algorithmData.find(algo => algo.name === selectedAlgorithm)?.accuracy}% Precisión,{' '}
                {algorithmData.find(algo => algo.name === selectedAlgorithm)?.speed}% Velocidad
              </p>
            </div>
          )}
          <form onSubmit={handleAddAlgorithm} className="add-data-form">
            <input
              type="text"
              placeholder="Nombre del algoritmo"
              value={newAlgorithm.name}
              onChange={(e) => setNewAlgorithm({ ...newAlgorithm, name: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Precisión"
              value={newAlgorithm.accuracy || ''}
              onChange={(e) => setNewAlgorithm({ ...newAlgorithm, accuracy: Number(e.target.value) })}
              required
            />
            <input
              type="number"
              placeholder="Velocidad"
              value={newAlgorithm.speed || ''}
              onChange={(e) => setNewAlgorithm({ ...newAlgorithm, speed: Number(e.target.value) })}
              required
            />
            <button type="submit">Agregar algoritmo</button>
          </form>
          <div className="data-actions">
            <button onClick={handleResetAlgorithmData}>Reiniciar datos</button>
          </div>
          <div className="data-list">
            {algorithmData.map((algo) => (
              <div key={algo.name} className="data-item">
                <span>{algo.name}</span>
                <button onClick={() => handleDeleteAlgorithm(algo.name)}>Eliminar</button>
              </div>
            ))}
          </div> */}

              </li>
              <li>
                <strong>Agrupamiento de Clientes:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>K-Means</strong> para agrupar a los clientes en diferentes clústeres según características como Frecuencia de Compra, Monto Total y Rentabilidad.
                  </li>
                  <li>
                    Configura el número de clústeres (por ejemplo, 3) y analiza cómo se agrupan los clientes.
                  </li>
                </ul>


                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart
                    width={600}
                    height={400}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <CartesianGrid />
                    <XAxis
                      type="number"
                      dataKey="x"
                      name="Monto"
                      label={{ value: 'Monto total Compra', position: 'insideBottom', offset: -5 }}
                      domain={['dataMin', 'dataMax']} // Ajusta dinámicamente al mínimo y máximo de los datos
                    />
                    <YAxis
                      type="number"
                      dataKey="y"
                      name="Frecuencia"
                      label={{ value: 'Frecuencia', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter
                      name="C1"
                      data={ClusterData2.filter(d => d.cluster === 'A')}
                      fill="#8884d8"
                    />
                    <Scatter
                      name="C2"
                      data={ClusterData2.filter(d => d.cluster === 'B')}
                      fill="#82ca9d"
                    />
                    <Scatter
                      name="C3"
                      data={ClusterData2.filter(d => d.cluster === 'C')}
                      fill="#FFBB28"
                    />
                  </ScatterChart>
                </ResponsiveContainer>


                {/* <form onSubmit={handleAddClusterPoint} className="add-data-form">
            <input
              type="number"
              placeholder="Coordenada X"
              value={newClusterPoint.x || ''}
              onChange={(e) => setNewClusterPoint({ ...newClusterPoint, x: Number(e.target.value) })}
              required
            />
            <input
              type="number"
              placeholder="Coordenada Y"
              value={newClusterPoint.y || ''}
              onChange={(e) => setNewClusterPoint({ ...newClusterPoint, y: Number(e.target.value) })}
              required
            />
            <input
              type="text"
              placeholder="Cluster (A, B, o C)"
              value={newClusterPoint.cluster}
              onChange={(e) => setNewClusterPoint({ ...newClusterPoint, cluster: e.target.value })}
              required
            />
            <button type="submit">Agregar punto de Cluster </button>
          </form>
          <div className="data-actions">
            <button onClick={handleResetClusterData}>Reiniciar datos</button>
          </div>
          <div className="data-list">
            {clusterData.map((point, index) => (
              <div key={index} className="data-item">
                <span>({point.x}, {point.y}) - Cluster {point.cluster}</span>
                <button onClick={() => handleDeleteClusterPoint(point.x, point.y)}>Eliminar</button>
              </div>
            ))}
          </div> */}

              </li>
              <li>
                <strong>Selección de Variables para el Modelado:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>Select Columns</strong> para seleccionar las variables predictoras (Frecuencia de Compra, Monto Total, Género, Edad, etc.) y la variable objetivo (Rentable).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Entrenamiento de Modelos:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>Logistic Regression</strong> para configurar y entrenar un modelo de regresión logística.
                  </li>
                  <li>
                    Usa el widget <strong>Random Forest</strong> para entrenar un modelo con:
                    <ul>
                      <li>Número de árboles: 100.</li>
                      <li>Profundidad máxima: 10.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Evaluación de Modelos:</strong>
                <ul>
                  <li>
                    Usa el widget <strong>Test & Score</strong> para evaluar métricas como AUC, Precisión, F1 Score, Recall y MCC.
                  </li>
                  <li>
                    Usa el widget <strong>Confusion Matrix</strong> para visualizar los resultados.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Comparación de Resultados:</strong>
                <ul>
                  <li>Regresión Logística: Ventajas - Interpretabilidad. Limitaciones - Relación lineal.</li>
                  <li>Random Forest: Ventajas - Relaciones no lineales. Limitaciones - Complejidad.</li>
                </ul>
              </li>
            </ol>
          </p>




        </div>

        <h2 className="section-title">Grafico Interactivo</h2>
        <div className="chart-container">
          <h2>Gráfico de línea</h2>
          <p>Los gráficos de líneas se usan para representar grandes cantidades de datos que tienen lugar durante un período continuado de tiempo.</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="dataVolume" stroke="#8884d8" name="Volumen de datos (ZB)" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
          <form onSubmit={handleAddDataGrowth} className="add-data-form">
            <input
              type="number"
              placeholder="Año"
              value={newDataGrowth.year || ''}
              onChange={(e) => setNewDataGrowth({ ...newDataGrowth, year: Number(e.target.value) })}
              required
            />
            <input
              type="number"
              placeholder="Volumen de datos"
              value={newDataGrowth.dataVolume || ''}
              onChange={(e) => setNewDataGrowth({ ...newDataGrowth, dataVolume: Number(e.target.value) })}
              required
            />
            <button type="submit">Agregar punto de datos</button>
          </form>
          <div className="data-actions">
            <button onClick={handleResetDataGrowthData}>Reiniciar datos</button>
          </div>
          <div className="data-list">
            {dataGrowthData.map((data) => (
              <div key={data.year} className="data-item">
                <span>{data.year}: {data.dataVolume} ZB</span>
                <button onClick={() => handleDeleteDataGrowth(data.year)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={algorithmData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend onClick={(e) => setSelectedAlgorithm(e.value)} />
              <Bar dataKey="accuracy" fill="#8884d8" name="Presicion" />
              <Bar dataKey="speed" fill="#82ca9d" name="Velocidad" />
            </BarChart>
          </ResponsiveContainer>
          {selectedAlgorithm && (
            <div className="algorithm-details">
              <h3>{selectedAlgorithm}</h3>
              <p>
                {algorithmData.find(algo => algo.name === selectedAlgorithm)?.accuracy}% Precisión,{' '}
                {algorithmData.find(algo => algo.name === selectedAlgorithm)?.speed}% Velocidad
              </p>
            </div>
          )}
          <form onSubmit={handleAddAlgorithm} className="add-data-form">
            <input
              type="text"
              placeholder="Nombre del algoritmo"
              value={newAlgorithm.name}
              onChange={(e) => setNewAlgorithm({ ...newAlgorithm, name: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Precisión"
              value={newAlgorithm.accuracy || ''}
              onChange={(e) => setNewAlgorithm({ ...newAlgorithm, accuracy: Number(e.target.value) })}
              required
            />
            <input
              type="number"
              placeholder="Velocidad"
              value={newAlgorithm.speed || ''}
              onChange={(e) => setNewAlgorithm({ ...newAlgorithm, speed: Number(e.target.value) })}
              required
            />
            <button type="submit">Agregar algoritmo</button>
          </form>
          <div className="data-actions">
            <button onClick={handleResetAlgorithmData}>Reiniciar datos</button>
          </div>
          <div className="data-list">
            {algorithmData.map((algo) => (
              <div key={algo.name} className="data-item">
                <span>{algo.name}</span>
                <button onClick={() => handleDeleteAlgorithm(algo.name)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div> */}


      </div>
    </>
  );
};

export default DataMiningCharts;

