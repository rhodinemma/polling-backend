import { NextFunction, Request, Response } from "express";
import { isEmpty } from "lodash";
import AppRes from "../types/AppRes";
import * as pollService from "../services/poll"


export const createPoll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, options } = req.body;

        if (isEmpty(name) || isEmpty(options)) {
            const errRes: AppRes = {
                data: {},
                isError: true,
                errMsg: 'Name and Options are required'
            };
            res.status(400).send(errRes);
            return;
        }

        const newPollId = await pollService.create(name, options);
        const poll = await pollService.get(newPollId)
        const response: AppRes = { data: { poll }, isError: false }
        res.send(response);
    } catch (error) {
        next(error)
    }
}