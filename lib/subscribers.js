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
var Subscribers = (function (_super) {
    __extends(Subscribers, _super);
    function Subscribers() {
        return _super.call(this) || this;
    }
    Subscribers.prototype.add = function (id, token, sub, cb) {
        this.post("/subscribers/" + this.compressId(id, token), sub, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Subscribers.prototype.like = function (id, token, cb) {
        var tok = btoa(id + "|" + token);
        this.put("/subscribers/" + tok, {}, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Subscribers.prototype.save = function (id, token, sub, cb) {
        this.put("/subscribers/save/" + this.compressId(id, token), sub, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    Subscribers.prototype.remove = function (id, token, email, cb) {
        var tok = btoa(id + "|" + token);
        this.del("/subscribers/" + tok + "/" + email, function (result) {
            cb(null, result);
        }, function (err) {
            cb(err);
        });
    };
    return Subscribers;
}(model_1.Model));
exports.Subscribers = Subscribers;
//# sourceMappingURL=subscribers.js.map