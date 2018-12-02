'use strict';

const users = require('../users.json');

module.exports = async function checkAuth(ctx, next) {
	const { name, password } = ctx.session.user || {};
	const isAuthenticated = users.some(u => u.name === name && u.password === password);

	if (isAuthenticated) {
		return await next();
	} else {
		ctx.redirect('/auth/login');
	}
};