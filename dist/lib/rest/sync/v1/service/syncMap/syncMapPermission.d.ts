/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to update a SyncMapPermissionInstance
 */
export interface SyncMapPermissionContextUpdateOptions {
    /** Whether the identity can read the Sync Map and its Items. Default value is `false`. */
    read: boolean;
    /** Whether the identity can create, update, and delete Items in the Sync Map. Default value is `false`. */
    write: boolean;
    /** Whether the identity can delete the Sync Map. Default value is `false`. */
    manage: boolean;
}
/**
 * Options to pass to each
 */
export interface SyncMapPermissionListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface SyncMapPermissionListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface SyncMapPermissionListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface SyncMapPermissionContext {
    /**
     * Remove a SyncMapPermissionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncMapPermissionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SyncMapPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    /**
     * Update a SyncMapPermissionInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SyncMapPermissionInstance
     */
    update(params: SyncMapPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncMapPermissionContextSolution {
    serviceSid: string;
    mapSid: string;
    identity: string;
}
export declare class SyncMapPermissionContextImpl implements SyncMapPermissionContext {
    protected _version: V1;
    protected _solution: SyncMapPermissionContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, mapSid: string, identity: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    update(params: SyncMapPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SyncMapPermissionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SyncMapPermissionPayload extends TwilioResponsePayload {
    permissions: SyncMapPermissionResource[];
}
interface SyncMapPermissionResource {
    account_sid: string;
    service_sid: string;
    map_sid: string;
    identity: string;
    read: boolean;
    write: boolean;
    manage: boolean;
    url: string;
}
export declare class SyncMapPermissionInstance {
    protected _version: V1;
    protected _solution: SyncMapPermissionContextSolution;
    protected _context?: SyncMapPermissionContext;
    constructor(_version: V1, payload: SyncMapPermissionResource, serviceSid: string, mapSid: string, identity?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map Permission resource.
     */
    accountSid: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map to which the Permission applies.
     */
    mapSid: string;
    /**
     * The application-defined string that uniquely identifies the resource\'s User within the Service to an FPA token.
     */
    identity: string;
    /**
     * Whether the identity can read the Sync Map and its Items.
     */
    read: boolean;
    /**
     * Whether the identity can create, update, and delete Items in the Sync Map.
     */
    write: boolean;
    /**
     * Whether the identity can delete the Sync Map.
     */
    manage: boolean;
    /**
     * The absolute URL of the Sync Map Permission resource.
     */
    url: string;
    private get _proxy();
    /**
     * Remove a SyncMapPermissionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncMapPermissionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SyncMapPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    /**
     * Update a SyncMapPermissionInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SyncMapPermissionInstance
     */
    update(params: SyncMapPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        serviceSid: string;
        mapSid: string;
        identity: string;
        read: boolean;
        write: boolean;
        manage: boolean;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SyncMapPermissionSolution {
    serviceSid: string;
    mapSid: string;
}
export interface SyncMapPermissionListInstance {
    _version: V1;
    _solution: SyncMapPermissionSolution;
    _uri: string;
    (identity: string): SyncMapPermissionContext;
    get(identity: string): SyncMapPermissionContext;
    /**
     * Streams SyncMapPermissionInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncMapPermissionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void): void;
    each(params: SyncMapPermissionListInstanceEachOptions, callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of SyncMapPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
    /**
     * Lists SyncMapPermissionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncMapPermissionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SyncMapPermissionInstance[]) => any): Promise<SyncMapPermissionInstance[]>;
    list(params: SyncMapPermissionListInstanceOptions, callback?: (error: Error | null, items: SyncMapPermissionInstance[]) => any): Promise<SyncMapPermissionInstance[]>;
    /**
     * Retrieve a single page of SyncMapPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncMapPermissionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
    page(params: SyncMapPermissionListInstancePageOptions, callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function SyncMapPermissionListInstance(version: V1, serviceSid: string, mapSid: string): SyncMapPermissionListInstance;
export declare class SyncMapPermissionPage extends Page<V1, SyncMapPermissionPayload, SyncMapPermissionResource, SyncMapPermissionInstance> {
    /**
     * Initialize the SyncMapPermissionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SyncMapPermissionSolution);
    /**
     * Build an instance of SyncMapPermissionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncMapPermissionResource): SyncMapPermissionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
