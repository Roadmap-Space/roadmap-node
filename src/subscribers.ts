import { Model } from './model';

export class Subscribers extends Model {
  constructor() {
    super();
  }
  add(
    id: string,
    token: string,
    sub: ISubscriber,
    cb: (err: any, result?: boolean) => void,
  ) {
    this.post(
      '/subscribers/' + this.compressId(id, token),
      sub,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  like(id: string, token: string, cb: (err: any, result?: boolean) => void) {
    const tok = btoa(id + '|' + token);
    this.put(
      '/subscribers/' + tok,
      {},
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  save(
    id: string,
    token: string,
    sub: ISubscriber,
    cb: (err: any, result?: boolean) => void,
  ) {
    this.put(
      '/subscribers/save/' + this.compressId(id, token),
      sub,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
  remove(
    id: string,
    token: string,
    email: string,
    cb: (err: any, result?: boolean) => void,
  ) {
    const tok = btoa(id + '|' + token);
    this.del(
      '/subscribers/' + tok + '/' + email,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      },
    );
  }
}
