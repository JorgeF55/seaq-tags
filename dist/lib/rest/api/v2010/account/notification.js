"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPage = exports.NotificationListInstance = exports.NotificationInstance = exports.NotificationContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class NotificationContextImpl {
    constructor(_version, accountSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, sid };
        this._uri = `/Accounts/${accountSid}/Notifications/${sid}.json`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new NotificationInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
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
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.NotificationContextImpl = NotificationContextImpl;
class NotificationInstance {
    constructor(_version, payload, accountSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.apiVersion = payload.api_version;
        this.callSid = payload.call_sid;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.errorCode = payload.error_code;
        this.log = payload.log;
        this.messageDate = deserialize.rfc2822DateTime(payload.message_date);
        this.messageText = payload.message_text;
        this.moreInfo = payload.more_info;
        this.requestMethod = payload.request_method;
        this.requestUrl = payload.request_url;
        this.requestVariables = payload.request_variables;
        this.responseBody = payload.response_body;
        this.responseHeaders = payload.response_headers;
        this.sid = payload.sid;
        this.uri = payload.uri;
        this._solution = { accountSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new NotificationContextImpl(this._version, this._solution.accountSid, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a NotificationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed NotificationInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            apiVersion: this.apiVersion,
            callSid: this.callSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            errorCode: this.errorCode,
            log: this.log,
            messageDate: this.messageDate,
            messageText: this.messageText,
            moreInfo: this.moreInfo,
            requestMethod: this.requestMethod,
            requestUrl: this.requestUrl,
            requestVariables: this.requestVariables,
            responseBody: this.responseBody,
            responseHeaders: this.responseHeaders,
            sid: this.sid,
            uri: this.uri,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.NotificationInstance = NotificationInstance;
function NotificationListInstance(version, accountSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new NotificationContextImpl(version, accountSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid };
    instance._uri = `/Accounts/${accountSid}/Notifications.json`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["log"] !== undefined)
            data["Log"] = params["log"];
        if (params["messageDate"] !== undefined)
            data["MessageDate"] = serialize.iso8601Date(params["messageDate"]);
        if (params["messageDateBefore"] !== undefined)
            data["MessageDate<"] = serialize.iso8601Date(params["messageDateBefore"]);
        if (params["messageDateAfter"] !== undefined)
            data["MessageDate>"] = serialize.iso8601Date(params["messageDateAfter"]);
        if (params["pageSize"] !== undefined)
            data["PageSize"] = params["pageSize"];
        if (params.pageNumber !== undefined)
            data["Page"] = params.pageNumber;
        if (params.pageToken !== undefined)
            data["PageToken"] = params.pageToken;
        const headers = {};
        let operationVersion = version, operationPromise = operationVersion.page({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new NotificationPage(operationVersion, payload, instance._solution));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.each = instance._version.each;
    instance.list = instance._version.list;
    instance.getPage = function getPage(targetUrl, callback) {
        const operationPromise = instance._version._domain.twilio.request({
            method: "get",
            uri: targetUrl,
        });
        let pagePromise = operationPromise.then((payload) => new NotificationPage(instance._version, payload, instance._solution));
        pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
        return pagePromise;
    };
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.NotificationListInstance = NotificationListInstance;
class NotificationPage extends Page_1.default {
    /**
     * Initialize the NotificationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of NotificationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new NotificationInstance(this._version, payload, this._solution.accountSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.NotificationPage = NotificationPage;