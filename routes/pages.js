const Router = require("koa2-router");
const Response = require('utils/response');
const PagesController = require('controllers/pages');

const router = new Router();

router.get("/pages", async ctx => {
    let files = await PagesController.getPages();
    return Response.json(ctx, files);
})

module.exports = router;