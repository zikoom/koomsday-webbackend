const fs = require('fs');
const path = require('path');
const {google} = require('googleapis');

var v = null;

const oauthJsonPath = path.resolve(process.cwd(), 'secret', 'client_secret.json');
console.log('oauthJsonPath: ',oauthJsonPath);
console.log('process.cwd(): ', process.cwd())

const {installed} = JSON.parse(fs.readFileSync(oauthJsonPath))
const {client_id, client_secret, redirect_uris} = installed;

console.log('secret: ', installed);

const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris
);

const scopes = [
  'https://www.googleapis.com/auth/userinfo.profile'
];



exports.v = v;