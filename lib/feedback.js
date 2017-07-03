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
var Feedback = (function (_super) {
    __extends(Feedback, _super);
    function Feedback() {
        return _super.call(this) || this;
    }
    Feedback.prototype.add = function (feedback, cb) {
        this.post("/feedback", feedback, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Feedback.prototype.list = function (roadmapId, archive, cb) {
        this.get("/feedback/list/" + roadmapId + (archive ? "/archive" : ""), function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Feedback.prototype.save = function (feedback, cb) {
        this.put("/feedback", feedback, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Feedback.prototype.archive = function (id, token, cb) {
        this.del("/feedback/" + this.compressId(id, token), function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Feedback.prototype.unArchive = function (id, token, cb) {
        this.post("/ideas/move/active", { id: id, token: token }, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Feedback.prototype.convert = function (idea, cb) {
        this.put("/feedback/convert", idea, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Feedback.prototype.attachTo = function (params, cb) {
        this.post("/feedback/attach", params, function (feedback) {
            cb(null, feedback);
        }, function (err) {
            cb(err);
        });
    };
    Feedback.prototype.unlink = function (parentId, id, token, cb) {
        this.del("/feedback/" + this.compressId(id, token) + "/unlink/" + parentId, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    return Feedback;
}(model_1.Model));
exports.Feedback = Feedback;
//# sourceMappingURL=feedback.js.map