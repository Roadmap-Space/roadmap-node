/// <reference path="../src/interfaces.d.ts" />
import { Model } from "./model";
export declare class AppUsers extends Model {
    events: {
        submitted: string;
        followed: string;
        clapped: string;
        converted: string;
        emailed: string;
    };
    constructor();
    list(roadmapId: string, cb: (err: any, results?: IAppUser[]) => void): void;
    getById(id: string, roadmapId: string, cb: (err: any, result?: IAppUserDetail) => void): void;
    update(id: string, email: string, first: string, last: string, company: string, tags: string[], cb: (err: any, result?: boolean) => void): void;
    remove(id: string, cb: (err: any, result?: boolean) => void): void;
    getTags(cb: (err: any, tags?: string[]) => void): void;
    setTags(tags: string[], cb: (err: any, result?: boolean) => void): void;
    matchSubscribers(subscribers: ISubscriber[], itemId: string, token: string, cb: (err: any, result?: ISubscriber[]) => void): void;
    sendMail(data: IAppUserSendEmail, cb: (err: any, result?: boolean) => void): void;
    findIdByEmail(email: string, roadmapId: string, cb: (err: any, result?: IAppUserFindIdbyEmail) => void): void;
    searchByEmail(query: string, cb: (err: any, results?: ISubscriber[]) => void): void;
}
