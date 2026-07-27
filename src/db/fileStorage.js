const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'history.json');

// Save record
function saveRecord(record) {
  let history = [];
  if (fs.existsSync(filePath)) {
    history = JSON.parse(fs.readFileSync(filePath));
  }
  history.push(record);
  fs.writeFileSync(filePath, JSON.stringify(history, null, 2));
}

// Get all history
function getHistory() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath));
}

module.exports = { saveRecord, getHistory };
