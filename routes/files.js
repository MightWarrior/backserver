const Router = require("koa2-router");
const Response = require('utils/response');
const FilesController = require('controllers/files');

const router = new Router();

router.get("/ping", ctx => {
    return Response.text(ctx, "pong");
});

router.get("/files", async ctx => {
    let files = await FilesController.getFiles();
    return Response.json(ctx, files);
})

module.exports = router;