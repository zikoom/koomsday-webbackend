/**
 * koomsday webbackend 서버
 * wwww.koomsday.com/api 로 가는 요청을 이 서버가 처리함
 */


const Koa = require('koa');
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')


const app = new Koa();
const router = new Router();
const cors = require('@koa/cors')

app.use(cors());

const tempData = {
  users: ['김김김', '님님님', '딤딤딤'],
  points: ['10','123123', '551']
};



router.get('/api/users', ctx => {
  ctx.body = {ok: true, users: tempData.users}
})


app.use(bodyParser()).use(router.routes());


app.listen(3000, () => {
  console.log('herum server is listening to port 3000');
})


const v = require('../js/oauth')