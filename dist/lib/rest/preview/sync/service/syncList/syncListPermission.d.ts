/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
/**
 * Options to pass to update a SyncListPermissionInstance
 */
export interface SyncListPermissionContextUpdateOptions {
    /** Boolean flag specifying whether the identity can read the Sync List. */
    read: boolean;
    /** Boolean flag specifying whether the identity can create, update and delete Items of the Sync List. */
    write: boolean;
    /** Boolean flag specifying whether the identity can delete the Sync List. */
    manage: boolean;
}
/**
 * Options to pass to each
 */
export interface SyncListPermissionListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface SyncListPermissionListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface SyncListPermissionListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface SyncListPermissionContext {
    /**
     * Remove a SyncListPermissionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncListPermissionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SyncListPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    /**
     * Update a SyncListPermissionInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SyncListPermissionInstance
     */
    update(params: SyncListPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncListPermissionContextSolution {
    serviceSid: string;
    listSid: string;
    identity: string;
}
export declare class SyncListPermissionContextImpl implements SyncListPermissionContext {
    protected _version: Sync;
    protected _solution: SyncListPermissionContextSolution;
    protected _uri: string;
    constructor(_version: Sync, serviceSid: string, listSid: string, identity: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    update(params: SyncListPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SyncListPermissionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SyncListPermissionPayload extends TwilioResponsePayload {
    permissions: SyncListPermissionResource[];
}
interface SyncListPermissionResource {
    account_sid: string;
    service_sid: string;
    list_sid: string;
    identity: string;
    read: boolean;
    write: boolean;
    manage: boolean;
    url: string;
}
export declare class SyncListPermissionInstance {
    protected _version: Sync;
    protected _solution: SyncListPermissionContextSolution;
    protected _context?: SyncListPermissionContext;
    constructor(_version: Sync, payload: SyncListPermissionResource, serviceSid: string, listSid: string, identity?: string);
    /**
     * The unique SID identifier of the Twilio Account.
     */
    accountSid: string;
    /**
     * The unique SID identifier of the Sync Service Instance.
     */
    serviceSid: string;
    /**
     * The unique SID identifier of the Sync List to which the Permission applies.
     */
    listSid: string;
    /**
     * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
     */
    identity: string;
    /**
     * Boolean flag specifying whether the identity can read the Sync List and its Items.
     */
    read: boolean;
    /**
     * Boolean flag specifying whether the identity can create, update and delete Items of the Sync List.
     */
    write: boolean;
    /**
     * Boolean flag specifying whether the identity can delete the Sync List.
     */
    manage: boolean;
    /**
     * Contains an absolute URL for this Sync List Permission.
     */
    url: string;
    private get _proxy();
    /**
     * Remove a SyncListPermissionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncListPermissionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SyncListPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    /**
     * Update a SyncListPermissionInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SyncListPermissionInstance
     */
    update(params: SyncListPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        serviceSid: string;
        listSid: string;
        identity: string;
        read: boolean;
        write: boolean;
        manage: boolean;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SyncListPermissionSolution {
    serviceSid: string;
    listSid: string;
}
export interface SyncListPermissionListInstance {
    _version: Sync;
    _solution: SyncListPermissionSolution;
    _uri: string;
    (identity: string): SyncListPermissionContext;
    get(identity: string): SyncListPermissionContext;
    /**
     * Streams SyncListPermissionInstance records from the API.
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
     * @param { SyncListPermissionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void): void;
    each(params: SyncListPermissionListInstanceEachOptions, callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of SyncListPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
    /**
     * Lists SyncListPermissionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncListPermissionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SyncListPermissionInstance[]) => any): Promise<SyncListPermissionInstance[]>;
    list(params: SyncListPermissionListInstanceOptions, callback?: (error: Error | null, items: SyncListPermissionInstance[]) => any): Promise<SyncListPermissionInstance[]>;
    /**
     * Retrieve a single page of SyncListPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncListPermissionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
    page(params: SyncListPermissionListInstancePageOptions, callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function SyncListPermissionListInstance(version: Sync, serviceSid: string, listSid: string): SyncListPermissionListInstance;
export declare class SyncListPermissionPage extends Page<Sync, SyncListPermissionPayload, SyncListPermissionResource, SyncListPermissionInstance> {
    /**
     * Initialize the SyncListPermissionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Sync, response: Response<string>, solution: SyncListPermissionSolution);
    /**
     * Build an instance of SyncListPermissionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncListPermissionResource): SyncListPermissionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
