'use strict';

const users = require('../users.json');

const Router = require('koa-router');
const router = new Router();

router.get('/auth/login', async ctx => {
	await ctx.render('auth/login');
});

router.post('/auth/login', async ctx => {
	const { name , password } = ctx.request.body || {};
	const isAuthenticated = users.some(u => u.name === name && u.password === password);

	if (isAuthenticated) {
		ctx.session.user = {
			name,
			password
		};
		ctx.redirect('/');
	} else {
		ctx.redirect('/auth/401');
	}
});

router.get('/auth/401', async ctx => {
	ctx.status = 401;
	await ctx.render('auth/401');
});

module.exports = router;