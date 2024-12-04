import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const InteractiveChart = () => {
  const [data, setData] = useState([
    { name: 'Classification', value: 40 },
    { name: 'Clustering', value: 30 },
    { name: 'Association', value: 20 },
    { name: 'Anomaly', value: 10 },
  ]);

  const handleValueChange = (index: number, newValue: number) => {
    const newData = [...data];
    newData[index] = { ...newData[index], value: newValue };
    setData(newData);
  };

  return (
    <div>
      <h3>Data Mining Techniques Distribution</h3>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ marginTop: '20px' }}>
        {data.map((item, index) => (
          <div key={item.name} style={{ marginBottom: '10px' }}>
            <label style={{ color: COLORS[index], marginRight: '10px' }}>
              {item.name}:
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={item.value}
              onChange={(e) => handleValueChange(index, parseInt(e.target.value))}
            />
            <span style={{ marginLeft: '10px' }}>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveChart;