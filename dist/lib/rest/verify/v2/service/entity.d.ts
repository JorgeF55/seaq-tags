/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
import { ChallengeListInstance } from "./entity/challenge";
import { FactorListInstance } from "./entity/factor";
import { NewFactorListInstance } from "./entity/newFactor";
/**
 * Options to pass to create a EntityInstance
 */
export interface EntityListInstanceCreateOptions {
    /** The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user\\\'s UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
    identity: string;
}
/**
 * Options to pass to each
 */
export interface EntityListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: EntityInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface EntityListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface EntityListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface EntityContext {
    challenges: ChallengeListInstance;
    factors: FactorListInstance;
    newFactors: NewFactorListInstance;
    /**
     * Remove a EntityInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a EntityInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed EntityInstance
     */
    fetch(callback?: (error: Error | null, item?: EntityInstance) => any): Promise<EntityInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EntityContextSolution {
    serviceSid: string;
    identity: string;
}
export declare class EntityContextImpl implements EntityContext {
    protected _version: V2;
    protected _solution: EntityContextSolution;
    protected _uri: string;
    protected _challenges?: ChallengeListInstance;
    protected _factors?: FactorListInstance;
    protected _newFactors?: NewFactorListInstance;
    constructor(_version: V2, serviceSid: string, identity: string);
    get challenges(): ChallengeListInstance;
    get factors(): FactorListInstance;
    get newFactors(): NewFactorListInstance;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: EntityInstance) => any): Promise<EntityInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EntityContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EntityPayload extends TwilioResponsePayload {
    entities: EntityResource[];
}
interface EntityResource {
    sid: string;
    identity: string;
    account_sid: string;
    service_sid: string;
    date_created: Date;
    date_updated: Date;
    url: string;
    links: Record<string, string>;
}
export declare class EntityInstance {
    protected _version: V2;
    protected _solution: EntityContextSolution;
    protected _context?: EntityContext;
    constructor(_version: V2, payload: EntityResource, serviceSid: string, identity?: string);
    /**
     * A 34 character string that uniquely identifies this Entity.
     */
    sid: string;
    /**
     * The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user\'s UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters.
     */
    identity: string;
    /**
     * The unique SID identifier of the Account.
     */
    accountSid: string;
    /**
     * The unique SID identifier of the Service.
     */
    serviceSid: string;
    /**
     * The date that this Entity was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date that this Entity was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    /**
     * The URL of this resource.
     */
    url: string;
    /**
     * Contains a dictionary of URL links to nested resources of this Entity.
     */
    links: Record<string, string>;
    private get _proxy();
    /**
     * Remove a EntityInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a EntityInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed EntityInstance
     */
    fetch(callback?: (error: Error | null, item?: EntityInstance) => any): Promise<EntityInstance>;
    /**
     * Access the challenges.
     */
    challenges(): ChallengeListInstance;
    /**
     * Access the factors.
     */
    factors(): FactorListInstance;
    /**
     * Access the newFactors.
     */
    newFactors(): NewFactorListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string;
        identity: string;
        accountSid: string;
        serviceSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        url: string;
        links: Record<string, string>;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EntitySolution {
    serviceSid: string;
}
export interface EntityListInstance {
    _version: V2;
    _solution: EntitySolution;
    _uri: string;
    (identity: string): EntityContext;
    get(identity: string): EntityContext;
    /**
     * Create a EntityInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed EntityInstance
     */
    create(params: EntityListInstanceCreateOptions, callback?: (error: Error | null, item?: EntityInstance) => any): Promise<EntityInstance>;
    /**
     * Streams EntityInstance records from the API.
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
     * @param { EntityListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: EntityInstance, done: (err?: Error) => void) => void): void;
    each(params: EntityListInstanceEachOptions, callback?: (item: EntityInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of EntityInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: EntityPage) => any): Promise<EntityPage>;
    /**
     * Lists EntityInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EntityListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: EntityInstance[]) => any): Promise<EntityInstance[]>;
    list(params: EntityListInstanceOptions, callback?: (error: Error | null, items: EntityInstance[]) => any): Promise<EntityInstance[]>;
    /**
     * Retrieve a single page of EntityInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EntityListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: EntityPage) => any): Promise<EntityPage>;
    page(params: EntityListInstancePageOptions, callback?: (error: Error | null, items: EntityPage) => any): Promise<EntityPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function EntityListInstance(version: V2, serviceSid: string): EntityListInstance;
export declare class EntityPage extends Page<V2, EntityPayload, EntityResource, EntityInstance> {
    /**
     * Initialize the EntityPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: EntitySolution);
    /**
     * Build an instance of EntityInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: EntityResource): EntityInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
