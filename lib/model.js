"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("superagent");
var Model = (function () {
    function Model() {
        this.BASE_API = "/v1";
    }
    Model.prototype.makeRequest = function (method, path, data, success, error, isLocal) {
        var url = isLocal ? path : this.BASE_API + path;
        var req = request(method, url).set("X-API-KEY", ROADMAP_API_KEY);
        if (data) {
            req.send(data);
        }
        req.end(function (err, res) {
            if (err) {
                if (res && res.statusCode == 404 && method == "GET") {
                    success(null);
                }
                else if (res && res.statusCode == 403) {
                    error("permission denied", 403);
                }
                else if (res && res.body) {
                    error(res.body, res.statusCode);
                }
                else {
                    error(err, res.statusCode);
                }
            }
            else {
                if (path.indexOf(".json") > -1 || path.indexOf(".html") > -1) {
                    success(res.text);
                }
                else {
                    success(res.body);
                }
            }
        });
    };
    Model.prototype.get = function (path, success, error, isLocal) {
        this.makeRequest("GET", path, null, function (body) {
            success(body);
        }, function (err, statusCode) {
            error(err, statusCode);
        }, isLocal == true);
    };
    Model.prototype.put = function (path, data, success, error, isLocal) {
        this.makeRequest("PUT", path, data, function (body) {
            success(body);
        }, function (err, statusCode) {
            error(err, statusCode);
        }, isLocal == true);
    };
    Model.prototype.post = function (path, data, success, error, isLocal) {
        this.makeRequest("POST", path, data, function (body) {
            success(body);
        }, function (err, statusCode) {
            error(err, statusCode);
        }, isLocal == true);
    };
    Model.prototype.del = function (path, success, error, isLocal) {
        this.makeRequest("DELETE", path, null, function (body) {
            success(body);
        }, function (err) {
            error(err);
        }, isLocal == true);
    };
    Model.prototype.compressId = function (id, token) {
        return new Buffer(id + "|" + token).toString('base64');
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map