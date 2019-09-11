/// <reference path="./interfaces.d.ts" />

import { Model } from "./model";

export class Stories extends Model {
  constructor(apiKey: string) {
    super(apiKey);
  }
  add(story: IItem, cb: (err: any, result?: IItem) => void) {
    this.post(
      "/stories",
      story,
      (result: IItem) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  list(id: string, cb: (err: any, results?: Array<IItem>) => void) {
    this.get(
      "/stories/" + id,
      (results: Array<IItem>) => {
        cb(null, results);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  done(id: string, cb: (err: any, results?: Array<IItem>) => void) {
    this.get(
      "/stories/" + id + "/done",
      (results: Array<IItem>) => {
        cb(null, results);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  save(story: IItem, cb: (err: any, result?: IItem) => void) {
    this.put(
      "/stories",
      story,
      (result: IItem) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  addIdea(
    id: string,
    token: string,
    idea: IItem,
    cb: (err: any, result?: IItem) => void
  ) {
    this.post(
      "/stories/" + this.compressId(id, token) + "/ideas",
      idea,
      (result: IItem) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  attachIdea(
    data: IAttachTo,
    cb: (err: any, result?: IItem) => void,
    limitReached: () => void
  ) {
    this.post(
      "/stories/ideas",
      data,
      (result: IItem) => {
        cb(null, result);
      },
      (err: any, statusCode?: number) => {
        if (statusCode == 406) {
          limitReached();
        } else {
          cb(err);
        }
      }
    );
  }

  exchange(
    roadmapId: string,
    ideaId: string,
    cb: (err: any, result?: string) => void
  ) {
    this.get(
      "/stories/exchange/" + roadmapId + "/" + ideaId,
      (result?: any) => {
        cb(null, result.token);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  toBacklog(
    roadmapId: string,
    storyId: string,
    ideaId: string,
    ideaToken: string,
    cb: (err: any, result?: boolean) => void
  ) {
    this.put(
      "/stories/ideas/tobacklog",
      {
        roadmapId: roadmapId,
        storyId: storyId,
        ideaId: ideaId,
        ideaToken: ideaToken
      },
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  setFeature(
    id: string,
    token: string,
    mockupId: string,
    cb: (err: any, result?: boolean) => void
  ) {
    this.put(
      "/stories/mockups/feature",
      { storyId: id, token: token, mockupId: mockupId },
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  reOrder(
    roadmapId: string,
    items: Array<IItem>,
    cb: (err: any, result?: number) => void
  ) {
    this.put(
      "/stories/reorder",
      items,
      (result: number) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  setAsCompleted(
    id: string,
    token: string,
    completed: boolean,
    cb: (err: any, result?: boolean) => void
  ) {
    this.put(
      "/stories/setcompleted/" + this.compressId(id, token),
      { completed: completed },
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(null, err);
      }
    );
  }
  remove(id: string, token: string, cb: (err: any, result?: boolean) => void) {
    this.del(
      "/stories/" + this.compressId(id, token),
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
}
