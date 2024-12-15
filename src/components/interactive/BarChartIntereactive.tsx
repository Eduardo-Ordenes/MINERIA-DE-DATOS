import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartIntereactive: React.FC = () => {
  const datosIniciales = [
    { nombre: 'Árboles de Decisión', precision: 85, velocidad: 90 },
    { nombre: 'Bosques Aleatorios', precision: 92, velocidad: 75 },
    { nombre: 'SVM', precision: 88, velocidad: 60 },
    { nombre: 'K-Means', precision: 78, velocidad: 95 },
    { nombre: 'Redes Neuronales', precision: 94, velocidad: 50 },
  ];

  const [datosAlgoritmos, setDatosAlgoritmos] = useState(datosIniciales);
  const [nuevoAlgoritmo, setNuevoAlgoritmo] = useState({ nombre: '', precision: 0, velocidad: 0 });
  const [algoritmoSeleccionado, setAlgoritmoSeleccionado] = useState<string | null>(null);

  // Agregar un nuevo algoritmo
  const agregarAlgoritmo = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevoAlgoritmo.nombre && nuevoAlgoritmo.precision > 0 && nuevoAlgoritmo.velocidad > 0) {
      setDatosAlgoritmos((prevDatos) => [...prevDatos, nuevoAlgoritmo]);
      setNuevoAlgoritmo({ nombre: '', precision: 0, velocidad: 0 });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  };

  // Eliminar un algoritmo
  const eliminarAlgoritmo = (nombre: string) => {
    setDatosAlgoritmos((prevDatos) => prevDatos.filter((algo) => algo.nombre !== nombre));
  };

  // Reiniciar los datos
  const reiniciarDatos = () => {
    setDatosAlgoritmos(datosIniciales);
  };

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={datosAlgoritmos}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" label={{ value: 'Algoritmo', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Porcentaje (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend onClick={(e) => setAlgoritmoSeleccionado(e.value)} />
          <Bar dataKey="precision" fill="#8884d8" name="Precisión" />
          <Bar dataKey="velocidad" fill="#82ca9d" name="Velocidad" />
        </BarChart>
      </ResponsiveContainer>

      {algoritmoSeleccionado && (
        <div className="algorithm-details">
          <h3>{algoritmoSeleccionado}</h3>
          <p>
            Precisión:{' '}
            {datosAlgoritmos.find((algo) => algo.nombre === algoritmoSeleccionado)?.precision}% <br />
            Velocidad:{' '}
            {datosAlgoritmos.find((algo) => algo.nombre === algoritmoSeleccionado)?.velocidad}%
          </p>
        </div>
      )}

      {/* Formulario para agregar nuevo algoritmo */}
      <form onSubmit={agregarAlgoritmo} className="add-data-form">
        <input
          type="text"
          placeholder="Nombre del algoritmo"
          value={nuevoAlgoritmo.nombre}
          onChange={(e) => setNuevoAlgoritmo({ ...nuevoAlgoritmo, nombre: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Precisión (%)"
          value={nuevoAlgoritmo.precision || ''}
          onChange={(e) =>
            setNuevoAlgoritmo({ ...nuevoAlgoritmo, precision: Number(e.target.value) })
          }
          required
        />
        <input
          type="number"
          placeholder="Velocidad (%)"
          value={nuevoAlgoritmo.velocidad || ''}
          onChange={(e) =>
            setNuevoAlgoritmo({ ...nuevoAlgoritmo, velocidad: Number(e.target.value) })
          }
          required
        />
        <button type="submit">Agregar</button>
      </form>

      <div className="data-actions">
        <button onClick={reiniciarDatos}>Reiniciar Datos</button>
      </div>

      {/* Lista de algoritmos */}
      <div className="data-list">
        {datosAlgoritmos.map((algo) => (
          <div key={algo.nombre} className="data-item">
            <span>
              {algo.nombre} - Precisión: {algo.precision}% - Velocidad: {algo.velocidad}%
            </span>
            <button onClick={() => eliminarAlgoritmo(algo.nombre)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChartIntereactive;
