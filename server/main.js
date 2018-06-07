const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const multer = require('koa-multer');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const shortid = require('shortid');

var router = Router();

let storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, '../shared/images/uploads/');
	},
	filename: function (req, file, callback) {
		let mimetype = 'jpg';
		if (file.mimetype === 'image/png') {
			mimetype = 'png';
		}
		callback(null, Date.now() + '_' + shortid.generate() + '.' + mimetype);
	}
});

const upload = multer({storage: storage});

app.use(logger());
app.use(bodyParser());
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
	ctx.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	ctx.set("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	await next()
})

require('./routes/router')(router, upload);

app.use(router.routes());
app.use(router.allowedMethods());

const port = 10005;

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`)
})
