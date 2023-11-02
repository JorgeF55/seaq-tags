/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to fetch a UserRolesInstance
 */
export interface UserRolesContextFetchOptions {
    /** The Token HTTP request header */
    token?: string;
}
export interface UserRolesContext {
    /**
     * Fetch a UserRolesInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed UserRolesInstance
     */
    fetch(callback?: (error: Error | null, item?: UserRolesInstance) => any): Promise<UserRolesInstance>;
    /**
     * Fetch a UserRolesInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed UserRolesInstance
     */
    fetch(params: UserRolesContextFetchOptions, callback?: (error: Error | null, item?: UserRolesInstance) => any): Promise<UserRolesInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserRolesContextSolution {
}
export declare class UserRolesContextImpl implements UserRolesContext {
    protected _version: V1;
    protected _solution: UserRolesContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(params?: UserRolesContextFetchOptions | ((error: Error | null, item?: UserRolesInstance) => any), callback?: (error: Error | null, item?: UserRolesInstance) => any): Promise<UserRolesInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UserRolesContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UserRolesResource {
    roles: Array<string>;
    url: string;
}
export declare class UserRolesInstance {
    protected _version: V1;
    protected _solution: UserRolesContextSolution;
    protected _context?: UserRolesContext;
    constructor(_version: V1, payload: UserRolesResource);
    /**
     * Flex Insights roles for the user
     */
    roles: Array<string>;
    url: string;
    private get _proxy();
    /**
     * Fetch a UserRolesInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed UserRolesInstance
     */
    fetch(callback?: (error: Error | null, item?: UserRolesInstance) => any): Promise<UserRolesInstance>;
    /**
     * Fetch a UserRolesInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed UserRolesInstance
     */
    fetch(params: UserRolesContextFetchOptions, callback?: (error: Error | null, item?: UserRolesInstance) => any): Promise<UserRolesInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        roles: string[];
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UserRolesSolution {
}
export interface UserRolesListInstance {
    _version: V1;
    _solution: UserRolesSolution;
    _uri: string;
    (): UserRolesContext;
    get(): UserRolesContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function UserRolesListInstance(version: V1): UserRolesListInstance;
export {};
