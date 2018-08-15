import { Model } from "./model";
export declare class Items extends Model {
    itemTypes: {
        idea: number;
        story: number;
        done: number;
        attached: number;
    };
    columnIndexes: {
        current: number;
        soon: number;
        future: number;
        team: number;
        user: number;
        widget: number;
        completed: number;
    };
    commentTypes: {
        system: 0;
        message: 1;
        like: 2;
        email: 3;
    };
    isFeedback(i: IItem): boolean;
    isIdea(i: IItem): boolean;
    isStory(i: IItem): boolean;
    constructor();
    getNewId(cb: (err: any, id?: string) => void): void;
    getById(id: string, cb: (err: any, result?: IItem) => void): void;
    getByType(roadmapId: string, isStory: boolean, cb: (err: any, result?: IItem[]) => void): void;
    addComment(c: IPostComment, cb: (err: any, result?: IComment) => void): void;
    updateComment(roadmapId: string, itemId: string, commentId: string, body: string, cb: (err: any, result?: boolean) => void): void;
    deleteComment(id: string, token: string, commentId: string, cb: (err: any, result?: boolean) => void): void;
    moveToRoadmap(id: string, token: string, roadmapId: string, cb: (err: any, result?: boolean) => void): void;
    forceDelete(id: string, token: string, cb: (err: any, result?: boolean) => void): void;
    getEngagements(params: IItemEngagementsParams, cb: (err: any, results?: IItemEngagement[]) => void): void;
    removePMLinks(roadmapId: string, itemId: string, token: string, cb: (err: any, item?: IItem) => void): void;
    getParent(roadmapId: string, ideaId: string, ideaToken: string, cb: (err: any, result?: IParentFromAttached) => void): void;
}
