/// <reference path='./interfaces.d.ts' />

import { Model } from './model';

export class AppUsers extends Model {
  events = {
    submitted: 'submitted',
    followed: 'followed',
    clapped: 'clapped',
    converted: 'converted',
    emailed: 'emailed',
  };
  constructor() {
    super();
  }
  list(roadmapId: string, cb: (err: any, results?: IAppUser[]) => void) {
    this.get(
      '/appusers/list/' + roadmapId,
      (results: IAppUser[]) => {
        cb(null, results);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  getById(
    id: string,
    roadmapId: string,
    cb: (err: any, result?: IAppUserDetail) => void,
  ) {
    this.get(
      '/appusers/detail/' + id + '/' + roadmapId,
      (result: IAppUserDetail) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  update(
    id: string,
    email: string,
    first: string,
    last: string,
    company: string,
    tags: string[],
    cb: (err: any, result?: boolean) => void,
  ) {
    const update = {
      id,
      email,
      first,
      last,
      company,
      tags,
    };
    this.put(
      '/appusers/' + id,
      update,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  remove(id: string, cb: (err: any, result?: boolean) => void) {
    this.del(
      '/appusers/' + id,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  getTags(cb: (err: any, tags?: string[]) => void) {
    this.get(
      '/appusers/tags',
      (tags: string[]) => {
        cb(null, tags);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  setTags(tags: string[], cb: (err: any, result?: boolean) => void) {
    this.put(
      '/appusers/tags',
      tags,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  matchSubscribers(
    subscribers: ISubscriber[],
    itemId: string,
    token: string,
    cb: (err: any, result?: ISubscriber[]) => void,
  ) {
    if (!subscribers || subscribers.length === 0) {
      cb(null, []);
    }

    this.get(
      '/appusers/matchsubscribers/' + this.compressId(itemId, token),
      (users: IAppUser[]) => {
        if (users && users.length > 0) {
          // extending subscriber with app user data
          let idx = -1;
          for (let i = 0; i < subscribers.length; i += 1) {
            idx = -1;
            for (let j = 0; j < users.length; j += 1) {
              if (subscribers[i].email === users[j].email) {
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
      },
    );
  }
  sendMail(data: IAppUserSendEmail, cb: (err: any, result?: boolean) => void) {
    this.post(
      '/appusers/message',
      data,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  findIdByEmail(
    email: string,
    roadmapId: string,
    cb: (err: any, result?: IAppUserFindIdbyEmail) => void,
  ) {
    const data = { email, roadmapId, forceCreate: true };
    this.post(
      '/appusers/findbyemail',
      data,
      (result: IAppUserFindIdbyEmail) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  searchByEmail(
    query: string,
    cb: (err: any, results?: ISubscriber[]) => void,
  ) {
    this.post(
      '/appusers/searchbyemail',
      { query },
      (results: ISubscriber[]) => {
        cb(null, results);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
}
