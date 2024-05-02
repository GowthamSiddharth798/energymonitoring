// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

// const Chart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://energybackend.onrender.com/api/sensordata");
//         const sensorData = response.data;

//         // Format data for the chart
//         const chartData = Object.keys(sensorData).map(key => ({
//           time: key.split(' ')[1],
//           current: parseFloat(sensorData[key].current),
//           power: parseFloat(sensorData[key].power),
//           energy: parseFloat(sensorData[key].energy),
//         }));

//         // Update the data state
//         setData(chartData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // Fetch data initially
//     fetchData();

//     // Fetch data every 1000 milliseconds
//     const intervalId = setInterval(fetchData, 1000);

//     // Cleanup function to clear interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array to ensure useEffect runs only once on component mount

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//         <XAxis dataKey="time" angle={-30} textAnchor="end" interval="preserveStart" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="current" stroke="#8884d8" name="Current" />
//         <Line type="monotone" dataKey="power" stroke="#82ca9d" name="Power" />
//         <Line type="monotone" dataKey="energy" stroke="#ffc658" name="Energy" />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default Chart;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import jsonData from './Mydata.json'; // Import JSON data file

const Chart = () => {
  const chartData = Object.keys(jsonData).map(key => ({ time: key.split(' ')[1], power: parseFloat(jsonData[key].power) }));
  const chartData2 = Object.keys(jsonData).map(key => ({ time: key.split(' ')[1], energy: parseFloat(jsonData[key].energy) }));
  const chartData3 = Object.keys(jsonData).map(key => ({ time: key.split(' ')[1], current: parseFloat(jsonData[key].current) }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData3} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="time" angle={-30} textAnchor="end" interval={Math.ceil(chartData3.length /chartData3.length+1)} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="current" stroke="#8884d8" />
      </LineChart>
      <br/><br/>
      <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="time" angle={-30} textAnchor="end" interval={Math.ceil(chartData.length /chartData.length+1)} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="power" stroke="#8884d8" />
      </LineChart>
<br/><br/>
      <LineChart data={chartData2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="time" angle={-30} textAnchor="end" interval={Math.ceil(chartData2.length /chartData2.length+1)} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="energy" stroke="#8884d8" />
      </LineChart>
   
      
    </ResponsiveContainer>
  );
}

export default Chart;