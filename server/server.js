'use strict';

const path = require('path');

const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const app = new Koa();

const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');

app.use(koaStatic('public'));

app.use(views(path.join(__dirname, 'views')));

app.use(async (ctx, next) => {
	try {
		await next();
		const status = ctx.status || 404;
		if (status === 404) {
			ctx.throw(404);
		}
	} catch (err) {
		await ctx.render('404');
	}
});

const router = new Router();

router.get('/', async ctx => {
	ctx.redirect('/index.html');
});

app.use(router.routes());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));