import { AppUsers } from "./appusers";
import { Feedback } from "./feedback";
import { Ideas } from "./ideas";
import { Items } from "./items";
import { Roadmaps } from "./roadmaps";
import { Stories } from "./stories";
import { Subscribers } from "./subscribers";
export declare class Init {
    Users: AppUsers;
    Feedback: Feedback;
    Ideas: Ideas;
    Items: Items;
    Roadmaps: Roadmaps;
    Stories: Stories;
    Subscribers: Subscribers;
    constructor(email: string, token: string);
}
