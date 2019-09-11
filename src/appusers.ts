/// <reference path="./interfaces.d.ts" />

import { Model } from "./model";

export class AppUsers extends Model {
  events = {
    submitted: "submitted",
    followed: "followed",
    clapped: "clapped",
    converted: "converted",
    emailed: "emailed"
  };
  constructor(apiKey: string) {
    super(apiKey);
  }
  list(roadmapId: string, cb: (err: any, results?: Array<IAppUser>) => void) {
    this.get(
      "/appusers/list/" + roadmapId,
      (results: Array<IAppUser>) => {
        cb(null, results);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  getById(
    id: string,
    roadmapId: string,
    cb: (err: any, result?: IAppUserDetail) => void
  ) {
    this.get(
      "/appusers/detail/" + id + "/" + roadmapId,
      (result: IAppUserDetail) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  update(
    id: string,
    email: string,
    first: string,
    last: string,
    company: string,
    tags: Array<string>,
    cb: (err: any, result?: boolean) => void
  ) {
    var update = {
      id: id,
      email: email,
      first: first,
      last: last,
      company: company,
      tags: tags
    };
    this.put(
      "/appusers/" + id,
      update,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  remove(id: string, cb: (err: any, result?: boolean) => void) {
    this.del(
      "/appusers/" + id,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  getTags(cb: (err: any, tags?: Array<string>) => void) {
    this.get(
      "/appusers/tags",
      (tags: Array<string>) => {
        cb(null, tags);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  setTags(tags: Array<string>, cb: (err: any, result?: boolean) => void) {
    this.put(
      "/appusers/tags",
      tags,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  matchSubscribers(
    subscribers: Array<ISubscriber>,
    itemId: string,
    token: string,
    cb: (err: any, result?: Array<ISubscriber>) => void
  ) {
    if (!subscribers || subscribers.length == 0) {
      cb(null, []);
    }

    this.get(
      "/appusers/matchsubscribers/" + this.compressId(itemId, token),
      (users: Array<IAppUser>) => {
        if (users && users.length > 0) {
          // extending subscriber with app user data
          let idx = -1;
          for (var i = 0; i < subscribers.length; i++) {
            idx = -1;
            for (var j = 0; j < users.length; j++) {
              if (subscribers[i].email == users[j].email) {
                subscribers[i].user = users[j];
                idx = j;
                break;
              }
            }

            // to shrink the users array each subscriber exec
            // we remove the user from the array
            if (idx > -1) {
              users.splice(idx, 1);
            }
          }
        }
        cb(null, subscribers);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  sendMail(data: IAppUserSendEmail, cb: (err: any, result?: boolean) => void) {
    this.post(
      "/appusers/message",
      data,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  findIdByEmail(
    email: string,
    roadmapId: string,
    cb: (err: any, result?: IAppUserFindIdbyEmail) => void
  ) {
    var data = { email: email, forceCreate: true, roadmapId: roadmapId };
    this.post(
      "/appusers/findbyemail",
      data,
      (result: IAppUserFindIdbyEmail) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  searchByEmail(
    query: string,
    cb: (err: any, results?: Array<ISubscriber>) => void
  ) {
    this.post(
      "/appusers/searchbyemail",
      { query: query },
      (results: Array<ISubscriber>) => {
        cb(null, results);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
}
