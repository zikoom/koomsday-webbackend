const Router = require('@koa/router');
const router = new Router();

const readJson = require('../util/jsonReader')

const root = global._ROOT_PATH.toString();
const {MEMBER_SERVER_PATH} = readJson(root + '\\config.json')

console.log('MEMBER_SERVER_PATH: ', MEMBER_SERVER_PATH);


const getOauthURL = async () => {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle('https://www.naver.com');
    }, 1000);
  })
}

router.get('/googleOauthURL', async (ctx) => {
  const URL = await getOauthURL();
  ctx.response.redirect(URL);
})

module.exports = router;