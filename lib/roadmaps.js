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
var Roadmaps = (function (_super) {
    __extends(Roadmaps, _super);
    function Roadmaps() {
        var _this = _super.call(this) || this;
        _this.timeFrames = {
            quarters: 0,
            sixMonths: 1,
            yearly: 2,
            curentSoonFuture: 3
        };
        _this.customTypes = {
            text: 0,
            int: 1,
            float: 2,
            date: 3
        };
        _this.metaDataTypes = {
            objectives: 0,
            teams: 1,
            tags: 2
        };
        return _this;
    }
    Roadmaps.prototype.create = function (name, cb, limitReached) {
        this.post("/roadmaps", { name: name }, function (result) {
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
    Roadmaps.prototype.addItem = function (data, cb) {
        this.post("/roadmaps/items", data, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.all = function (cb) {
        this.get("/roadmaps", function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.summary = function (cb) {
        this.get("/roadmaps/summary", function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.multiOverview = function (cb) {
        this.get("/roadmaps/multi", function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.getRoadmap = function (roadmapId, cb) {
        this.get("/roadmaps/" + roadmapId, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.getItem = function (roadmapId, id, cb) {
        this.get("/roadmaps/" + roadmapId + "/item/" + id, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.getItems = function (roadmapId, type, cb) {
        this.get("/roadmaps/" + roadmapId + "/items/" + type, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.getCompleted = function (roadmapId, cb) {
        this.get("/roadmaps/" + roadmapId + "/completed", function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.update = function (data, cb) {
        this.put("/roadmaps/" + data.id, data, function (rm) {
            cb(null, rm);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.getGithubRepos = function (id, cb) {
        this.get("/roadmaps/" + id + "/github/repos", function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        }, true);
    };
    Roadmaps.prototype.setTrello = function (data, cb) {
        this.put("/roadmaps/" + data.id + "/trello", data, function (ok) {
            cb(null, ok);
        }, function (err) {
            cb(err);
        }, true);
    };
    Roadmaps.prototype.setGitHubRepo = function (id, data, cb) {
        this.put("/roadmaps/" + id + "/github", data, function (ok) {
            cb(null, ok);
        }, function (err) {
            cb(err);
        }, true);
    };
    Roadmaps.prototype.setPrivacy = function (id, isPrivate, cb) {
        this.put("/roadmaps/" + id + "/privacy", { roadmapId: id, private: isPrivate }, function (ok) {
            cb(null, ok);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.setDomain = function (id, subDomain, domain, cb) {
        this.put("/roadmaps/" + id + "/domain", { subDomain: subDomain, domain: domain }, function (ok) {
            cb(null, ok);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.setOptions = function (data, cb) {
        this.put("/roadmaps/" + data.id + "/options", data, function (ok) {
            cb(null, ok);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.setMeta = function (roadmapId, metaDataType, values, cb) {
        this.put("/roadmaps/" + roadmapId + "/meta", { roadmapId: roadmapId, metaDataType: metaDataType, values: values }, function (results) {
            cb(null, results);
        }, function (err, statusCode) {
            cb(err);
        });
    };
    Roadmaps.prototype.updateItem = function (data, cb) {
        this.put("/roadmaps/" + data.roadmapId + "/items", data, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.deleteItem = function (roadmapId, itemId, cb) {
        this.del("/roadmaps/" + roadmapId + "/items/" + itemId, function () {
            cb(null);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.stats = function (roadmapId, cb) {
        this.get("/roadmaps/" + roadmapId + "/stats", function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.dashboard = function (roadmapId, cb) {
        this.get("/roadmaps/" + roadmapId + "/dashboard", function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.delRoadmap = function (id, cb) {
        this.del("/roadmaps/" + id, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.delItem = function (id, roadmapId, cb) {
        this.del("/roadmaps/" + roadmapId + "/items/" + id, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.updateMockup = function (roadmapId, itemId, mockup, cb) {
        this.put("/roadmaps/" + roadmapId + "/" + itemId + "/mockup", mockup, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Roadmaps.prototype.deleteMockup = function (roadmapId, itemId, mockupId, cb) {
        this.del("/roadmaps/" + roadmapId + "/items/" + itemId + "/mockup/" + mockupId, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    return Roadmaps;
}(model_1.Model));
exports.Roadmaps = Roadmaps;
//# sourceMappingURL=roadmaps.js.map