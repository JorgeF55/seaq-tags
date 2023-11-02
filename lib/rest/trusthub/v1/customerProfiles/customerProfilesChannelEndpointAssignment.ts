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
 * Options to pass to create a CustomerProfilesChannelEndpointAssignmentInstance
 */
export interface CustomerProfilesChannelEndpointAssignmentListInstanceCreateOptions {
  /** The type of channel endpoint. eg: phone-number */
  channelEndpointType: string;
  /** The SID of an channel endpoint */
  channelEndpointSid: string;
}
/**
 * Options to pass to each
 */
export interface CustomerProfilesChannelEndpointAssignmentListInstanceEachOptions {
  /** The SID of an channel endpoint */
  channelEndpointSid?: string;
  /** comma separated list of channel endpoint sids */
  channelEndpointSids?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: CustomerProfilesChannelEndpointAssignmentInstance,
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
export interface CustomerProfilesChannelEndpointAssignmentListInstanceOptions {
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
export interface CustomerProfilesChannelEndpointAssignmentListInstancePageOptions {
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

export interface CustomerProfilesChannelEndpointAssignmentContext {
  /**
   * Remove a CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomerProfilesChannelEndpointAssignmentInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesChannelEndpointAssignmentInstance
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CustomerProfilesChannelEndpointAssignmentContextSolution {
  customerProfileSid: string;
  sid: string;
}

export class CustomerProfilesChannelEndpointAssignmentContextImpl
  implements CustomerProfilesChannelEndpointAssignmentContext
{
  protected _solution: CustomerProfilesChannelEndpointAssignmentContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, customerProfileSid: string, sid: string) {
    if (!isValidPathParam(customerProfileSid)) {
      throw new Error("Parameter 'customerProfileSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { customerProfileSid, sid };
    this._uri = `/CustomerProfiles/${customerProfileSid}/ChannelEndpointAssignments/${sid}`;
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
      item?: CustomerProfilesChannelEndpointAssignmentInstance
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesChannelEndpointAssignmentInstance(
          operationVersion,
          payload,
          instance._solution.customerProfileSid,
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

interface CustomerProfilesChannelEndpointAssignmentPayload
  extends TwilioResponsePayload {
  results: CustomerProfilesChannelEndpointAssignmentResource[];
}

interface CustomerProfilesChannelEndpointAssignmentResource {
  sid: string;
  customer_profile_sid: string;
  account_sid: string;
  channel_endpoint_type: string;
  channel_endpoint_sid: string;
  date_created: Date;
  url: string;
}

export class CustomerProfilesChannelEndpointAssignmentInstance {
  protected _solution: CustomerProfilesChannelEndpointAssignmentContextSolution;
  protected _context?: CustomerProfilesChannelEndpointAssignmentContext;

  constructor(
    protected _version: V1,
    payload: CustomerProfilesChannelEndpointAssignmentResource,
    customerProfileSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.customerProfileSid = payload.customer_profile_sid;
    this.accountSid = payload.account_sid;
    this.channelEndpointType = payload.channel_endpoint_type;
    this.channelEndpointSid = payload.channel_endpoint_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { customerProfileSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Item Assignment resource.
   */
  sid: string;
  /**
   * The unique string that we created to identify the CustomerProfile resource.
   */
  customerProfileSid: string;
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

  private get _proxy(): CustomerProfilesChannelEndpointAssignmentContext {
    this._context =
      this._context ||
      new CustomerProfilesChannelEndpointAssignmentContextImpl(
        this._version,
        this._solution.customerProfileSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a CustomerProfilesChannelEndpointAssignmentInstance
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
   * Fetch a CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomerProfilesChannelEndpointAssignmentInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesChannelEndpointAssignmentInstance
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance> {
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
      customerProfileSid: this.customerProfileSid,
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

export interface CustomerProfilesChannelEndpointAssignmentSolution {
  customerProfileSid: string;
}

export interface CustomerProfilesChannelEndpointAssignmentListInstance {
  _version: V1;
  _solution: CustomerProfilesChannelEndpointAssignmentSolution;
  _uri: string;

  (sid: string): CustomerProfilesChannelEndpointAssignmentContext;
  get(sid: string): CustomerProfilesChannelEndpointAssignmentContext;

  /**
   * Create a CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomerProfilesChannelEndpointAssignmentInstance
   */
  create(
    params: CustomerProfilesChannelEndpointAssignmentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: CustomerProfilesChannelEndpointAssignmentInstance
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;

  /**
   * Streams CustomerProfilesChannelEndpointAssignmentInstance records from the API.
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
   * @param { CustomerProfilesChannelEndpointAssignmentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: CustomerProfilesChannelEndpointAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: CustomerProfilesChannelEndpointAssignmentListInstanceEachOptions,
    callback?: (
      item: CustomerProfilesChannelEndpointAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
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
      items: CustomerProfilesChannelEndpointAssignmentPage
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
  /**
   * Lists CustomerProfilesChannelEndpointAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesChannelEndpointAssignmentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentInstance[]
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance[]>;
  list(
    params: CustomerProfilesChannelEndpointAssignmentListInstanceOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentInstance[]
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance[]>;
  /**
   * Retrieve a single page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesChannelEndpointAssignmentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentPage
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
  page(
    params: CustomerProfilesChannelEndpointAssignmentListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentPage
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CustomerProfilesChannelEndpointAssignmentListInstance(
  version: V1,
  customerProfileSid: string
): CustomerProfilesChannelEndpointAssignmentListInstance {
  if (!isValidPathParam(customerProfileSid)) {
    throw new Error("Parameter 'customerProfileSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as CustomerProfilesChannelEndpointAssignmentListInstance;

  instance.get = function get(
    sid
  ): CustomerProfilesChannelEndpointAssignmentContext {
    return new CustomerProfilesChannelEndpointAssignmentContextImpl(
      version,
      customerProfileSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { customerProfileSid };
  instance._uri = `/CustomerProfiles/${customerProfileSid}/ChannelEndpointAssignments`;

  instance.create = function create(
    params: CustomerProfilesChannelEndpointAssignmentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentInstance
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance> {
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
        new CustomerProfilesChannelEndpointAssignmentInstance(
          operationVersion,
          payload,
          instance._solution.customerProfileSid
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
      | CustomerProfilesChannelEndpointAssignmentListInstancePageOptions
      | ((
          error: Error | null,
          items: CustomerProfilesChannelEndpointAssignmentPage
        ) => any),
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentPage
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage> {
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
        new CustomerProfilesChannelEndpointAssignmentPage(
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
      items: CustomerProfilesChannelEndpointAssignmentPage
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesChannelEndpointAssignmentPage(
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

export class CustomerProfilesChannelEndpointAssignmentPage extends Page<
  V1,
  CustomerProfilesChannelEndpointAssignmentPayload,
  CustomerProfilesChannelEndpointAssignmentResource,
  CustomerProfilesChannelEndpointAssignmentInstance
> {
  /**
   * Initialize the CustomerProfilesChannelEndpointAssignmentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CustomerProfilesChannelEndpointAssignmentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: CustomerProfilesChannelEndpointAssignmentResource
  ): CustomerProfilesChannelEndpointAssignmentInstance {
    return new CustomerProfilesChannelEndpointAssignmentInstance(
      this._version,
      payload,
      this._solution.customerProfileSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
