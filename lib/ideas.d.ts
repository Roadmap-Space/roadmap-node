/// <reference path="../src/interfaces.d.ts" />
import { Model } from "./model";
export declare class Ideas extends Model {
    listFilters: {
        none: string;
        archived: string;
        completed: string;
        all: string;
    };
    sortOptions: {
        date: number;
        oldest: number;
        popular: number;
        effort: number;
        value: number;
        magic: number;
        widget: number;
        wins: number;
        liked: number;
    };
    constructor();
    add(idea: IItem, cb: (err: any, result?: IItem) => void, limitReached: () => void): void;
    getById(id: string, cb: (err: any, result?: IItem) => void): void;
    list(roadmapId: string, filter: string, cb: (err: any, result?: IItem[]) => void): void;
    toWidget(id: string, roadmapId: string, cb: (err: any, result?: boolean) => void): void;
    toIdea(id: string, roadmapId: string, cb: (err: any, result?: boolean) => void): void;
    save(idea: IItem, cb: (err: any, result?: IItem) => void): void;
    like(id: string, token: string, cb: (err: any, result?: boolean) => void): void;
    archive(id: string, token: string, cb: (err: any, result?: boolean) => void): void;
    unArchive(id: string, token: string, cb: (err: any, result?: boolean) => void): void;
    setAsCompleted(id: string, token: string, completed: boolean, cb: (err: any, result?: boolean) => void): void;
    pushToPM(id: string, token: string, party: string, cb: (err: any, result?: boolean) => void): void;
    convert(idea: IItem, cb: (err: any, ok?: boolean) => void): void;
}
