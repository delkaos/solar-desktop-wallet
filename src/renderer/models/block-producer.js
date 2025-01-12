import BaseModel from "./base";
import { toString, get } from "lodash";

export default new BaseModel({
    type: "object",
    properties: {
        address: {
            type: "string"
        },
        username: {
            type: "string"
        },
        publicKey: {
            type: "string"
        },
        votes: {
            type: "string",
            format: data => toString(data.votes || 0)
        },
        blocks: {
            type: "object",
            properties: {
                produced: {
                    type: "integer"
                }
            }
        },
        isResigned: {
            type: "boolean",
            default: false
        },
        production: {
            type: "object",
            properties: {
                approval: {
                    type: "number"
                }
            }
        },
        produced: {
            type: "object",
            format: (data) => ({
                fees: toString(get(data, "produced.fees", 0)),
                rewards: toString(get(data, "produced.rewards", 0)),
                total: toString(get(data, "produced.total", 0))
            })
        },
        rank: {
            type: "integer"
        }
    }
});
