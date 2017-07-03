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
var Items = (function (_super) {
    __extends(Items, _super);
    function Items() {
        var _this = _super.call(this) || this;
        _this.itemTypes = {
            idea: 0,
            story: 1,
            done: 2,
            attached: 3
        };
        _this.columnIndexes = {
            current: 2,
            soon: 1,
            future: 0,
            team: 2,
            user: 1,
            widget: 0,
            completed: 99
        };
        return _this;
    }
    Items.prototype.isFeedback = function (i) {
        return (i.type == this.itemTypes.idea && i.column == this.columnIndexes.user)
            || (i.type == this.itemTypes.attached && i.column == this.columnIndexes.user);
    };
    Items.prototype.isIdea = function (i) {
        return (i.type == this.itemTypes.idea && (i.column == this.columnIndexes.widget || i.column == this.columnIndexes.team))
            || (i.type == this.itemTypes.attached && (i.column == this.columnIndexes.widget || i.column == this.columnIndexes.team));
    };
    Items.prototype.isStory = function (i) {
        return i.type == this.itemTypes.story;
    };
    Items.prototype.getNewId = function (cb) {
        this.get("/items/newid", function (id) {
            cb(null, id);
        }, function (err) {
            cb(err);
        }, true);
    };
    Items.prototype.getById = function (id, cb) {
        if (!id || id.indexOf("|") == -1) {
            cb("invalid parameter");
            return;
        }
        var parts = id.split("|");
        if (parts.length != 2) {
            cb("invalid format");
            return;
        }
        this.get("/item/" + this.compressId(parts[0], parts[1]), function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Items.prototype.getByType = function (roadmapId, isStory, cb) {
        this.get("/items/" + roadmapId + "/" + (isStory ? "story" : "idea"), function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Items.prototype.addComment = function (c, cb) {
        this.post("/items/comment", c, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Items.prototype.updateComment = function (roadmapId, itemId, commentId, body, cb) {
        this.put("/items/comment", { roadmapId: roadmapId, itemId: itemId, commentId: commentId, body: body }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Items.prototype.deleteComment = function (id, token, commentId, cb) {
        this.del("/items/" + this.compressId(id, token) + "/comment/" + commentId, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Items.prototype.moveToRoadmap = function (id, token, roadmapId, cb) {
        this.put("/items/" + id + "/roadmap", { itemId: id, token: token, toRoadmapId: roadmapId }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Items.prototype.forceDelete = function (id, token, cb) {
        this.del("/items/force/" + this.compressId(id, token), function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Items.prototype.getEngagements = function (params, cb) {
        this.post("/items/findengagements", params, function (results) {
            cb(null, results);
        }, function (err) {
            cb(err);
        });
    };
    Items.prototype.removePMLinks = function (roadmapId, itemId, token, cb) {
        var data = {
            roadmapId: roadmapId,
            itemId: itemId,
            token: token
        };
        this.post("/items/removepmlinks", data, function (item) {
            cb(null, item);
        }, function (err) {
            cb(err);
        });
    };
    Items.prototype.getParent = function (roadmapId, ideaId, ideaToken, cb) {
        this.get("/items/" + roadmapId + "/fromattached/" + this.compressId(ideaId, ideaToken), function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    return Items;
}(model_1.Model));
exports.Items = Items;
//# sourceMappingURL=items.js.map