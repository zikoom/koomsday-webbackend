const Router = require('@koa/router');
const router = new Router({
  prefix: '/auth'
})



router.get('/googleOauthURL', ctx => {
  ctx.body = '/googleOauthURL';
})

module.exports = router;