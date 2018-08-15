/// <reference path='./interfaces.d.ts' />

import { Model } from './model';

export class Ideas extends Model {
  listFilters = {
    none: '',
    archived: 'archive',
    completed: 'completed',
    all: 'all',
  };
  sortOptions = {
    date: 0,
    oldest: 1,
    popular: 2,
    effort: 3,
    value: 4,
    magic: 5,
    widget: 6,
    wins: 7,
    liked: 8,
  };
  constructor() {
    super();
  }
  add(
    idea: IItem,
    cb: (err: any, result?: IItem) => void,
    limitReached: () => void,
  ) {
    this.post(
      '/ideas',
      idea,
      (result: IItem) => {
        cb(null, result);
      },
      (err: any, statusCode: number) => {
        if (statusCode === 406) {
          limitReached();
        } else {
          cb(err);
        }
      },
    );
  }
  getById(id: string, cb: (err: any, result?: IItem) => void) {
    if (!id || id.indexOf('|') === -1) {
      cb('invalid parameter');
      return;
    }

    const parts = id.split('|');
    if (parts.length !== 2) {
      cb('invalid format');
      return;
    }
    this.get(
      '/ideas/' + this.compressId(parts[0], parts[1]),
      (result: IItem) => {
        if (result) {
          if (result.category) {
            result.objectives = result.category.split(',');
          } else {
            result.objectives = [];
          }

          if (!result.tags) {
            result.tags = [];
          }
        }

        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  list(
    roadmapId: string,
    filter: string,
    cb: (err: any, result?: IItem[]) => void,
  ) {
    this.get(
      '/ideas/list/' +
        roadmapId +
        (filter === this.listFilters.none ? '' : '/' + filter),
      (result: IItem[]) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  toWidget(
    id: string,
    roadmapId: string,
    cb: (err: any, result?: boolean) => void,
  ) {
    this.post(
      '/ideas/move/widget',
      { id, roadmapId },
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  toIdea(
    id: string,
    roadmapId: string,
    cb: (err: any, result?: boolean) => void,
  ) {
    this.post(
      '/ideas/move/idea',
      { id, roadmapId },
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  save(idea: IItem, cb: (err: any, result?: IItem) => void) {
    this.put(
      '/ideas',
      idea,
      (result: IItem) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  like(id: string, token: string, cb: (err: any, result?: boolean) => void) {
    this.put(
      '/ideas/like/' + this.compressId(id, token),
      null,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  archive(id: string, token: string, cb: (err: any, result?: boolean) => void) {
    this.del(
      '/ideas/' + this.compressId(id, token),
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  unArchive(
    id: string,
    token: string,
    cb: (err: any, result?: boolean) => void,
  ) {
    this.post(
      '/ideas/move/active',
      { id, token },
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  setAsCompleted(
    id: string,
    token: string,
    completed: boolean,
    cb: (err: any, result?: boolean) => void,
  ) {
    this.put(
      '/ideas/setcompleted/' + this.compressId(id, token),
      { completed },
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  pushToPM(
    id: string,
    token: string,
    party: string,
    cb: (err: any, result?: boolean) => void,
  ) {
    const trello = party === 'trello';
    const gh = party === 'github';
    const jira = party === 'jira';

    const data = {
      id,
      token,
      trello,
      gh,
      jira,
    };

    this.post(
      '/ideas/push',
      data,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  convert(idea: IItem, cb: (err: any, ok?: boolean) => void) {
    this.put(
      '/ideas/convert',
      idea,
      (ok: boolean) => {
        cb(null, ok);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
}
