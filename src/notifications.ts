/// <reference path="./interfaces.d.ts" />

import { Model } from "./model";

export class Notifications extends Model {
  events = {
    ideaLiked: "idea_liked",
    ideaToStory: "idea_to_story",
    itemArchived: "my_item_archived",
    newFeedback: "new_feedback",
    storyClap: "story_clap",
    newComment: "new_comment",
    newStory: "new_story",
    newSubscriber: "new_follower",
    milestoneStateChanged: "milestone_state_changed",
    storyCompleted: "story_completed",
    commentMention: "mention",
    storyStatusChanged: "story_status_changed",
    ideaCompleted: "idea_completed"
  };

  constructor(apiKey: string) {
    super(apiKey);
  }

  getFeed(
    roadmapId: string,
    cb: (err: any, results?: Array<INotification>) => void
  ) {
    if (!roadmapId) {
      cb(new Error("no active roadmap"));
      return;
    }

    this.get(
      "/notifications/" + roadmapId,
      (result: Array<INotification>) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  newCount(roadmapId: string, cb: (err: any, count?: number) => void) {
    if (!roadmapId) {
      cb(new Error("no active roadmap"));
      return;
    }

    this.get(
      "/notifications/" + roadmapId + "/newcount",
      (count: number) => {
        cb(null, count);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
  flagAsSeen(roadmapId: string, cb: (err: any, result?: boolean) => void) {
    this.put(
      "/notifications/" + roadmapId + "/seen",
      null,
      (result: boolean) => {
        cb(null, result);
      },
      (err: any) => {
        cb(err);
      }
    );
  }
}
