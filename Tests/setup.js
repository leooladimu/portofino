// Jest setup file
const fs = require('fs');
const path = require('path');

// Helper function to load HTML files for testing
global.loadHTML = (filename) => {
  const htmlPath = path.join(__dirname, '..', filename);
  return fs.readFileSync(htmlPath, 'utf-8');
};