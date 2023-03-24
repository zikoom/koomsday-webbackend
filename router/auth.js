const Router = require('@koa/router');
const router = new Router();

const root = global._ROOT_PATH.toString();
const path = require('path');
const readJson = require(path.resolve(__dirname, '../', 'util', 'jsonReader.js'))
const {MEMBER_SERVER_PATH} = readJson(path.resolve(__dirname, '../', 'config.json'));

const axios = require('axios')




router.get('/googleOauthURL', async (ctx) => {
  const res = await axios.get(MEMBER_SERVER_PATH + '/member/auth/googleOauthURL')
  ctx.response.status = 202;
  ctx.body = {
    url: res.data.url
  };
  // ctx.body = `/googleOauthURL. MEMBER_SERVER_PATH: ${MEMBER_SERVER_PATH}`;
  global._logger.info('/googleOauthURL')
})

module.exports = router;
