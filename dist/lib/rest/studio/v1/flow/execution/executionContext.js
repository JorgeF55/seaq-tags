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
exports.ExecutionContextListInstance = exports.ExecutionContextInstance = exports.ExecutionContextContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class ExecutionContextContextImpl {
    constructor(_version, flowSid, executionSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(flowSid)) {
            throw new Error("Parameter 'flowSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(executionSid)) {
            throw new Error("Parameter 'executionSid' is not valid.");
        }
        this._solution = { flowSid, executionSid };
        this._uri = `/Flows/${flowSid}/Executions/${executionSid}/Context`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new ExecutionContextInstance(operationVersion, payload, instance._solution.flowSid, instance._solution.executionSid));
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
exports.ExecutionContextContextImpl = ExecutionContextContextImpl;
class ExecutionContextInstance {
    constructor(_version, payload, flowSid, executionSid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.context = payload.context;
        this.flowSid = payload.flow_sid;
        this.executionSid = payload.execution_sid;
        this.url = payload.url;
        this._solution = { flowSid, executionSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ExecutionContextContextImpl(this._version, this._solution.flowSid, this._solution.executionSid);
        return this._context;
    }
    /**
     * Fetch a ExecutionContextInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ExecutionContextInstance
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
            context: this.context,
            flowSid: this.flowSid,
            executionSid: this.executionSid,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ExecutionContextInstance = ExecutionContextInstance;
function ExecutionContextListInstance(version, flowSid, executionSid) {
    if (!(0, utility_1.isValidPathParam)(flowSid)) {
        throw new Error("Parameter 'flowSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(executionSid)) {
        throw new Error("Parameter 'executionSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new ExecutionContextContextImpl(version, flowSid, executionSid);
    };
    instance._version = version;
    instance._solution = { flowSid, executionSid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.ExecutionContextListInstance = ExecutionContextListInstance;
