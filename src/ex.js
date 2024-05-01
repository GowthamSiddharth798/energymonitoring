import React, { useEffect } from 'react';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const readTextFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf8');
};

const parseTextToJson = (text) => {
  const lines = text.split('\n');
  const jsonData = {};
  lines.forEach(line => {
    const data = line.split(',');
    const timestamp = data[0];
    const power = data[2];
    const energy = data[3];
    const current= data[1];
    jsonData[timestamp] = { power, energy, current };
  });
  return jsonData;
};

const writeJsonFile = (data, outputPath) => {
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log('JSON file has been saved successfully!');
};

const MyComponent = () => {
  useEffect(() => {
    const fetchDataAndWriteToFile = async () => {
      try {
        const response = await axios.get('https://energybackend.onrender.com/api/sensordata');
        const apiData = response.data;
        const { power, energy, current } = apiData;
        const currentTimestamp = new Date().toLocaleString().split(',').join('').replace(/\//g, '-');
        const currentData = {
          [currentTimestamp]: { power, energy, current }
        };
        const inputFolderPath = 'C:\\Users\\Lenovo\\Dropbox\\vit\\';
        const outputFolderPath = 'C:\\Users\\Lenovo\\energymonitoring\\src\\Pages\\Charts\\';
        const outputFileName = 'Mydata.json';
        const existingData = JSON.parse(readTextFile(path.join(outputFolderPath, outputFileName)));
        const mergedData = { ...existingData, ...currentData };
        const outputFileFullPath = path.join(outputFolderPath, outputFileName);
        writeJsonFile(mergedData, outputFileFullPath);
        console.log(`JSON file ${outputFileName} has been updated successfully at ${outputFileFullPath}`);
      } catch (error) {
        console.error('Error fetching and writing data to file:', error);
      }
    };

    // Run the function immediately when component mounts
    fetchDataAndWriteToFile();

    // Run the function every 59 seconds
    const intervalId = setInterval(fetchDataAndWriteToFile, 59000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default MyComponent;
