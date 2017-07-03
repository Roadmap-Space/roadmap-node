"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appusers_1 = require("./appusers");
var feedback_1 = require("./feedback");
var ideas_1 = require("./ideas");
var items_1 = require("./items");
var roadmaps_1 = require("./roadmaps");
var stories_1 = require("./stories");
var subscribers_1 = require("./subscribers");
var ROADMAP_API_KEY = "";
var Init = (function () {
    function Init(email, token) {
        this.Users = new appusers_1.AppUsers();
        this.Feedback = new feedback_1.Feedback();
        this.Ideas = new ideas_1.Ideas();
        this.Items = new items_1.Items();
        this.Roadmaps = new roadmaps_1.Roadmaps();
        this.Stories = new stories_1.Stories();
        this.Subscribers = new subscribers_1.Subscribers();
        ROADMAP_API_KEY = new Buffer(email + "|" + token).toString('base64');
    }
    return Init;
}());
exports.Init = Init;
//# sourceMappingURL=roadmap.js.map