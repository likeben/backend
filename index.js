require('dotenv').config();
const Koa = require('koa');
const Boom = require('boom');
const logger = require('koa-logger');
const indexRouter = require('./routes');
require('./db/model/User');

const app = new Koa();

// middleware
app.use(logger());

// error handler for route
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = error.message || '系统繁忙';
  }
});

// set up route
app.use(indexRouter.routes());
app.use(
  indexRouter.allowedMethods({
    throw: true,
    notImplemented: () => new Boom.notImplemented(), // eslint-disable-line
    methodNotAllowed: () => new Boom.methodNotAllowed() // eslint-disable-line
  })
);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is running on port ${port}`); // eslint-disable-line
