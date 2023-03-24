const fs = require('fs');

const readJson = (path) => {
  if(!path) return;
  return JSON.parse(fs.readFileSync(path));
}

module.exports = readJson;
