const Router = require('koa-router');

const router = new Router();
router.get('/', async ctx => {
  ctx.body = 'OK';
});

const apiRouter = new Router({ prefix: '/api' });

router.use(apiRouter.routes(), apiRouter.allowedMethods());

module.exports = router;
