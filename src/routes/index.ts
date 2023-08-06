import { Router } from "express";
import * as poll from "../controllers/poll";
import * as pollBox from '../controllers/pollBox';

let routes = Router();

routes.post('/poll', poll.createPoll);
routes.get('/poll/:id', poll.getPollById);
// pollBox routes
routes.patch('/poll-box/:id', pollBox.updatePollBox);

export default routes;