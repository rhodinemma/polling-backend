import { Router } from "express";
import * as poll from "../controllers/poll"

let routes = Router();

routes.post('/poll', poll.createPoll);
//routes.get('/poll/:id', poll.getPollById);

export default routes;