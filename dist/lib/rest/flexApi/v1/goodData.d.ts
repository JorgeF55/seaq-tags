/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a GoodDataInstance
 */
export interface GoodDataContextCreateOptions {
    /** The Token HTTP request header */
    token?: string;
}
export interface GoodDataContext {
    /**
     * Create a GoodDataInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed GoodDataInstance
     */
    create(callback?: (error: Error | null, item?: GoodDataInstance) => any): Promise<GoodDataInstance>;
    /**
     * Create a GoodDataInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed GoodDataInstance
     */
    create(params: GoodDataContextCreateOptions, callback?: (error: Error | null, item?: GoodDataInstance) => any): Promise<GoodDataInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface GoodDataContextSolution {
}
export declare class GoodDataContextImpl implements GoodDataContext {
    protected _version: V1;
    protected _solution: GoodDataContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    create(params?: GoodDataContextCreateOptions | ((error: Error | null, item?: GoodDataInstance) => any), callback?: (error: Error | null, item?: GoodDataInstance) => any): Promise<GoodDataInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): GoodDataContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface GoodDataResource {
    workspace_id: string;
    session_expiry: string;
    session_id: string;
    base_url: string;
    url: string;
}
export declare class GoodDataInstance {
    protected _version: V1;
    protected _solution: GoodDataContextSolution;
    protected _context?: GoodDataContext;
    constructor(_version: V1, payload: GoodDataResource);
    /**
     * Unique ID to identify the user\'s workspace
     */
    workspaceId: string;
    /**
     * The session expiry date and time, given in ISO 8601 format.
     */
    sessionExpiry: string;
    /**
     * The unique ID for the session
     */
    sessionId: string;
    /**
     * The base URL to fetch reports and dashboards
     */
    baseUrl: string;
    /**
     * The URL of this resource.
     */
    url: string;
    private get _proxy();
    /**
     * Create a GoodDataInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed GoodDataInstance
     */
    create(callback?: (error: Error | null, item?: GoodDataInstance) => any): Promise<GoodDataInstance>;
    /**
     * Create a GoodDataInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed GoodDataInstance
     */
    create(params: GoodDataContextCreateOptions, callback?: (error: Error | null, item?: GoodDataInstance) => any): Promise<GoodDataInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        workspaceId: string;
        sessionExpiry: string;
        sessionId: string;
        baseUrl: string;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface GoodDataSolution {
}
export interface GoodDataListInstance {
    _version: V1;
    _solution: GoodDataSolution;
    _uri: string;
    (): GoodDataContext;
    get(): GoodDataContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function GoodDataListInstance(version: V1): GoodDataListInstance;
export {};
