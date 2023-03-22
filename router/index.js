const Router = require('@koa/router');

const globalRouter = new Router();

const auth = require('./auth')

globalRouter.get('/', ctx => {
  ctx.body = 'get /. api root router'
})
globalRouter.use('/auth', auth.routes());


module.exports = globalRouter;