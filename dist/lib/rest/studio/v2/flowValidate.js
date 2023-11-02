"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowValidateInstance = exports.FlowValidateListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
function FlowValidateListInstance(version) {
    const instance = {};
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Flows/Validate`;
    instance.update = function update(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        if (params["status"] === null || params["status"] === undefined) {
            throw new Error("Required parameter \"params['status']\" missing.");
        }
        if (params["definition"] === null || params["definition"] === undefined) {
            throw new Error("Required parameter \"params['definition']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        data["Status"] = params["status"];
        data["Definition"] = serialize.object(params["definition"]);
        if (params["commitMessage"] !== undefined)
            data["CommitMessage"] = params["commitMessage"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new FlowValidateInstance(operationVersion, payload));
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
exports.FlowValidateListInstance = FlowValidateListInstance;
class FlowValidateInstance {
    constructor(_version, payload) {
        this._version = _version;
        this.valid = payload.valid;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            valid: this.valid,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.FlowValidateInstance = FlowValidateInstance;
