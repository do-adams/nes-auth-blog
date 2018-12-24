'use strict';

require('dotenv').config();

const path = require('path');

const Koa = require('koa');
const app = new Koa();

const helmet = require('koa-helmet');

const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const koaStatic = require('koa-static');

const compose = require('koa-compose');

app.keys = [process.env.SESSION_SECRET || 'development debug key'];

const errorHandler = require('./middleware/errorHandler');

app.use(errorHandler);

app.use(helmet());
app.use(views(path.join(__dirname, 'views')));
app.use(bodyParser());
app.use(session({
	key: 'koa:sess',
	maxAge: 1209600000, // two weeks
	signed: true,
	rolling: false,
	renew: false,
}, app));

const authRoutes = require('./routes/auth');
const checkAuth = require('./middleware/checkAuth');

const serve = compose([
	koaStatic('server/assets'),
	authRoutes.routes(),
	checkAuth, 
	koaStatic('public', {
		index: 'index.html'
	})
]);

app.use(serve);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));