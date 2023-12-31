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
exports.ApplicationPage = exports.ApplicationListInstance = exports.ApplicationInstance = exports.ApplicationContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class ApplicationContextImpl {
    constructor(_version, accountSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, sid };
        this._uri = `/Accounts/${accountSid}/Applications/${sid}.json`;
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
        operationPromise = operationPromise.then((payload) => new ApplicationInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["apiVersion"] !== undefined)
            data["ApiVersion"] = params["apiVersion"];
        if (params["voiceUrl"] !== undefined)
            data["VoiceUrl"] = params["voiceUrl"];
        if (params["voiceMethod"] !== undefined)
            data["VoiceMethod"] = params["voiceMethod"];
        if (params["voiceFallbackUrl"] !== undefined)
            data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
        if (params["voiceFallbackMethod"] !== undefined)
            data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["statusCallbackMethod"] !== undefined)
            data["StatusCallbackMethod"] = params["statusCallbackMethod"];
        if (params["voiceCallerIdLookup"] !== undefined)
            data["VoiceCallerIdLookup"] = serialize.bool(params["voiceCallerIdLookup"]);
        if (params["smsUrl"] !== undefined)
            data["SmsUrl"] = params["smsUrl"];
        if (params["smsMethod"] !== undefined)
            data["SmsMethod"] = params["smsMethod"];
        if (params["smsFallbackUrl"] !== undefined)
            data["SmsFallbackUrl"] = params["smsFallbackUrl"];
        if (params["smsFallbackMethod"] !== undefined)
            data["SmsFallbackMethod"] = params["smsFallbackMethod"];
        if (params["smsStatusCallback"] !== undefined)
            data["SmsStatusCallback"] = params["smsStatusCallback"];
        if (params["messageStatusCallback"] !== undefined)
            data["MessageStatusCallback"] = params["messageStatusCallback"];
        if (params["publicApplicationConnectEnabled"] !== undefined)
            data["PublicApplicationConnectEnabled"] = serialize.bool(params["publicApplicationConnectEnabled"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ApplicationInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
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
exports.ApplicationContextImpl = ApplicationContextImpl;
class ApplicationInstance {
    constructor(_version, payload, accountSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.apiVersion = payload.api_version;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.friendlyName = payload.friendly_name;
        this.messageStatusCallback = payload.message_status_callback;
        this.sid = payload.sid;
        this.smsFallbackMethod = payload.sms_fallback_method;
        this.smsFallbackUrl = payload.sms_fallback_url;
        this.smsMethod = payload.sms_method;
        this.smsStatusCallback = payload.sms_status_callback;
        this.smsUrl = payload.sms_url;
        this.statusCallback = payload.status_callback;
        this.statusCallbackMethod = payload.status_callback_method;
        this.uri = payload.uri;
        this.voiceCallerIdLookup = payload.voice_caller_id_lookup;
        this.voiceFallbackMethod = payload.voice_fallback_method;
        this.voiceFallbackUrl = payload.voice_fallback_url;
        this.voiceMethod = payload.voice_method;
        this.voiceUrl = payload.voice_url;
        this.publicApplicationConnectEnabled =
            payload.public_application_connect_enabled;
        this._solution = { accountSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ApplicationContextImpl(this._version, this._solution.accountSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a ApplicationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a ApplicationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ApplicationInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
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
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            friendlyName: this.friendlyName,
            messageStatusCallback: this.messageStatusCallback,
            sid: this.sid,
            smsFallbackMethod: this.smsFallbackMethod,
            smsFallbackUrl: this.smsFallbackUrl,
            smsMethod: this.smsMethod,
            smsStatusCallback: this.smsStatusCallback,
            smsUrl: this.smsUrl,
            statusCallback: this.statusCallback,
            statusCallbackMethod: this.statusCallbackMethod,
            uri: this.uri,
            voiceCallerIdLookup: this.voiceCallerIdLookup,
            voiceFallbackMethod: this.voiceFallbackMethod,
            voiceFallbackUrl: this.voiceFallbackUrl,
            voiceMethod: this.voiceMethod,
            voiceUrl: this.voiceUrl,
            publicApplicationConnectEnabled: this.publicApplicationConnectEnabled,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ApplicationInstance = ApplicationInstance;
function ApplicationListInstance(version, accountSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ApplicationContextImpl(version, accountSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid };
    instance._uri = `/Accounts/${accountSid}/Applications.json`;
    instance.create = function create(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["apiVersion"] !== undefined)
            data["ApiVersion"] = params["apiVersion"];
        if (params["voiceUrl"] !== undefined)
            data["VoiceUrl"] = params["voiceUrl"];
        if (params["voiceMethod"] !== undefined)
            data["VoiceMethod"] = params["voiceMethod"];
        if (params["voiceFallbackUrl"] !== undefined)
            data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
        if (params["voiceFallbackMethod"] !== undefined)
            data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["statusCallbackMethod"] !== undefined)
            data["StatusCallbackMethod"] = params["statusCallbackMethod"];
        if (params["voiceCallerIdLookup"] !== undefined)
            data["VoiceCallerIdLookup"] = serialize.bool(params["voiceCallerIdLookup"]);
        if (params["smsUrl"] !== undefined)
            data["SmsUrl"] = params["smsUrl"];
        if (params["smsMethod"] !== undefined)
            data["SmsMethod"] = params["smsMethod"];
        if (params["smsFallbackUrl"] !== undefined)
            data["SmsFallbackUrl"] = params["smsFallbackUrl"];
        if (params["smsFallbackMethod"] !== undefined)
            data["SmsFallbackMethod"] = params["smsFallbackMethod"];
        if (params["smsStatusCallback"] !== undefined)
            data["SmsStatusCallback"] = params["smsStatusCallback"];
        if (params["messageStatusCallback"] !== undefined)
            data["MessageStatusCallback"] = params["messageStatusCallback"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["publicApplicationConnectEnabled"] !== undefined)
            data["PublicApplicationConnectEnabled"] = serialize.bool(params["publicApplicationConnectEnabled"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ApplicationInstance(operationVersion, payload, instance._solution.accountSid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
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
        operationPromise = operationPromise.then((payload) => new ApplicationPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new ApplicationPage(instance._version, payload, instance._solution));
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
exports.ApplicationListInstance = ApplicationListInstance;
class ApplicationPage extends Page_1.default {
    /**
     * Initialize the ApplicationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ApplicationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ApplicationInstance(this._version, payload, this._solution.accountSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ApplicationPage = ApplicationPage;
