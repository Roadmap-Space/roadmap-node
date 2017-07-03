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
var Ideas = (function (_super) {
    __extends(Ideas, _super);
    function Ideas() {
        var _this = _super.call(this) || this;
        _this.listFilters = {
            none: "",
            archived: "archive",
            completed: "completed",
            all: "all"
        };
        _this.sortOptions = {
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
        return _this;
    }
    Ideas.prototype.add = function (idea, cb, limitReached) {
        this.post("/ideas", idea, function (result) {
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
    Ideas.prototype.getById = function (id, cb) {
        if (!id || id.indexOf("|") == -1) {
            cb("invalid parameter");
            return;
        }
        var parts = id.split("|");
        if (parts.length != 2) {
            cb("invalid format");
            return;
        }
        this.get("/ideas/" + this.compressId(parts[0], parts[1]), function (result) {
            if (result) {
                if (result.category) {
                    result.objectives = result.category.split(",");
                }
                else {
                    result.objectives = [];
                }
                if (!result.tags) {
                    result.tags = [];
                }
            }
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.list = function (roadmapId, filter, cb) {
        this.get("/ideas/list/" + roadmapId + (filter == this.listFilters.none ? "" : "/" + filter), function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.toWidget = function (id, roadmapId, cb) {
        this.post("/ideas/move/widget", { id: id, roadmapId: roadmapId }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.toIdea = function (id, roadmapId, cb) {
        this.post("/ideas/move/idea", { id: id, roadmapId: roadmapId }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.save = function (idea, cb) {
        this.put("/ideas", idea, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.like = function (id, token, cb) {
        this.put("/ideas/like/" + this.compressId(id, token), null, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.archive = function (id, token, cb) {
        this.del("/ideas/" + this.compressId(id, token), function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.unArchive = function (id, token, cb) {
        this.post("/ideas/move/active", { id: id, token: token }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.setAsCompleted = function (id, token, completed, cb) {
        this.put("/ideas/setcompleted/" + this.compressId(id, token), { completed: completed }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.pushToPM = function (id, token, party, cb) {
        var trello = party == "trello";
        var gh = party == "github";
        var jira = party == "jira";
        var data = {
            id: id,
            token: token,
            trello: trello,
            gh: gh,
            jira: jira
        };
        this.post("/ideas/push", data, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Ideas.prototype.convert = function (idea, cb) {
        this.put("/ideas/convert", idea, function (ok) {
            cb(null, ok);
        }, function (err) {
            cb(err);
        });
    };
    return Ideas;
}(model_1.Model));
exports.Ideas = Ideas;
//# sourceMappingURL=ideas.js.map