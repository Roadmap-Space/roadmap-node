import { AppUsers } from './appusers';
import { Feedback } from './feedback';
import { Ideas } from './ideas';
import { Items } from './items';
import { Roadmaps } from './roadmaps';
import { Stories } from './stories';
import { Subscribers } from './subscribers';

let ROADMAP_API_KEY = '';

export class Init {
  Users = new AppUsers();
  Feedback = new Feedback();
  Ideas = new Ideas();
  Items = new Items();
  Roadmaps = new Roadmaps();
  Stories = new Stories();
  Subscribers = new Subscribers();

  constructor(email: string, token: string) {
    ROADMAP_API_KEY = new Buffer(email + '|' + token).toString('base64');
  }
}
