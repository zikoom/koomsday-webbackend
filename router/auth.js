const Router = require('@koa/router');
const router = new Router();

const readJson = require('../util/jsonReader')

const root = global._ROOT_PATH.toString();
const {MEMBER_SERVER_PATH} = readJson(root + '\\config.json')

const axios = require('axios')


router.get('/googleOauthURL', async (ctx) => {
  const res = await axios.get(MEMBER_SERVER_PATH + '/member/auth/googleOauthURL')
  ctx.response.status = 202;
  ctx.body = {
    url: res.data.url
  };
  global._logger.info('/googleOauthURL')
})

module.exports = router;