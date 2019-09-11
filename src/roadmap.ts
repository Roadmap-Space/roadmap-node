/// <reference path="./interfaces.d.ts" />

import { AppUsers } from "./appusers";
import { Feedback } from "./feedback";
import { Ideas } from "./ideas";
import { Items } from "./items";
import { Roadmaps } from "./roadmaps";
import { Stories } from "./stories";
import { Subscribers } from "./subscribers";

export class Init {
  private apiKey: string;

  public Users;
  public Feedback;
  public Ideas;
  public Items;
  public Roadmaps;
  public Stories;
  public Subscribers;

  constructor(email: string, token: string) {
    this.apiKey = `${email}:${token}`;

    this.Users = new AppUsers(this.apiKey);
    this.Feedback = new Feedback(this.apiKey);
    this.Ideas = new Ideas(this.apiKey);
    this.Items = new Items(this.apiKey);
    this.Roadmaps = new Roadmaps(this.apiKey);
    this.Stories = new Stories(this.apiKey);
    this.Subscribers = new Subscribers(this.apiKey);
  }
}
