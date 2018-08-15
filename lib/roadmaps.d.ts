import { Model } from "./model";
export declare class Roadmaps extends Model {
    timeFrames: {
        quarters: number;
        sixMonths: number;
        yearly: number;
        curentSoonFuture: number;
    };
    customTypes: {
        text: number;
        int: number;
        float: number;
        date: number;
    };
    metaDataTypes: {
        objectives: number;
        teams: number;
        tags: number;
    };
    constructor();
    create(name: string, cb: (err: any, result?: IRoadmap) => void, limitReached: () => void): void;
    addItem(data: IItem, cb: (err: any, result?: IItem) => void): void;
    all(cb: (err: any, result?: Array<IRoadmap>) => void): void;
    summary(cb: (err: any, result?: Array<IRoadmap>) => void): void;
    multiOverview(cb: (err: any, result?: IMultiOverview) => void): void;
    getRoadmap(roadmapId: string, cb: (err: any, result?: IRoadmap) => void): void;
    getItem(roadmapId: string, id: string, cb: (err: any, result?: IItem) => void): void;
    getItems(roadmapId: string, type: string, cb: (err: any, result?: IItem[]) => void): void;
    getCompleted(roadmapId: string, cb: (err: any, result?: IItem[]) => void): void;
    update(data: IRoadmap, cb: (err: any, rm?: IRoadmap) => void): void;
    getGithubRepos(id: string, cb: (err: any, result?: IKeyValue[]) => void): void;
    setTrello(data: IRoadmap, cb: (err: any, ok?: boolean) => void): void;
    setGitHubRepo(id: string, data: IGitHub, cb: (err: any, ok?: boolean) => void): void;
    setPrivacy(id: string, isPrivate: boolean, cb: (err: any, result?: boolean) => void): void;
    setDomain(id: string, subDomain: string, domain: string, cb: (err: any, result?: boolean) => void): void;
    setOptions(data: IRoadmapOptions, cb: (err: any, ok?: boolean) => void): void;
    setMeta(roadmapId: string, metaDataType: number, values: string[], cb: (err: any, results?: string[]) => void): void;
    updateItem(data: IItem, cb: (err: any, result?: IItem) => void): void;
    deleteItem(roadmapId: string, itemId: string, cb: (err: any) => void): void;
    stats(roadmapId: string, cb: (err: any, result?: IRoadmapStats) => void): void;
    dashboard(roadmapId: string, cb: (err: any, result?: IDashboard) => void): void;
    delRoadmap(id: string, cb: (err: any, result?: boolean) => void): void;
    delItem(id: string, roadmapId: string, cb: (err: any, result?: boolean) => void): void;
    updateMockup(roadmapId: string, itemId: string, mockup: IMockup, cb: (err: any, result?: boolean) => void): void;
    deleteMockup(roadmapId: string, itemId: string, mockupId: string, cb: (err: any, result?: boolean) => void): void;
}
