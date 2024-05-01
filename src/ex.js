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
    jsonData[timestamp] = { power }; // Storing "power" value in JSON
  });
  return jsonData;
};

// Function to write JSON data to a file
const writeJsonFile = (data, outputPath) => {
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log('JSON file has been saved successfully!');
};

// Function to extract date from the filename
const extractDateFromFileName = (fileName) => {
  const regex = /VITB_(\d{4}-\d{2}-\d{2})\.txt/;
  const match = fileName.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null; // Return null if the filename format doesn't match the expected pattern
};

const currentDate = new Date();

// Define input and output folder paths
const inputFolderPath = 'C:\\Users\\Lenovo\\Dropbox\\vit\\';
const outputFolderPath = 'C:\\Users\\Lenovo\\Dropbox\\vit\\Json_File';

const inputFiles = fs.readdirSync(inputFolderPath).filter(file => fs.statSync(path.join(inputFolderPath, file)).isFile());

inputFiles.forEach(fileName => {
  const inputFilePath = path.join(inputFolderPath, fileName);
  
  // Extract date from the filename
  const fileDate = extractDateFromFileName(fileName);

  // Read text file
  const textContent = readTextFile(inputFilePath);

  // Parse text content to JSON with only "power" values
  const jsonData = parseTextToJson(textContent);

  // Write JSON data to a file in the output folder
  const outputFileName = `Mydata_${fileDate}.json`;
  const outputFileFullPath = path.join(outputFolderPath, outputFileName);
  writeJsonFile(jsonData, outputFileFullPath);
  console.log(`JSON file for ${fileDate} has been saved successfully at ${outputFileFullPath}`);
});
