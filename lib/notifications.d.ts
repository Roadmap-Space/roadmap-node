/// <reference path="../src/interfaces.d.ts" />
import { Model } from "./model";
export declare class Notifications extends Model {
    events: {
        ideaLiked: string;
        ideaToStory: string;
        itemArchived: string;
        newFeedback: string;
        storyClap: string;
        newComment: string;
        newStory: string;
        newSubscriber: string;
        milestoneStateChanged: string;
        storyCompleted: string;
        commentMention: string;
        storyStatusChanged: string;
        ideaCompleted: string;
    };
    getFeed(roadmapId: string, cb: (err: any, results?: Array<INotification>) => void): void;
    newCount(roadmapId: string, cb: (err: any, count?: number) => void): void;
    flagAsSeen(roadmapId: string, cb: (err: any, result?: boolean) => void): void;
}
