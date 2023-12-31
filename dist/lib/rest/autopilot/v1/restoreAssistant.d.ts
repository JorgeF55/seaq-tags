/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a RestoreAssistantInstance
 */
export interface RestoreAssistantListInstanceUpdateOptions {
    /** The Twilio-provided string that uniquely identifies the Assistant resource to restore. */
    assistant: string;
}
export interface RestoreAssistantSolution {
}
export interface RestoreAssistantListInstance {
    _version: V1;
    _solution: RestoreAssistantSolution;
    _uri: string;
    /**
     * Update a RestoreAssistantInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed RestoreAssistantInstance
     */
    update(params: RestoreAssistantListInstanceUpdateOptions, callback?: (error: Error | null, item?: RestoreAssistantInstance) => any): Promise<RestoreAssistantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function RestoreAssistantListInstance(version: V1): RestoreAssistantListInstance;
interface RestoreAssistantResource {
    account_sid: string;
    sid: string;
    date_created: Date;
    date_updated: Date;
    unique_name: string;
    friendly_name: string;
    needs_model_build: boolean;
    latest_model_build_sid: string;
    log_queries: boolean;
    development_stage: string;
    callback_url: string;
    callback_events: string;
}
export declare class RestoreAssistantInstance {
    protected _version: V1;
    constructor(_version: V1, payload: RestoreAssistantResource);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Assistant resource.
     */
    accountSid: string;
    /**
     * The unique string that we created to identify the Assistant resource.
     */
    sid: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource\'s `sid` in the URL to address the resource.
     */
    uniqueName: string;
    /**
     * The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName: string;
    /**
     * Whether model needs to be rebuilt.
     */
    needsModelBuild: boolean;
    /**
     * Reserved.
     */
    latestModelBuildSid: string;
    /**
     * Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored.
     */
    logQueries: boolean;
    /**
     * A string describing the state of the assistant.
     */
    developmentStage: string;
    /**
     * Reserved.
     */
    callbackUrl: string;
    /**
     * Reserved.
     */
    callbackEvents: string;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        sid: string;
        dateCreated: Date;
        dateUpdated: Date;
        uniqueName: string;
        friendlyName: string;
        needsModelBuild: boolean;
        latestModelBuildSid: string;
        logQueries: boolean;
        developmentStage: string;
        callbackUrl: string;
        callbackEvents: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
