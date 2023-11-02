/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a TrustProductsChannelEndpointAssignmentInstance
 */
export interface TrustProductsChannelEndpointAssignmentListInstanceCreateOptions {
  /** The type of channel endpoint. eg: phone-number */
  channelEndpointType: string;
  /** The SID of an channel endpoint */
  channelEndpointSid: string;
}
/**
 * Options to pass to each
 */
export interface TrustProductsChannelEndpointAssignmentListInstanceEachOptions {
  /** The SID of an channel endpoint */
  channelEndpointSid?: string;
  /** comma separated list of channel endpoint sids */
  channelEndpointSids?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: TrustProductsChannelEndpointAssignmentInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TrustProductsChannelEndpointAssignmentListInstanceOptions {
  /** The SID of an channel endpoint */
  channelEndpointSid?: string;
  /** comma separated list of channel endpoint sids */
  channelEndpointSids?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TrustProductsChannelEndpointAssignmentListInstancePageOptions {
  /** The SID of an channel endpoint */
  channelEndpointSid?: string;
  /** comma separated list of channel endpoint sids */
  channelEndpointSids?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface TrustProductsChannelEndpointAssignmentContext {
  /**
   * Remove a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsChannelEndpointAssignmentInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TrustProductsChannelEndpointAssignmentInstance
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrustProductsChannelEndpointAssignmentContextSolution {
  trustProductSid: string;
  sid: string;
}

export class TrustProductsChannelEndpointAssignmentContextImpl
  implements TrustProductsChannelEndpointAssignmentContext
{
  protected _solution: TrustProductsChannelEndpointAssignmentContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, trustProductSid: string, sid: string) {
    if (!isValidPathParam(trustProductSid)) {
      throw new Error("Parameter 'trustProductSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { trustProductSid, sid };
    this._uri = `/TrustProducts/${trustProductSid}/ChannelEndpointAssignments/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (
      error: Error | null,
      item?: TrustProductsChannelEndpointAssignmentInstance
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TrustProductsChannelEndpointAssignmentInstance(
          operationVersion,
          payload,
          instance._solution.trustProductSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface TrustProductsChannelEndpointAssignmentPayload
  extends TwilioResponsePayload {
  results: TrustProductsChannelEndpointAssignmentResource[];
}

interface TrustProductsChannelEndpointAssignmentResource {
  sid: string;
  trust_product_sid: string;
  account_sid: string;
  channel_endpoint_type: string;
  channel_endpoint_sid: string;
  date_created: Date;
  url: string;
}

export class TrustProductsChannelEndpointAssignmentInstance {
  protected _solution: TrustProductsChannelEndpointAssignmentContextSolution;
  protected _context?: TrustProductsChannelEndpointAssignmentContext;

  constructor(
    protected _version: V1,
    payload: TrustProductsChannelEndpointAssignmentResource,
    trustProductSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.trustProductSid = payload.trust_product_sid;
    this.accountSid = payload.account_sid;
    this.channelEndpointType = payload.channel_endpoint_type;
    this.channelEndpointSid = payload.channel_endpoint_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { trustProductSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Item Assignment resource.
   */
  sid: string;
  /**
   * The unique string that we created to identify the CustomerProfile resource.
   */
  trustProductSid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Item Assignment resource.
   */
  accountSid: string;
  /**
   * The type of channel endpoint. eg: phone-number
   */
  channelEndpointType: string;
  /**
   * The SID of an channel endpoint
   */
  channelEndpointSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The absolute URL of the Identity resource.
   */
  url: string;

  private get _proxy(): TrustProductsChannelEndpointAssignmentContext {
    this._context =
      this._context ||
      new TrustProductsChannelEndpointAssignmentContextImpl(
        this._version,
        this._solution.trustProductSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsChannelEndpointAssignmentInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TrustProductsChannelEndpointAssignmentInstance
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      trustProductSid: this.trustProductSid,
      accountSid: this.accountSid,
      channelEndpointType: this.channelEndpointType,
      channelEndpointSid: this.channelEndpointSid,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TrustProductsChannelEndpointAssignmentSolution {
  trustProductSid: string;
}

export interface TrustProductsChannelEndpointAssignmentListInstance {
  _version: V1;
  _solution: TrustProductsChannelEndpointAssignmentSolution;
  _uri: string;

  (sid: string): TrustProductsChannelEndpointAssignmentContext;
  get(sid: string): TrustProductsChannelEndpointAssignmentContext;

  /**
   * Create a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsChannelEndpointAssignmentInstance
   */
  create(
    params: TrustProductsChannelEndpointAssignmentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: TrustProductsChannelEndpointAssignmentInstance
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentInstance>;

  /**
   * Streams TrustProductsChannelEndpointAssignmentInstance records from the API.
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
   * @param { TrustProductsChannelEndpointAssignmentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: TrustProductsChannelEndpointAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: TrustProductsChannelEndpointAssignmentListInstanceEachOptions,
    callback?: (
      item: TrustProductsChannelEndpointAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of TrustProductsChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: TrustProductsChannelEndpointAssignmentPage
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentPage>;
  /**
   * Lists TrustProductsChannelEndpointAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsChannelEndpointAssignmentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: TrustProductsChannelEndpointAssignmentInstance[]
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentInstance[]>;
  list(
    params: TrustProductsChannelEndpointAssignmentListInstanceOptions,
    callback?: (
      error: Error | null,
      items: TrustProductsChannelEndpointAssignmentInstance[]
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentInstance[]>;
  /**
   * Retrieve a single page of TrustProductsChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsChannelEndpointAssignmentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: TrustProductsChannelEndpointAssignmentPage
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentPage>;
  page(
    params: TrustProductsChannelEndpointAssignmentListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: TrustProductsChannelEndpointAssignmentPage
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TrustProductsChannelEndpointAssignmentListInstance(
  version: V1,
  trustProductSid: string
): TrustProductsChannelEndpointAssignmentListInstance {
  if (!isValidPathParam(trustProductSid)) {
    throw new Error("Parameter 'trustProductSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as TrustProductsChannelEndpointAssignmentListInstance;

  instance.get = function get(
    sid
  ): TrustProductsChannelEndpointAssignmentContext {
    return new TrustProductsChannelEndpointAssignmentContextImpl(
      version,
      trustProductSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { trustProductSid };
  instance._uri = `/TrustProducts/${trustProductSid}/ChannelEndpointAssignments`;

  instance.create = function create(
    params: TrustProductsChannelEndpointAssignmentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: TrustProductsChannelEndpointAssignmentInstance
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["channelEndpointType"] === null ||
      params["channelEndpointType"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['channelEndpointType']\" missing."
      );
    }

    if (
      params["channelEndpointSid"] === null ||
      params["channelEndpointSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['channelEndpointSid']\" missing."
      );
    }

    let data: any = {};

    data["ChannelEndpointType"] = params["channelEndpointType"];

    data["ChannelEndpointSid"] = params["channelEndpointSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TrustProductsChannelEndpointAssignmentInstance(
          operationVersion,
          payload,
          instance._solution.trustProductSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | TrustProductsChannelEndpointAssignmentListInstancePageOptions
      | ((
          error: Error | null,
          items: TrustProductsChannelEndpointAssignmentPage
        ) => any),
    callback?: (
      error: Error | null,
      items: TrustProductsChannelEndpointAssignmentPage
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["channelEndpointSid"] !== undefined)
      data["ChannelEndpointSid"] = params["channelEndpointSid"];
    if (params["channelEndpointSids"] !== undefined)
      data["ChannelEndpointSids"] = params["channelEndpointSids"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TrustProductsChannelEndpointAssignmentPage(
          operationVersion,
          payload,
          instance._solution
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: TrustProductsChannelEndpointAssignmentPage
    ) => any
  ): Promise<TrustProductsChannelEndpointAssignmentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new TrustProductsChannelEndpointAssignmentPage(
          instance._version,
          payload,
          instance._solution
        )
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class TrustProductsChannelEndpointAssignmentPage extends Page<
  V1,
  TrustProductsChannelEndpointAssignmentPayload,
  TrustProductsChannelEndpointAssignmentResource,
  TrustProductsChannelEndpointAssignmentInstance
> {
  /**
   * Initialize the TrustProductsChannelEndpointAssignmentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: TrustProductsChannelEndpointAssignmentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TrustProductsChannelEndpointAssignmentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: TrustProductsChannelEndpointAssignmentResource
  ): TrustProductsChannelEndpointAssignmentInstance {
    return new TrustProductsChannelEndpointAssignmentInstance(
      this._version,
      payload,
      this._solution.trustProductSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
