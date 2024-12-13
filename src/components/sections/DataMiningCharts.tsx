import React, { useEffect, useState } from 'react';
import '../../styles/EstilosDataMining.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter, Sector } from 'recharts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationForGraphsAndGlossary from './NavigationForGraphsAndGlossary ';


const DataMiningCharts: React.FC = () => {
  const initialAlgorithmData = [
    { name: 'Decision Trees', accuracy: 85, speed: 90 },
    { name: 'Random Forest', accuracy: 92, speed: 75 },
    { name: 'SVM', accuracy: 88, speed: 60 },
    { name: 'K-Means', accuracy: 78, speed: 95 },
    { name: 'Neural Networks', accuracy: 94, speed: 50 },
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

  const initialClusterData = [
    { x: 10, y: 30, cluster: 'A' },
    { x: 40, y: 30, cluster: 'A' },
    { x: 45, y: 40, cluster: 'A' },
    { x: 20, y: 50, cluster: 'B' },
    { x: 30, y: 70, cluster: 'B' },
    { x: 50, y: 60, cluster: 'B' },
    { x: 70, y: 20, cluster: 'C' },
    { x: 80, y: 30, cluster: 'C' },
    { x: 90, y: 40, cluster: 'C' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);
  const [algorithmData, setAlgorithmData] = useState(initialAlgorithmData);
  const [dataGrowthData, setDataGrowthData] = useState(initialDataGrowthData);
  const [clusterData, setClusterData] = useState(initialClusterData);

  const [newAlgorithm, setNewAlgorithm] = useState({ name: '', accuracy: 0, speed: 0 });
  const [newDataGrowth, setNewDataGrowth] = useState({ year: 0, dataVolume: 0 });
  const [newClusterPoint, setNewClusterPoint] = useState({ x: 0, y: 0, cluster: '' });

  // Sample data for data types distribution (unchanged)
  const dataTypesData = [
    { name: 'Structured', value: 20 },
    { name: 'Semi-structured', value: 30 },
    { name: 'Unstructured', value: 50 },
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

  const handleAddAlgorithm = (e: React.FormEvent) => {
    e.preventDefault();
    setAlgorithmData([...algorithmData, newAlgorithm]);
    setNewAlgorithm({ name: '', accuracy: 0, speed: 0 });
  };

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
    setClusterData(initialClusterData);
  };

  const handleDeleteAlgorithm = (name: string) => {
    setAlgorithmData(algorithmData.filter(algo => algo.name !== name));
  };

  const handleDeleteDataGrowth = (year: number) => {
    setDataGrowthData(dataGrowthData.filter(data => data.year !== year));
  };

  const handleDeleteClusterPoint = (x: number, y: number) => {
    setClusterData(clusterData.filter(point => point.x !== x || point.y !== y));
  };


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavigationForGraphsAndGlossary />
      <div id='graficos' className="data-mining-charts">
        <h2 className="section-title">Grafico Interactivo</h2>

        <div className="chart-container" data-aos="fade-up">
          <h2>Comparación de Rendimiento de Algoritmos</h2>
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
        </div>

        <div className="chart-container">
          <h2>Crecimiento de Datos en el Tiempo</h2>
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

        <div className="chart-container">
          <h2>Distribucción de tipos de datos</h2>
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
          <h2>Visualización Clustering</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="X" />
              <YAxis type="number" dataKey="y" name="Y" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Cluster A" data={clusterData.filter(d => d.cluster === 'A')} fill="#8884d8" />
              <Scatter name="Cluster B" data={clusterData.filter(d => d.cluster === 'B')} fill="#82ca9d" />
              <Scatter name="Cluster C" data={clusterData.filter(d => d.cluster === 'C')} fill="#ffc658" />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DataMiningCharts;

