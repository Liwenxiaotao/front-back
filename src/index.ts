import koa = require('koa');

let app = new koa();

app.use(async ctx => {
  ctx.body = "hello00000";
})

app.listen(8080);
