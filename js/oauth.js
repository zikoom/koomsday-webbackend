const fs = require('fs');
const path = require('path');

var v = null;

const oauthJsonPath = path.resolve(process.cwd(), 'secret', 'client_secret.json');
console.log('oauthJsonPath: ',oauthJsonPath);
console.log('process.cwd(): ', process.cwd())

const {installed} = JSON.parse(fs.readFileSync(oauthJsonPath))

console.log('secret: ', installed);


exports.v = v;