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




router.post('/userinfo', async (ctx) => {
  global._logger.info('post /userinfo');

  const {authCode} = ctx.request.body;
  if (!authCode) throw new Error('unvalid authCode')
  try {
    const res = await axios.post(MEMBER_SERVER_PATH + '/member/auth/userinfo', {
      authCode: authCode
    })
    ctx.body = res.data
  } catch (error) {
    ctx.response.status = 403;
  }

})

module.exports = router;
