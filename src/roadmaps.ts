import { Model } from "./model"

export class Roadmaps extends Model {

	timeFrames = {
		quarters: 0,
		sixMonths: 1,
		yearly: 2,
		curentSoonFuture: 3
	}
	customTypes = {
		text: 0,
		int: 1,
		float: 2,
		date: 3
	}
	metaDataTypes = {
		objectives: 0,
		teams: 1,
		tags: 2
	}
	constructor() {
		super();
	}
	create(name: string, cb: (err: any, result?: IRoadmap) => void, limitReached: () => void) {
		this.post("/roadmaps", { name: name }, (result: IRoadmap) => {
			cb(null, result);
		}, (err: any, statusCode?: number) => {
			if (statusCode == 406) {
				limitReached();
			} else {
				cb(err);
			}
		});
	}
	addItem(data: IItem, cb: (err: any, result?: IItem) => void) {
		this.post("/roadmaps/items", data, (result: IItem) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	all(cb: (err: any, result?: Array<IRoadmap>) => void) {
		this.get("/roadmaps", (result: Array<IRoadmap>) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	summary(cb: (err: any, result?: Array<IRoadmap>) => void) {
		this.get("/roadmaps/summary", (result: Array<IRoadmap>) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	multiOverview(cb: (err: any, result?: IMultiOverview) => void) {
		this.get("/roadmaps/multi", (result: IMultiOverview) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	getRoadmap(roadmapId: string, cb: (err: any, result?: IRoadmap) => void) {
		this.get("/roadmaps/" + roadmapId, (result: IRoadmap) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	getItem(roadmapId: string, id: string, cb: (err: any, result?: IItem) => void) {
		this.get("/roadmaps/" + roadmapId + "/item/" + id, (result: IItem) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	getItems(roadmapId: string, type: string, cb: (err: any, result?: Array<IItem>) => void) {
		this.get("/roadmaps/" + roadmapId + "/items/" + type, (result: Array<IItem>) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	getCompleted(roadmapId: string, cb: (err: any, result?: Array<IItem>) => void) {
		this.get("/roadmaps/" + roadmapId + "/completed", (result: Array<IItem>) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	update(data: IRoadmap, cb: (err: any, rm?: IRoadmap) => void) {
		this.put("/roadmaps/" + data.id, data, (rm: IRoadmap) => {
			cb(null, rm);
		}, (err: any) => {
			cb(err);
		});
	}
	getGithubRepos(id: string, cb: (err: any, result?: Array<IKeyValue>) => void) {
		this.get("/roadmaps/" + id + "/github/repos", (result: Array<IKeyValue>) => {
			cb(null, result);
		}, (err) => {
			cb(err);
		}, true);
	}
	setTrello(data: IRoadmap, cb: (err: any, ok?: boolean) => void) {
		this.put("/roadmaps/" + data.id + "/trello", data, (ok: boolean) => {
			cb(null, ok);
		}, (err: any) => {
			cb(err);
		}, true);
	}
	setGitHubRepo(id: string, data: IGitHub, cb: (err: any, ok?: boolean) => void) {
		this.put("/roadmaps/" + id + "/github", data, (ok: boolean) => {
			cb(null, ok);
		}, (err: any) => {
			cb(err);
		}, true);
	}
	setPrivacy(id: string, isPrivate: boolean, cb: (err: any, result?: boolean) => void) {
		this.put("/roadmaps/" + id + "/privacy", { roadmapId: id, private: isPrivate }, (ok: boolean) => {
			cb(null, ok);
		}, (err: any) => {
			cb(err);
		});
	}
	setDomain(id: string, subDomain: string, domain: string, cb: (err: any, result?: boolean) => void) {
		this.put("/roadmaps/" + id + "/domain", { subDomain: subDomain, domain: domain }, (ok: boolean) => {
			cb(null, ok);
		}, (err: any) => {
			cb(err);
		});
	}
	setOptions(data: IRoadmapOptions, cb: (err: any, ok?: boolean) => void) {
		this.put("/roadmaps/" + data.id + "/options", data, (ok: boolean) => {
			cb(null, ok);
		}, (err: any) => {
			cb(err);
		});
	}
	setMeta(roadmapId: string, metaDataType: number, values: Array<string>, cb: (err: any, results?: Array<string>) => void) {
		this.put("/roadmaps/" + roadmapId + "/meta", { roadmapId: roadmapId, metaDataType: metaDataType, values: values }, (results: Array<string>) => {
			cb(null, results);
		}, (err: any, statusCode?: number) => {
			cb(err);
		});
	}
	updateItem(data: IItem, cb: (err: any, result?: IItem) => void) {
		this.put("/roadmaps/" + data.roadmapId + "/items", data, (result: IItem) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}

	deleteItem(roadmapId: string, itemId: string, cb: (err: any) => void) {
		this.del("/roadmaps/" + roadmapId + "/items/" + itemId, () => {
			cb(null);
		}, (err: any) => {
			cb(err);
		});
	}
	stats(roadmapId: string, cb: (err: any, result?: IRoadmapStats) => void) {
		this.get("/roadmaps/" + roadmapId + "/stats", (result: IRoadmapStats) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	dashboard(roadmapId: string, cb: (err: any, result?: IDashboard) => void) {
		this.get("/roadmaps/" + roadmapId + "/dashboard", (result: IDashboard) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	delRoadmap(id: string, cb: (err: any, result?: boolean) => void) {
		this.del("/roadmaps/" + id, (result: boolean) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	delItem(id: string, roadmapId: string, cb: (err: any, result?: boolean) => void) {
		this.del("/roadmaps/" + roadmapId + "/items/" + id, (result: boolean) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	updateMockup(roadmapId: string, itemId: string, mockup: IMockup, cb: (err: any, result?: boolean) => void) {
		this.put("/roadmaps/" + roadmapId + "/" + itemId + "/mockup", mockup, (result: boolean) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	deleteMockup(roadmapId: string, itemId: string, mockupId: string, cb: (err: any, result?: boolean) => void) {
		this.del("/roadmaps/" + roadmapId + "/items/" + itemId + "/mockup/" + mockupId, (result: boolean) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
}