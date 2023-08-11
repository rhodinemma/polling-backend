import { NextFunction, Request, Response } from "express";
import { isEmpty } from "lodash";
import AppRes from "../types/AppRes";
import * as PollBox from "../models/pollBox";

export const updatePollBox = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { option } = req.body;
        const pollId = req.params.id;
        if (isEmpty(option) || !pollId) {
            const errRes: AppRes = {
                data: {},
                isError: true,
                errMsg: 'Please add the option and pollId, they are required',
            };
            res.status(400).send(errRes);
            return;
        }
        const pollBox = await PollBox.update(pollId, option, 1);
        const response: AppRes = {
            data: { pollBox },
            isError: false,
        };
        res.send(response);
    } catch (error) {
        next(error);
    }
};