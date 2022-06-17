const Router = require("koa2-router");
const Response = require('utils/response');
const PollsController = require('controllers/polls');

const router = new Router();

router.get("/polls", async ctx => {
    let polls = await PollsController.getPolls();
    return Response.json(ctx, polls);
})

router.get("/polls/:id", async ctx => {
    let poll = await PollsController.getPollById(ctx.params.id);
    return Response.json(ctx, poll);
})

router.post("/polls", async ctx => {
    let newPoll = await PollsController.createPoll(ctx.request.body);
    return Response.json(ctx, newPoll);
})

router.post("/polls/active/:id", async ctx => {
    let {id} = ctx.params;
    let {isActive} = ctx.request.body;
    let updatedPoll = await PollsController.setActive(id, isActive);
    return Response.json(ctx, updatedPoll);
})

router.post("/polls/update", async ctx => {
    let newPoll = await PollsController.updatePoll(ctx.request.body);
    return Response.json(ctx, newPoll);
})

module.exports = router;