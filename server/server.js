require('dotenv').config();

'use strict';

const path = require('path');

const Koa = require('koa');
const app = new Koa();

const compose = require('koa-compose');

const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const koaStatic = require('koa-static');

app.keys = [process.env.SESSION_SECRET || 'development debug key'];

app.use(views(path.join(__dirname, 'views')));
app.use(bodyParser());
app.use(session({
	key: 'koa:sess',
	maxAge: 1209600000, // two weeks
	signed: true,
	rolling: false,
	renew: false,
}, app));

const handle404 = require('./middleware/handle404');
app.use(handle404);

const authRoutes = require('./routes/auth');
app.use(authRoutes.routes());

const checkAuth = require('./middleware/checkAuth');
const serve = compose([
	koaStatic('server/assets'),
	checkAuth, 
	koaStatic('public', {
		index: 'index.html'
	})
]);
app.use(serve);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));