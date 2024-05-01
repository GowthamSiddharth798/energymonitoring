import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import jsonData from './Mydata.json'; // Import JSON data file

const Chart = () => {
  const chartData = Object.keys(jsonData).map(key => ({ time: key, power: parseFloat(jsonData[key].power) }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="power" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;