/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
import { FeedbackListInstance } from "./message/feedback";
import { MediaListInstance } from "./message/media";
type MessageAddressRetention = "retain";
type MessageContentRetention = "retain";
type MessageDirection = "inbound" | "outbound-api" | "outbound-call" | "outbound-reply";
type MessageScheduleType = "fixed";
type MessageStatus = "queued" | "sending" | "sent" | "failed" | "delivered" | "undelivered" | "receiving" | "received" | "accepted" | "scheduled" | "read" | "partially_delivered" | "canceled";
type MessageUpdateStatus = "canceled";
/**
 * Options to pass to update a MessageInstance
 */
export interface MessageContextUpdateOptions {
    /** The text of the message you want to send. Can be up to 1,600 characters long. */
    body?: string;
    /**  */
    status?: MessageUpdateStatus;
}
/**
 * Options to pass to create a MessageInstance
 */
export interface MessageListInstanceCreateOptions {
    /** The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format for SMS/MMS or [Channel user address](https://www.twilio.com/docs/sms/channels#channel-addresses) for other 3rd-party channels. */
    to: string;
    /** The URL we should call using the `status_callback_method` to send status information to your application. If specified, we POST these message status changes to the URL: `queued`, `failed`, `sent`, `delivered`, or `undelivered`. Twilio will POST its [standard request parameters](https://www.twilio.com/docs/sms/twiml#request-parameters) as well as some additional parameters including `MessageSid`, `MessageStatus`, and `ErrorCode`. If you include this parameter with the `messaging_service_sid`, we use this URL instead of the Status Callback URL of the [Messaging Service](https://www.twilio.com/docs/sms/services/api). URLs must contain a valid hostname and underscores are not allowed. */
    statusCallback?: string;
    /** The SID of the application that should receive message status. We POST a `message_sid` parameter and a `message_status` parameter with a value of `sent` or `failed` to the [application](https://www.twilio.com/docs/usage/api/applications)\\\'s `message_status_callback`. If a `status_callback` parameter is also passed, it will be ignored and the application\\\'s `message_status_callback` parameter will be used. */
    applicationSid?: string;
    /** The maximum total price in US dollars that you will pay for the message to be delivered. Can be a decimal value that has up to 4 decimal places. All messages are queued for delivery and the message cost is checked before the message is sent. If the cost exceeds `max_price`, the message will fail and a status of `Failed` is sent to the status callback. If `MaxPrice` is not set, the message cost is not checked. */
    maxPrice?: number;
    /** Whether to confirm delivery of the message. Set this value to `true` if you are sending messages that have a trackable user action and you intend to confirm delivery of the message using the [Message Feedback API](https://www.twilio.com/docs/sms/api/message-feedback-resource). This parameter is `false` by default. */
    provideFeedback?: boolean;
    /** Total number of attempts made ( including this ) to send out the message regardless of the provider used */
    attempt?: number;
    /** How long in seconds the message can remain in our outgoing message queue. After this period elapses, the message fails and we call your status callback. Can be between 1 and the default value of 14,400 seconds. After a message has been accepted by a carrier, however, we cannot guarantee that the message will not be queued after this period. We recommend that this value be at least 5 seconds. */
    validityPeriod?: number;
    /** Reserved */
    forceDelivery?: boolean;
    /**  */
    contentRetention?: MessageContentRetention;
    /**  */
    addressRetention?: MessageAddressRetention;
    /** Whether to detect Unicode characters that have a similar GSM-7 character and replace them. Can be: `true` or `false`. */
    smartEncoded?: boolean;
    /** Rich actions for Channels Messages. */
    persistentAction?: Array<string>;
    /** Determines the usage of Click Tracking. Setting it to `true` will instruct Twilio to replace all links in the Message with a shortened version based on the associated Domain Sid and track clicks on them. If this parameter is not set on an API call, we will use the value set on the Messaging Service. If this parameter is not set and the value is not configured on the Messaging Service used this will default to `false`. */
    shortenUrls?: boolean;
    /**  */
    scheduleType?: MessageScheduleType;
    /** The time that Twilio will send the message. Must be in ISO 8601 format. */
    sendAt?: Date;
    /** If set to True, Twilio will deliver the message as a single MMS message, regardless of the presence of media. */
    sendAsMms?: boolean;
    /** The SID of the Content object returned at Content API content create time (https://www.twilio.com/docs/content-api/create-and-send-your-first-content-api-template#create-a-template). If this parameter is not specified, then the Content API will not be utilized. */
    contentSid?: string;
    /** Key-value pairs of variable names to substitution values, used alongside a content_sid. If not specified, Content API will default to the default variables defined at create time. */
    contentVariables?: string;
    /** A string containing a JSON map of key value pairs of tags to be recorded as metadata for the message. The object may contain up to 10 tags. Keys and values can each be up to 128 characters in length. */
    tags?: any;
    /** A Twilio phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, an [alphanumeric sender ID](https://www.twilio.com/docs/sms/send-messages#use-an-alphanumeric-sender-id), or a [Channel Endpoint address](https://www.twilio.com/docs/sms/channels#channel-addresses) that is enabled for the type of message you want to send. Phone numbers or [short codes](https://www.twilio.com/docs/sms/api/short-code) purchased from Twilio also work here. You cannot, for example, spoof messages from a private cell phone number. If you are using `messaging_service_sid`, this parameter must be empty. */
    from?: string;
    /** The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services#send-a-message-with-copilot) you want to associate with the Message. Set this parameter to use the [Messaging Service Settings and Copilot Features](https://www.twilio.com/console/sms/services) you have configured and leave the `from` parameter empty. When only this parameter is set, Twilio will use your enabled Copilot Features to select the `from` phone number for delivery. */
    messagingServiceSid?: string;
    /** The text of the message you want to send. Can be up to 1,600 characters in length. */
    body?: string;
    /** The URL of the media to send with the message. The media can be of type `gif`, `png`, and `jpeg` and will be formatted correctly on the recipient\\\'s device. The media size limit is 5MB for supported file types (JPEG, PNG, GIF) and 500KB for [other types](https://www.twilio.com/docs/sms/accepted-mime-types) of accepted media. To send more than one image in the message body, provide multiple `media_url` parameters in the POST request. You can include up to 10 `media_url` parameters per message. You can send images in an SMS message in only the US and Canada. */
    mediaUrl?: Array<string>;
}
/**
 * Options to pass to each
 */
export interface MessageListInstanceEachOptions {
    /** Read messages sent to only this phone number. */
    to?: string;
    /** Read messages sent from only this phone number or alphanumeric sender ID. */
    from?: string;
    /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
    dateSent?: Date;
    /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
    dateSentBefore?: Date;
    /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
    dateSentAfter?: Date;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface MessageListInstanceOptions {
    /** Read messages sent to only this phone number. */
    to?: string;
    /** Read messages sent from only this phone number or alphanumeric sender ID. */
    from?: string;
    /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
    dateSent?: Date;
    /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
    dateSentBefore?: Date;
    /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
    dateSentAfter?: Date;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface MessageListInstancePageOptions {
    /** Read messages sent to only this phone number. */
    to?: string;
    /** Read messages sent from only this phone number or alphanumeric sender ID. */
    from?: string;
    /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
    dateSent?: Date;
    /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
    dateSentBefore?: Date;
    /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
    dateSentAfter?: Date;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface MessageContext {
    feedback: FeedbackListInstance;
    media: MediaListInstance;
    /**
     * Remove a MessageInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MessageInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessageInstance
     */
    fetch(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessageInstance
     */
    update(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessageInstance
     */
    update(params: MessageContextUpdateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessageContextSolution {
    accountSid: string;
    sid: string;
}
export declare class MessageContextImpl implements MessageContext {
    protected _version: V2010;
    protected _solution: MessageContextSolution;
    protected _uri: string;
    protected _feedback?: FeedbackListInstance;
    protected _media?: MediaListInstance;
    constructor(_version: V2010, accountSid: string, sid: string);
    get feedback(): FeedbackListInstance;
    get media(): MediaListInstance;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    update(params?: MessageContextUpdateOptions | ((error: Error | null, item?: MessageInstance) => any), callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MessageContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface MessagePayload extends TwilioResponsePayload {
    messages: MessageResource[];
}
interface MessageResource {
    body: string;
    num_segments: string;
    direction: MessageDirection;
    from: string;
    to: string;
    date_updated: Date;
    price: string;
    error_message: string;
    uri: string;
    account_sid: string;
    num_media: string;
    status: MessageStatus;
    messaging_service_sid: string;
    sid: string;
    date_sent: Date;
    date_created: Date;
    error_code: number;
    price_unit: string;
    api_version: string;
    subresource_uris: Record<string, string>;
    tags: any;
}
export declare class MessageInstance {
    protected _version: V2010;
    protected _solution: MessageContextSolution;
    protected _context?: MessageContext;
    constructor(_version: V2010, payload: MessageResource, accountSid: string, sid?: string);
    /**
     * The message text. Can be up to 1,600 characters long.
     */
    body: string;
    /**
     * The number of segments that make up the complete message. A message body that is too large to be sent in a single SMS message is segmented and charged as multiple messages. Inbound messages over 160 characters are reassembled when the message is received. Note: When using a Messaging Service to send messages, `num_segments` will always be 0 in Twilio\'s response to your API request.
     */
    numSegments: string;
    direction: MessageDirection;
    /**
     * The phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/send-messages#use-an-alphanumeric-sender-id), or [Wireless SIM](https://www.twilio.com/docs/wireless/tutorials/communications-guides/how-to-send-and-receive-text-messages) that initiated the message. For incoming messages, this will be the number of the sending phone. For outgoing messages, this value will be one of your Twilio phone numbers or the alphanumeric sender ID used.
     */
    from: string;
    /**
     * The phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format that received the message. For incoming messages, this will be one of your Twilio phone numbers. For outgoing messages, this will be the sending phone.
     */
    to: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * The amount billed for the message, in the currency specified by `price_unit`.  Note that your account is charged for each segment we send to the handset. Populated after the message has been sent. May not be immediately available.
     */
    price: string;
    /**
     * The description of the `error_code` if your message `status` is `failed` or `undelivered`. If the message was successful, this value is null.
     */
    errorMessage: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that sent the message that created the resource.
     */
    accountSid: string;
    /**
     * The number of media files associated with the message. A message can send up to 10 media files.
     */
    numMedia: string;
    status: MessageStatus;
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) used with the message. The value is null if a Messaging Service was not used.
     */
    messagingServiceSid: string;
    /**
     * The unique string that that we created to identify the Message resource.
     */
    sid: string;
    /**
     * The date and time in GMT that the resource was sent specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. For outgoing messages, this is when we sent the message. For incoming messages, this is when we made the HTTP request to your application.
     */
    dateSent: Date;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The error code returned if your message `status` is `failed` or `undelivered`. The error_code provides more information about the failure. If the message was successful, this value is null.
     */
    errorCode: number;
    /**
     * The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
     */
    priceUnit: string;
    /**
     * The API version used to process the message.
     */
    apiVersion: string;
    /**
     * A list of related resources identified by their URIs relative to `https://api.twilio.com`
     */
    subresourceUris: Record<string, string>;
    /**
     * A string containing a JSON map of key value pairs of tags to be recorded as metadata for the message.
     */
    tags: any;
    private get _proxy();
    /**
     * Remove a MessageInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MessageInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessageInstance
     */
    fetch(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessageInstance
     */
    update(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessageInstance
     */
    update(params: MessageContextUpdateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Access the feedback.
     */
    feedback(): FeedbackListInstance;
    /**
     * Access the media.
     */
    media(): MediaListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        body: string;
        numSegments: string;
        direction: MessageDirection;
        from: string;
        to: string;
        dateUpdated: Date;
        price: string;
        errorMessage: string;
        uri: string;
        accountSid: string;
        numMedia: string;
        status: MessageStatus;
        messagingServiceSid: string;
        sid: string;
        dateSent: Date;
        dateCreated: Date;
        errorCode: number;
        priceUnit: string;
        apiVersion: string;
        subresourceUris: Record<string, string>;
        tags: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MessageSolution {
    accountSid: string;
}
export interface MessageListInstance {
    _version: V2010;
    _solution: MessageSolution;
    _uri: string;
    (sid: string): MessageContext;
    get(sid: string): MessageContext;
    /**
     * Create a MessageInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessageInstance
     */
    create(params: MessageListInstanceCreateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Streams MessageInstance records from the API.
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
     * @param { MessageListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
    each(params: MessageListInstanceEachOptions, callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    /**
     * Lists MessageInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessageListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
    list(params: MessageListInstanceOptions, callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
    /**
     * Retrieve a single page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessageListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    page(params: MessageListInstancePageOptions, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function MessageListInstance(version: V2010, accountSid: string): MessageListInstance;
export declare class MessagePage extends Page<V2010, MessagePayload, MessageResource, MessageInstance> {
    /**
     * Initialize the MessagePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: MessageSolution);
    /**
     * Build an instance of MessageInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MessageResource): MessageInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
