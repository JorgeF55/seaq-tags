"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceItemsInstance = exports.ReplaceItemsListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
function ReplaceItemsListInstance(version, bundleSid) {
    if (!(0, utility_1.isValidPathParam)(bundleSid)) {
        throw new Error("Parameter 'bundleSid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { bundleSid };
    instance._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/ReplaceItems`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["fromBundleSid"] === null ||
            params["fromBundleSid"] === undefined) {
            throw new Error("Required parameter \"params['fromBundleSid']\" missing.");
        }
        let data = {};
        data["FromBundleSid"] = params["fromBundleSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ReplaceItemsInstance(operationVersion, payload, instance._solution.bundleSid));
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
exports.ReplaceItemsListInstance = ReplaceItemsListInstance;
class ReplaceItemsInstance {
    constructor(_version, payload, bundleSid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.regulationSid = payload.regulation_sid;
        this.friendlyName = payload.friendly_name;
        this.status = payload.status;
        this.validUntil = deserialize.iso8601DateTime(payload.valid_until);
        this.email = payload.email;
        this.statusCallback = payload.status_callback;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
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
            regulationSid: this.regulationSid,
            friendlyName: this.friendlyName,
            status: this.status,
            validUntil: this.validUntil,
            email: this.email,
            statusCallback: this.statusCallback,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ReplaceItemsInstance = ReplaceItemsInstance;
