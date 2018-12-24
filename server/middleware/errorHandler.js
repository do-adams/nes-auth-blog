'use strict';

module.exports = async function errorHandler(ctx, next) {
	try {
		await next();
		const status = ctx.status || 404;
		if (status === 404) {
			ctx.throw(404);
		}
	} catch (error) {
		ctx.status = error.status || 500;
		if (ctx.status === 404) {
			await ctx.render('404');
		} else {
			ctx.body = 'There was an error while serving your request.';
			console.error(error);
		}
	}
};
