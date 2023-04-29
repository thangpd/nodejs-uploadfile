const Koa = require('koa');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  setTimeout(() => {
    console.log('ok')
    
  }, 10000);
  await next();
  await setTimeout(() => {
    console.log('after ok')
    
  }, 10000);
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// respons
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);