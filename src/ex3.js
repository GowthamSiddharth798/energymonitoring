const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Function to read the text file
const readTextFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf8');
};

const parseTextToJson = (text) => {
  const lines = text.split('\n');
  const jsonData = {};
  lines.forEach(line => {
    const data = line.split(',');
    const timestamp = data[0]; // Assuming the timestamp is the first value in each line
    const power = data[2]; // Extracting "power" value
    const energy = data[3]; // Extracting "energy" value
    const current= data[1];
    jsonData[timestamp] = { power, energy, current }; // Storing "power" and "energy" values in JSON
  });
  return jsonData;
};

// Function to write JSON data to a file
const writeJsonFile = (data, outputPath) => {
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log('JSON file has been saved successfully!');
};

// Define input and output folder paths
const inputFolderPath = 'C:\\Users\\Lenovo\\Dropbox\\vit\\';
const outputFolderPath = 'C:\\Users\\Lenovo\\energymonitoring\\src\\Pages\\Charts\\';
const outputFileName = 'Mydata.json'; // Name of the output JSON file

// Define a function to fetch data from input files, parse it, and write to JSON file
const fetchDataAndWriteToFile = async () => {
  try {
    // Fetch data from API
    const response = await axios.get('https://energybackend.onrender.com/api/sensordata');
    const apiData = response.data;

    // Extract current power, energy, and current parameters
    const { power, energy, current } = apiData;

    // Get current timestamp in the required format
// Get current timestamp in the required format
// Get current timestamp in the required format
const currentTimestamp = new Date().toLocaleString().split(',').join('').replace(/\//g, '-');

    // Create JSON object with current data
    const currentData = {
      [currentTimestamp]: { power, energy, current }
    };

    // Read existing JSON data from the file
    const existingData = JSON.parse(readTextFile(path.join(outputFolderPath, outputFileName)));

    // Merge existing data with new current data
    const mergedData = { ...existingData, ...currentData };

    // Write merged JSON data to the output file
    const outputFileFullPath = path.join(outputFolderPath, outputFileName);
    writeJsonFile(mergedData, outputFileFullPath);
    console.log("JSON file ${outputFileName} has been updated successfully at ${outputFileFullPath}");
  } catch (error) {
    console.error('Error fetching and writing data to file:', error);
  }
};

// Run fetchDataAndWriteToFile function once immediately
fetchDataAndWriteToFile();

// Run fetchDataAndWriteToFile function every 59 seconds
setInterval(fetchDataAndWriteToFile, 59000);