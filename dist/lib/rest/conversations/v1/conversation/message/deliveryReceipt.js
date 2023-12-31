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
exports.DeliveryReceiptPage = exports.DeliveryReceiptListInstance = exports.DeliveryReceiptInstance = exports.DeliveryReceiptContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class DeliveryReceiptContextImpl {
    constructor(_version, conversationSid, messageSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(conversationSid)) {
            throw new Error("Parameter 'conversationSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(messageSid)) {
            throw new Error("Parameter 'messageSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { conversationSid, messageSid, sid };
        this._uri = `/Conversations/${conversationSid}/Messages/${messageSid}/Receipts/${sid}`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new DeliveryReceiptInstance(operationVersion, payload, instance._solution.conversationSid, instance._solution.messageSid, instance._solution.sid));
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
exports.DeliveryReceiptContextImpl = DeliveryReceiptContextImpl;
class DeliveryReceiptInstance {
    constructor(_version, payload, conversationSid, messageSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.conversationSid = payload.conversation_sid;
        this.sid = payload.sid;
        this.messageSid = payload.message_sid;
        this.channelMessageSid = payload.channel_message_sid;
        this.participantSid = payload.participant_sid;
        this.status = payload.status;
        this.errorCode = deserialize.integer(payload.error_code);
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this._solution = { conversationSid, messageSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new DeliveryReceiptContextImpl(this._version, this._solution.conversationSid, this._solution.messageSid, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a DeliveryReceiptInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DeliveryReceiptInstance
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
            conversationSid: this.conversationSid,
            sid: this.sid,
            messageSid: this.messageSid,
            channelMessageSid: this.channelMessageSid,
            participantSid: this.participantSid,
            status: this.status,
            errorCode: this.errorCode,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.DeliveryReceiptInstance = DeliveryReceiptInstance;
function DeliveryReceiptListInstance(version, conversationSid, messageSid) {
    if (!(0, utility_1.isValidPathParam)(conversationSid)) {
        throw new Error("Parameter 'conversationSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(messageSid)) {
        throw new Error("Parameter 'messageSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new DeliveryReceiptContextImpl(version, conversationSid, messageSid, sid);
    };
    instance._version = version;
    instance._solution = { conversationSid, messageSid };
    instance._uri = `/Conversations/${conversationSid}/Messages/${messageSid}/Receipts`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
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
        operationPromise = operationPromise.then((payload) => new DeliveryReceiptPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new DeliveryReceiptPage(instance._version, payload, instance._solution));
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
exports.DeliveryReceiptListInstance = DeliveryReceiptListInstance;
class DeliveryReceiptPage extends Page_1.default {
    /**
     * Initialize the DeliveryReceiptPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of DeliveryReceiptInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new DeliveryReceiptInstance(this._version, payload, this._solution.conversationSid, this._solution.messageSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.DeliveryReceiptPage = DeliveryReceiptPage;
