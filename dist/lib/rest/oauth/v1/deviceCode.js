"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Oauth
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceCodeInstance = exports.DeviceCodeListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
function DeviceCodeListInstance(version) {
    const instance = {};
    instance._version = version;
    instance._solution = {};
    instance._uri = `/device/code`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["clientSid"] === null || params["clientSid"] === undefined) {
            throw new Error("Required parameter \"params['clientSid']\" missing.");
        }
        if (params["scopes"] === null || params["scopes"] === undefined) {
            throw new Error("Required parameter \"params['scopes']\" missing.");
        }
        let data = {};
        data["ClientSid"] = params["clientSid"];
        data["Scopes"] = serialize.map(params["scopes"], (e) => e);
        if (params["audiences"] !== undefined)
            data["Audiences"] = serialize.map(params["audiences"], (e) => e);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new DeviceCodeInstance(operationVersion, payload));
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
exports.DeviceCodeListInstance = DeviceCodeListInstance;
class DeviceCodeInstance {
    constructor(_version, payload) {
        this._version = _version;
        this.deviceCode = payload.device_code;
        this.userCode = payload.user_code;
        this.verificationUri = payload.verification_uri;
        this.verificationUriComplete = payload.verification_uri_complete;
        this.expiresIn = payload.expires_in;
        this.interval = deserialize.integer(payload.interval);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            deviceCode: this.deviceCode,
            userCode: this.userCode,
            verificationUri: this.verificationUri,
            verificationUriComplete: this.verificationUriComplete,
            expiresIn: this.expiresIn,
            interval: this.interval,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.DeviceCodeInstance = DeviceCodeInstance;