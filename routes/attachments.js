const Router = require("koa2-router");
const Response = require('utils/response');
const { voteForAttachment, getAttachments } = require("../controllers/attachments");

const router = new Router();

router.get("/attachments", async ctx => {
    let files = await getAttachments();
    return Response.json(ctx, files);
});

router.post('/vote/:id', async ctx => {
    let updatedAttachment = await voteForAttachment(ctx.params.id);
    return Response.json(ctx, updatedAttachment);
})

module.exports = router;