"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Bulkexports
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportConfigurationListInstance = exports.ExportConfigurationInstance = exports.ExportConfigurationContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
class ExportConfigurationContextImpl {
    constructor(_version, resourceType) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(resourceType)) {
            throw new Error("Parameter 'resourceType' is not valid.");
        }
        this._solution = { resourceType };
        this._uri = `/Exports/${resourceType}/Configuration`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new ExportConfigurationInstance(operationVersion, payload, instance._solution.resourceType));
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
        if (params["enabled"] !== undefined)
            data["Enabled"] = serialize.bool(params["enabled"]);
        if (params["webhookUrl"] !== undefined)
            data["WebhookUrl"] = params["webhookUrl"];
        if (params["webhookMethod"] !== undefined)
            data["WebhookMethod"] = params["webhookMethod"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ExportConfigurationInstance(operationVersion, payload, instance._solution.resourceType));
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
exports.ExportConfigurationContextImpl = ExportConfigurationContextImpl;
class ExportConfigurationInstance {
    constructor(_version, payload, resourceType) {
        this._version = _version;
        this.enabled = payload.enabled;
        this.webhookUrl = payload.webhook_url;
        this.webhookMethod = payload.webhook_method;
        this.resourceType = payload.resource_type;
        this.url = payload.url;
        this._solution = { resourceType: resourceType || this.resourceType };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ExportConfigurationContextImpl(this._version, this._solution.resourceType);
        return this._context;
    }
    /**
     * Fetch a ExportConfigurationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ExportConfigurationInstance
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
            enabled: this.enabled,
            webhookUrl: this.webhookUrl,
            webhookMethod: this.webhookMethod,
            resourceType: this.resourceType,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ExportConfigurationInstance = ExportConfigurationInstance;
function ExportConfigurationListInstance(version) {
    const instance = ((resourceType) => instance.get(resourceType));
    instance.get = function get(resourceType) {
        return new ExportConfigurationContextImpl(version, resourceType);
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
exports.ExportConfigurationListInstance = ExportConfigurationListInstance;
