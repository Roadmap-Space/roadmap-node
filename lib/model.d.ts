/// <reference path="../src/interfaces.d.ts" />
export declare class Model {
    private BASE_API;
    private makeRequest(method, path, data, success, error, isLocal);
    get(path: string, success: (body: any) => void, error: (err: any, statusCode?: number) => void, isLocal?: boolean): void;
    put(path: string, data: any, success: (body: any) => void, error: (err: any, statusCode?: number) => void, isLocal?: boolean): void;
    post(path: string, data: any, success: (body: any) => void, error: (err: any, statusCode?: number) => void, isLocal?: boolean): void;
    del(path: any, success: (body: any) => void, error: (err: any) => void, isLocal?: boolean): void;
    compressId(id: string, token: string): string;
}
