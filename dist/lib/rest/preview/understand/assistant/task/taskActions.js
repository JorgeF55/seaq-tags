"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskActionsListInstance = exports.TaskActionsInstance = exports.TaskActionsContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class TaskActionsContextImpl {
    constructor(_version, assistantSid, taskSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(assistantSid)) {
            throw new Error("Parameter 'assistantSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(taskSid)) {
            throw new Error("Parameter 'taskSid' is not valid.");
        }
        this._solution = { assistantSid, taskSid };
        this._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Actions`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new TaskActionsInstance(operationVersion, payload, instance._solution.assistantSid, instance._solution.taskSid));
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
        if (params["actions"] !== undefined)
            data["Actions"] = serialize.object(params["actions"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new TaskActionsInstance(operationVersion, payload, instance._solution.assistantSid, instance._solution.taskSid));
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
exports.TaskActionsContextImpl = TaskActionsContextImpl;
class TaskActionsInstance {
    constructor(_version, payload, assistantSid, taskSid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.assistantSid = payload.assistant_sid;
        this.taskSid = payload.task_sid;
        this.url = payload.url;
        this.data = payload.data;
        this._solution = { assistantSid, taskSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new TaskActionsContextImpl(this._version, this._solution.assistantSid, this._solution.taskSid);
        return this._context;
    }
    /**
     * Fetch a TaskActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskActionsInstance
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
            assistantSid: this.assistantSid,
            taskSid: this.taskSid,
            url: this.url,
            data: this.data,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TaskActionsInstance = TaskActionsInstance;
function TaskActionsListInstance(version, assistantSid, taskSid) {
    if (!(0, utility_1.isValidPathParam)(assistantSid)) {
        throw new Error("Parameter 'assistantSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(taskSid)) {
        throw new Error("Parameter 'taskSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new TaskActionsContextImpl(version, assistantSid, taskSid);
    };
    instance._version = version;
    instance._solution = { assistantSid, taskSid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.TaskActionsListInstance = TaskActionsListInstance;
