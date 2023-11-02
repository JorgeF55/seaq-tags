"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondaryAuthTokenListInstance = exports.SecondaryAuthTokenInstance = exports.SecondaryAuthTokenContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
class SecondaryAuthTokenContextImpl {
    constructor(_version) {
        this._version = _version;
        this._solution = {};
        this._uri = `/AuthTokens/Secondary`;
    }
    create(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
        });
        operationPromise = operationPromise.then((payload) => new SecondaryAuthTokenInstance(operationVersion, payload));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
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
exports.SecondaryAuthTokenContextImpl = SecondaryAuthTokenContextImpl;
class SecondaryAuthTokenInstance {
    constructor(_version, payload) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.secondaryAuthToken = payload.secondary_auth_token;
        this.url = payload.url;
        this._solution = {};
    }
    get _proxy() {
        this._context =
            this._context || new SecondaryAuthTokenContextImpl(this._version);
        return this._context;
    }
    /**
     * Create a SecondaryAuthTokenInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SecondaryAuthTokenInstance
     */
    create(callback) {
        return this._proxy.create(callback);
    }
    /**
     * Remove a SecondaryAuthTokenInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
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
            secondaryAuthToken: this.secondaryAuthToken,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SecondaryAuthTokenInstance = SecondaryAuthTokenInstance;
function SecondaryAuthTokenListInstance(version) {
    const instance = (() => instance.get());
    instance.get = function get() {
        return new SecondaryAuthTokenContextImpl(version);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.SecondaryAuthTokenListInstance = SecondaryAuthTokenListInstance;
