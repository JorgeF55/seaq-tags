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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackListInstance = exports.FeedbackInstance = exports.FeedbackContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class FeedbackContextImpl {
    constructor(_version, accountSid, callSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(callSid)) {
            throw new Error("Parameter 'callSid' is not valid.");
        }
        this._solution = { accountSid, callSid };
        this._uri = `/Accounts/${accountSid}/Calls/${callSid}/Feedback.json`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new FeedbackInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.callSid));
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
        if (params["qualityScore"] !== undefined)
            data["QualityScore"] = params["qualityScore"];
        if (params["issue"] !== undefined)
            data["Issue"] = serialize.map(params["issue"], (e) => e);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new FeedbackInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.callSid));
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
exports.FeedbackContextImpl = FeedbackContextImpl;
class FeedbackInstance {
    constructor(_version, payload, accountSid, callSid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.issues = payload.issues;
        this.qualityScore = deserialize.integer(payload.quality_score);
        this.sid = payload.sid;
        this._solution = { accountSid, callSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new FeedbackContextImpl(this._version, this._solution.accountSid, this._solution.callSid);
        return this._context;
    }
    /**
     * Fetch a FeedbackInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackInstance
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
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            issues: this.issues,
            qualityScore: this.qualityScore,
            sid: this.sid,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.FeedbackInstance = FeedbackInstance;
function FeedbackListInstance(version, accountSid, callSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(callSid)) {
        throw new Error("Parameter 'callSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new FeedbackContextImpl(version, accountSid, callSid);
    };
    instance._version = version;
    instance._solution = { accountSid, callSid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.FeedbackListInstance = FeedbackListInstance;
