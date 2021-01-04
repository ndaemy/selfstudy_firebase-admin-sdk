import Koa from 'koa';

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello world!';
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
