/// <reference path="./interfaces.d.ts" />


import * as request from "superagent";


export class Model {
	private BASE_API: string = "/v1";

	private makeRequest(method: string, path: string, data: any, success: (body: any) => void, error: (err: any, statusCode?: number) => void, isLocal: boolean): void {
		var url = isLocal ? path : this.BASE_API + path;
		var req = request(method, url).set("X-API-KEY", ROADMAP_API_KEY);
		if (data) {
			req.send(data);
		}

		req.end((err: any, res: any) => {
			if (err) {
				if (res && res.statusCode == 404 && method == "GET") {
					success(null);
				} else if (res && res.statusCode == 403) {
					error("permission denied", 403);
				} else if (res && res.body) {
					error(res.body, res.statusCode);
				} else {
					error(err, res.statusCode);
				}
			} else {
				if (path.indexOf(".json") > -1 || path.indexOf(".html") > -1) {
					success(res.text);
				} else {
					success(res.body);
				}
			}
		});
	}

	get(path: string, success: (body: any) => void, error: (err: any, statusCode?: number) => void, isLocal?: boolean): void {
		this.makeRequest("GET", path, null, (body) => {
			success(body);
		}, (err: any, statusCode?: number) => {
			error(err, statusCode);
		}, isLocal == true);
	}

	put(path: string, data: any, success: (body: any) => void, error: (err: any, statusCode?: number) => void, isLocal?: boolean): void {
		this.makeRequest("PUT", path, data, (body) => {
			success(body);
		}, (err: any, statusCode?: number) => {
			error(err, statusCode);
		}, isLocal == true);
	}

	post(path: string, data: any, success: (body: any) => void, error: (err: any, statusCode?: number) => void, isLocal?: boolean): void {
		this.makeRequest("POST", path, data, (body) => {
			success(body);
		}, (err: any, statusCode?: number) => {
			error(err, statusCode);
		}, isLocal == true);
	}

	del(path, success: (body: any) => void, error: (err: any) => void, isLocal?: boolean): void {
		this.makeRequest("DELETE", path, null, (body) => {
			success(body);
		}, (err) => {
			error(err);
		}, isLocal == true);
	}
	compressId(id: string, token: string): string {
		return new Buffer(id + "|" + token).toString('base64');
	}
}