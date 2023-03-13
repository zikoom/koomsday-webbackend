const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000, () => {
  console.log('herum server is listening to port 3000');
})