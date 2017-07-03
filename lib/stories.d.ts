/// <reference path="../src/interfaces.d.ts" />
import { Model } from "./model";
export declare class Stories extends Model {
    constructor();
    add(story: IItem, cb: (err: any, result?: IItem) => void): void;
    list(id: string, cb: (err: any, results?: Array<IItem>) => void): void;
    done(id: string, cb: (err: any, results?: Array<IItem>) => void): void;
    save(story: IItem, cb: (err: any, result?: IItem) => void): void;
    addIdea(id: string, token: string, idea: IItem, cb: (err: any, result?: IItem) => void): void;
    attachIdea(data: IAttachTo, cb: (err: any, result?: IItem) => void, limitReached: () => void): void;
    exchange(roadmapId: string, ideaId: string, cb: (err: any, result?: string) => void): void;
    toBacklog(roadmapId: string, storyId: string, ideaId: string, ideaToken: string, cb: (err: any, result?: boolean) => void): void;
    setFeature(id: string, token: string, mockupId: string, cb: (err: any, result?: boolean) => void): void;
    reOrder(roadmapId: string, items: Array<IItem>, cb: (err: any, result?: number) => void): void;
    setAsCompleted(id: string, token: string, completed: boolean, cb: (err: any, result?: boolean) => void): void;
    remove(id: string, token: string, cb: (err: any, result?: boolean) => void): void;
}
