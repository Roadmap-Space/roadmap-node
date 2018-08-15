import { Model } from "./model";
export declare class Feedback extends Model {
    constructor();
    add(feedback: IItem, cb: (err: any, result?: IItem) => void): void;
    list(roadmapId: string, archive: boolean, cb: (err: any, result?: IItem[]) => void): void;
    save(feedback: IItem, cb: (err: any, result?: IItem) => void): void;
    archive(id: string, token: string, cb: (err: any, result?: boolean) => void): void;
    unArchive(id: string, token: string, cb: (err: any, result?: boolean) => void): void;
    convert(idea: IItem, cb: (err: any, result?: boolean) => void): void;
    attachTo(params: IFeedbackAttachToParams, cb: (err: any, feedback?: IItem) => void): void;
    unlink(parentId: string, id: string, token: string, cb: (err: any, result?: boolean) => void): void;
}
