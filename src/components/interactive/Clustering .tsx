import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Clustering: React.FC = () => {
  const datosInicialesCluster = [
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

  const [datosCluster, setDatosCluster] = useState(datosInicialesCluster);
  const [nuevoPuntoCluster, setNuevoPuntoCluster] = useState({ x: 0, y: 0, cluster: '' });

  // Agregar un nuevo punto al cluster
  const agregarPuntoCluster = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevoPuntoCluster.cluster && nuevoPuntoCluster.x > 0 && nuevoPuntoCluster.y > 0) {
      setDatosCluster((prevDatos) => [...prevDatos, nuevoPuntoCluster]);
      setNuevoPuntoCluster({ x: 0, y: 0, cluster: '' });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  };

  // Eliminar un punto del cluster
  const eliminarPuntoCluster = (x: number, y: number) => {
    setDatosCluster((prevDatos) =>
      prevDatos.filter((punto) => punto.x !== x || punto.y !== y)
    );
  };

  // Restablecer los datos del cluster
  const reiniciarDatosCluster = () => {
    setDatosCluster(datosInicialesCluster);
  };

  return (
    <div className="chart-container">
      <h2>Visualización de Clustering</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="x"
            name="Eje X"
            label={{ value: 'Coordenada X', position: 'insideBottom', offset: -5 }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Eje Y"
            label={{ value: 'Coordenada Y', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Cluster A" data={datosCluster.filter((d) => d.cluster === 'A')} fill="#8884d8" />
          <Scatter name="Cluster B" data={datosCluster.filter((d) => d.cluster === 'B')} fill="#82ca9d" />
          <Scatter name="Cluster C" data={datosCluster.filter((d) => d.cluster === 'C')} fill="#ffc658" />
        </ScatterChart>
      </ResponsiveContainer>

      {/* Formulario para agregar un nuevo punto */}
      <form onSubmit={agregarPuntoCluster} className="add-data-form">
        <input
          type="number"
          placeholder="Coordenada X"
          value={nuevoPuntoCluster.x || ''}
          onChange={(e) => setNuevoPuntoCluster({ ...nuevoPuntoCluster, x: Number(e.target.value) })}
          required
        />
        <input
          type="number"
          placeholder="Coordenada Y"
          value={nuevoPuntoCluster.y || ''}
          onChange={(e) => setNuevoPuntoCluster({ ...nuevoPuntoCluster, y: Number(e.target.value) })}
          required
        />
        <input
          type="text"
          placeholder="Cluster (A, B o C)"
          value={nuevoPuntoCluster.cluster}
          onChange={(e) => setNuevoPuntoCluster({ ...nuevoPuntoCluster, cluster: e.target.value })}
          required
        />
        <button type="submit">Agregar Punto</button>
      </form>

      {/* Botón para reiniciar los datos */}
      <div className="data-actions">
        <button onClick={reiniciarDatosCluster}>Reiniciar Datos</button>
      </div>

      {/* Lista de puntos en el cluster */}
      <div className="data-list">
        {datosCluster.map((punto, index) => (
          <div key={index} className="data-item">
            <span>
              (X: {punto.x}, Y: {punto.y}) - Cluster {punto.cluster}
            </span>
            <button onClick={() => eliminarPuntoCluster(punto.x, punto.y)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clustering;
