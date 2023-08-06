import redis from "./index";

const QUEUE_NAME = 'queue: polls';

const addPollToQueue = async(pollId: string) => {
    await redis.lPush(QUEUE_NAME,pollId);
};

export { addPollToQueue };
