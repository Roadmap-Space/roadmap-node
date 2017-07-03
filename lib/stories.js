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
var Stories = (function (_super) {
    __extends(Stories, _super);
    function Stories() {
        return _super.call(this) || this;
    }
    Stories.prototype.add = function (story, cb) {
        this.post("/stories", story, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Stories.prototype.list = function (id, cb) {
        this.get("/stories/" + id, function (results) {
            cb(null, results);
        }, function (err) {
            cb(err);
        });
    };
    Stories.prototype.done = function (id, cb) {
        this.get("/stories/" + id + "/done", function (results) {
            cb(null, results);
        }, function (err) {
            cb(err);
        });
    };
    Stories.prototype.save = function (story, cb) {
        this.put("/stories", story, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Stories.prototype.addIdea = function (id, token, idea, cb) {
        this.post("/stories/" + this.compressId(id, token) + "/ideas", idea, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Stories.prototype.attachIdea = function (data, cb, limitReached) {
        this.post("/stories/ideas", data, function (result) {
            cb(null, result);
        }, function (err, statusCode) {
            if (statusCode == 406) {
                limitReached();
            }
            else {
                cb(err);
            }
        });
    };
    Stories.prototype.exchange = function (roadmapId, ideaId, cb) {
        this.get("/stories/exchange/" + roadmapId + "/" + ideaId, function (result) {
            cb(null, result.token);
        }, function (err) {
            cb(err);
        });
    };
    Stories.prototype.toBacklog = function (roadmapId, storyId, ideaId, ideaToken, cb) {
        this.put("/stories/ideas/tobacklog", { roadmapId: roadmapId, storyId: storyId, ideaId: ideaId, ideaToken: ideaToken }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Stories.prototype.setFeature = function (id, token, mockupId, cb) {
        this.put("/stories/mockups/feature", { storyId: id, token: token, mockupId: mockupId }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Stories.prototype.reOrder = function (roadmapId, items, cb) {
        this.put("/stories/reorder", items, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Stories.prototype.setAsCompleted = function (id, token, completed, cb) {
        this.put("/stories/setcompleted/" + this.compressId(id, token), { completed: completed }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(null, err);
        });
    };
    Stories.prototype.remove = function (id, token, cb) {
        this.del("/stories/" + this.compressId(id, token), function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    return Stories;
}(model_1.Model));
exports.Stories = Stories;
//# sourceMappingURL=stories.js.map