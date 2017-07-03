"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var Notifications = (function (_super) {
    __extends(Notifications, _super);
    function Notifications() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = {
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
        return _this;
    }
    Notifications.prototype.getFeed = function (roadmapId, cb) {
        if (!roadmapId) {
            cb(new Error("no active roadmap"));
            return;
        }
        this.get("/notifications/" + roadmapId, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Notifications.prototype.newCount = function (roadmapId, cb) {
        if (!roadmapId) {
            cb(new Error("no active roadmap"));
            return;
        }
        this.get("/notifications/" + roadmapId + "/newcount", function (count) {
            cb(null, count);
        }, function (err) {
            cb(err);
        });
    };
    Notifications.prototype.flagAsSeen = function (roadmapId, cb) {
        this.put("/notifications/" + roadmapId + "/seen", null, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    return Notifications;
}(model_1.Model));
exports.Notifications = Notifications;
//# sourceMappingURL=notifications.js.map