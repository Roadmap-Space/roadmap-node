import { Model } from "./model";

export class Items extends Model {
	itemTypes = {
		idea: 0,
		story: 1,
		done: 2,
		attached: 3
	};
	columnIndexes = {
		current: 2,
		soon: 1,
		future: 0,
		team: 2,
		user: 1,
		widget: 0,
		completed: 99
	};
	commentTypes: {
		system: 0,
		message: 1,
		like: 2,
		email: 3
	};

	isFeedback(i: IItem) {
		return (i.type == this.itemTypes.idea && i.column == this.columnIndexes.user)
			|| (i.type == this.itemTypes.attached && i.column == this.columnIndexes.user);
	}
	isIdea(i: IItem) {
		return (i.type == this.itemTypes.idea && (i.column == this.columnIndexes.widget || i.column == this.columnIndexes.team))
			|| (i.type == this.itemTypes.attached && (i.column == this.columnIndexes.widget || i.column == this.columnIndexes.team));
	}
	isStory(i: IItem) {
		return i.type == this.itemTypes.story;
	}

	constructor() {
		super();
	}
	getNewId(cb: (err: any, id?: string) => void) {
		this.get("/items/newid", (id: string) => {
			cb(null, id);
		}, (err: any) => {
			cb(err);
		}, true);
	}
	getById(id: string, cb: (err: any, result?: IItem) => void) {
		if (!id || id.indexOf("|") == -1) {
			cb("invalid parameter");
			return;
		}

		var parts = id.split("|")
		if (parts.length != 2) {
			cb("invalid format");
			return;
		}
		this.get("/item/" + this.compressId(parts[0], parts[1]), (result: IItem) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	getByType(roadmapId: string, isStory: boolean, cb: (err: any, result?: Array<IItem>) => void) {
		this.get("/items/" + roadmapId + "/" + (isStory ? "story" : "idea"), (result: Array<IItem>) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	addComment(c: IPostComment, cb: (err: any, result?: IComment) => void) {
		this.post("/items/comment", c, (result: IComment) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	updateComment(roadmapId: string, itemId: string, commentId: string, body: string, cb: (err: any, result?: boolean) => void) {
		this.put("/items/comment", { roadmapId: roadmapId, itemId: itemId, commentId: commentId, body: body }, (result: boolean) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	deleteComment(id: string, token: string, commentId: string, cb: (err: any, result?: boolean) => void) {
		this.del("/items/" + this.compressId(id, token) + "/comment/" + commentId, (result: boolean) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	moveToRoadmap(id: string, token: string, roadmapId: string, cb: (err: any, result?: boolean) => void) {
		this.put("/items/" + id + "/roadmap", { itemId: id, token: token, toRoadmapId: roadmapId }, (result: boolean) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}

	forceDelete(id: string, token: string, cb: (err: any, result?: boolean) => void) {
		this.del("/items/force/" + this.compressId(id, token), (result: boolean) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
	getEngagements(params: IItemEngagementsParams, cb: (err: any, results?: Array<IItemEngagement>) => void) {
		this.post("/items/findengagements", params, (results: Array<IItemEngagement>) => {
			cb(null, results);
		}, (err: any) => {
			cb(err);
		});
	}
	removePMLinks(roadmapId: string, itemId: string, token: string, cb: (err: any, item?: IItem) => void) {
		var data = {
			roadmapId: roadmapId,
			itemId: itemId,
			token: token
		}
		this.post("/items/removepmlinks", data, (item: IItem) => {
			cb(null, item);
		}, (err: any) => {
			cb(err);
		});
	}
	getParent(roadmapId: string, ideaId: string, ideaToken: string, cb: (err: any, result?: IParentFromAttached) => void) {
		this.get("/items/" + roadmapId + "/fromattached/" + this.compressId(ideaId, ideaToken), (result: IParentFromAttached) => {
			cb(null, result);
		}, (err: any) => {
			cb(err);
		});
	}
}