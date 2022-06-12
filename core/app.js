const Koa = require("koa");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");

const config = require('config');
const filesRoutes = require("routes/files");
const attachmentsRoutes = require("routes/attachments");
const pagesRouter = require('routes/pages');
const pollsRouter = require('routes/polls');

const app = new Koa();


app.init = async () => {
  app.use(cors({
      credentials: true
  }));

  app.use(bodyParser());

  // routes
  app.use(filesRoutes);
  app.use(attachmentsRoutes);
  app.use(pagesRouter);
  app.use(pollsRouter);
};

module.exports = app;