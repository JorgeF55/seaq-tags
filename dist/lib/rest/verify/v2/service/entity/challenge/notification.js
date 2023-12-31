"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationInstance = exports.NotificationListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
const utility_1 = require("../../../../../../base/utility");
function NotificationListInstance(version, serviceSid, identity, challengeSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(identity)) {
        throw new Error("Parameter 'identity' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(challengeSid)) {
        throw new Error("Parameter 'challengeSid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { serviceSid, identity, challengeSid };
    instance._uri = `/Services/${serviceSid}/Entities/${identity}/Challenges/${challengeSid}/Notifications`;
    instance.create = function create(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["ttl"] !== undefined)
            data["Ttl"] = params["ttl"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new NotificationInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.identity, instance._solution.challengeSid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
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
class NotificationInstance {
    constructor(_version, payload, serviceSid, identity, challengeSid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.entitySid = payload.entity_sid;
        this.identity = payload.identity;
        this.challengeSid = payload.challenge_sid;
        this.priority = payload.priority;
        this.ttl = deserialize.integer(payload.ttl);
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
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
            serviceSid: this.serviceSid,
            entitySid: this.entitySid,
            identity: this.identity,
            challengeSid: this.challengeSid,
            priority: this.priority,
            ttl: this.ttl,
            dateCreated: this.dateCreated,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.NotificationInstance = NotificationInstance;
