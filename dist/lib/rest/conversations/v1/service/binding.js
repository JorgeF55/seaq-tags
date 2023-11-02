"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
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
exports.BindingPage = exports.BindingListInstance = exports.BindingInstance = exports.BindingContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class BindingContextImpl {
    constructor(_version, chatServiceSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(chatServiceSid)) {
            throw new Error("Parameter 'chatServiceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { chatServiceSid, sid };
        this._uri = `/Services/${chatServiceSid}/Bindings/${sid}`;
    }
    remove(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.remove({
            uri: instance._uri,
            method: "delete",
        });
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new BindingInstance(operationVersion, payload, instance._solution.chatServiceSid, instance._solution.sid));
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
exports.BindingContextImpl = BindingContextImpl;
class BindingInstance {
    constructor(_version, payload, chatServiceSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.chatServiceSid = payload.chat_service_sid;
        this.credentialSid = payload.credential_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.endpoint = payload.endpoint;
        this.identity = payload.identity;
        this.bindingType = payload.binding_type;
        this.messageTypes = payload.message_types;
        this.url = payload.url;
        this._solution = { chatServiceSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new BindingContextImpl(this._version, this._solution.chatServiceSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a BindingInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a BindingInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed BindingInstance
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
            sid: this.sid,
            accountSid: this.accountSid,
            chatServiceSid: this.chatServiceSid,
            credentialSid: this.credentialSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            endpoint: this.endpoint,
            identity: this.identity,
            bindingType: this.bindingType,
            messageTypes: this.messageTypes,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.BindingInstance = BindingInstance;
function BindingListInstance(version, chatServiceSid) {
    if (!(0, utility_1.isValidPathParam)(chatServiceSid)) {
        throw new Error("Parameter 'chatServiceSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new BindingContextImpl(version, chatServiceSid, sid);
    };
    instance._version = version;
    instance._solution = { chatServiceSid };
    instance._uri = `/Services/${chatServiceSid}/Bindings`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["bindingType"] !== undefined)
            data["BindingType"] = serialize.map(params["bindingType"], (e) => e);
        if (params["identity"] !== undefined)
            data["Identity"] = serialize.map(params["identity"], (e) => e);
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
        operationPromise = operationPromise.then((payload) => new BindingPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new BindingPage(instance._version, payload, instance._solution));
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
exports.BindingListInstance = BindingListInstance;
class BindingPage extends Page_1.default {
    /**
     * Initialize the BindingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of BindingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new BindingInstance(this._version, payload, this._solution.chatServiceSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.BindingPage = BindingPage;
