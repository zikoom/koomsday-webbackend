/**
 * koomsday webbackend 서버
 * wwww.koomsday.com/api 로 가는 요청을 이 서버가 처리함
 */


// 전역 유틸 //
global._ROOT_PATH = require('app-root-path')
global._logger = require('../config/winston')


//

const rootPath = '/api'

const Koa = require('koa');
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')


const app = new Koa();
const router = new Router();
const cors = require('@koa/cors')

const option = {
  origin: '*'
}

app.use(cors(option));


const globalRouter = require('../router/index');

router.use(rootPath, globalRouter.routes());
app.use(cors());

app.use(bodyParser()).use(router.routes());

app.listen(3000, () => {
  console.log('herum server is listening to port 3000');
})
