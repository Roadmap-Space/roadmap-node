import { Model } from './model';

export class Feedback extends Model {
  constructor() {
    super();
  }
  add(feedback: IItem, cb: (err: any, result?: IItem) => void) {
    this.post(
      '/feedback',
      feedback,
      (result: IItem) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  list(
    roadmapId: string,
    archive: boolean,
    cb: (err: any, result?: IItem[]) => void,
  ) {
    this.get(
      '/feedback/list/' + roadmapId + (archive ? '/archive' : ''),
      (result: IItem[]) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  save(feedback: IItem, cb: (err: any, result?: IItem) => void) {
    this.put(
      '/feedback',
      feedback,
      (result: IItem) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  archive(id: string, token: string, cb: (err: any, result?: boolean) => void) {
    this.del(
      '/feedback/' + this.compressId(id, token),
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
  convert(idea: IItem, cb: (err: any, result?: boolean) => void) {
    this.put(
      '/feedback/convert',
      idea,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  attachTo(
    params: IFeedbackAttachToParams,
    cb: (err: any, feedback?: IItem) => void,
  ) {
    this.post(
      '/feedback/attach',
      params,
      (feedback: IItem) => {
        cb(null, feedback);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  unlink(
    parentId: string,
    id: string,
    token: string,
    cb: (err: any, result?: boolean) => void,
  ) {
    this.del(
      '/feedback/' + this.compressId(id, token) + '/unlink/' + parentId,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
}
