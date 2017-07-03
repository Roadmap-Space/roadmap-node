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
var AppUsers = (function (_super) {
    __extends(AppUsers, _super);
    function AppUsers() {
        var _this = _super.call(this) || this;
        _this.events = {
            submitted: "submitted",
            followed: "followed",
            clapped: "clapped",
            converted: "converted",
            emailed: "emailed"
        };
        return _this;
    }
    AppUsers.prototype.list = function (roadmapId, cb) {
        this.get("/appusers/list/" + roadmapId, function (results) {
            cb(null, results);
        }, function (err) {
            cb(err);
        });
    };
    AppUsers.prototype.getById = function (id, roadmapId, cb) {
        this.get("/appusers/detail/" + id + "/" + roadmapId, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    AppUsers.prototype.update = function (id, email, first, last, company, tags, cb) {
        var update = {
            id: id,
            email: email,
            first: first,
            last: last,
            company: company,
            tags: tags
        };
        this.put("/appusers/" + id, update, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    AppUsers.prototype.remove = function (id, cb) {
        this.del("/appusers/" + id, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    AppUsers.prototype.getTags = function (cb) {
        this.get("/appusers/tags", function (tags) {
            cb(null, tags);
        }, function (err) {
            cb(err);
        });
    };
    AppUsers.prototype.setTags = function (tags, cb) {
        this.put("/appusers/tags", tags, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    AppUsers.prototype.matchSubscribers = function (subscribers, itemId, token, cb) {
        if (!subscribers || subscribers.length == 0) {
            cb(null, []);
        }
        this.get("/appusers/matchsubscribers/" + this.compressId(itemId, token), function (users) {
            if (users && users.length > 0) {
                var idx = -1;
                for (var i = 0; i < subscribers.length; i++) {
                    idx = -1;
                    for (var j = 0; j < users.length; j++) {
                        if (subscribers[i].email == users[j].email) {
                            subscribers[i].user = users[j];
                            idx = j;
                            break;
                        }
                    }
                    if (idx > -1) {
                        users.splice(idx, 1);
                    }
                }
            }
            cb(null, subscribers);
        }, function (err) {
            cb(err);
        });
    };
    AppUsers.prototype.sendMail = function (data, cb) {
        this.post("/appusers/message", data, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    AppUsers.prototype.findIdByEmail = function (email, roadmapId, cb) {
        var data = { email: email, forceCreate: true, roadmapId: roadmapId };
        this.post("/appusers/findbyemail", data, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    AppUsers.prototype.searchByEmail = function (query, cb) {
        this.post("/appusers/searchbyemail", { query: query }, function (results) {
            cb(null, results);
        }, function (err) {
            cb(err);
        });
    };
    return AppUsers;
}(model_1.Model));
exports.AppUsers = AppUsers;
//# sourceMappingURL=appusers.js.map