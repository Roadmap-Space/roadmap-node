import { Model } from "./model";
export declare class Subscribers extends Model {
    constructor();
    add(id: string, token: string, sub: ISubscriber, cb: (err: any, result?: boolean) => void): void;
    like(id: string, token: string, cb: (err: any, result?: boolean) => void): void;
    save(id: string, token: string, sub: ISubscriber, cb: (err: any, result?: boolean) => void): void;
    remove(id: string, token: string, email: string, cb: (err: any, result?: boolean) => void): void;
}
