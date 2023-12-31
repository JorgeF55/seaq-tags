"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowStatisticsListInstance = exports.WorkflowStatisticsInstance = exports.WorkflowStatisticsContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class WorkflowStatisticsContextImpl {
    constructor(_version, workspaceSid, workflowSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
            throw new Error("Parameter 'workspaceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(workflowSid)) {
            throw new Error("Parameter 'workflowSid' is not valid.");
        }
        this._solution = { workspaceSid, workflowSid };
        this._uri = `/Workspaces/${workspaceSid}/Workflows/${workflowSid}/Statistics`;
    }
    fetch(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["minutes"] !== undefined)
            data["Minutes"] = params["minutes"];
        if (params["startDate"] !== undefined)
            data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
        if (params["endDate"] !== undefined)
            data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
        if (params["taskChannel"] !== undefined)
            data["TaskChannel"] = params["taskChannel"];
        if (params["splitByWaitTime"] !== undefined)
            data["SplitByWaitTime"] = params["splitByWaitTime"];
        const headers = {};
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new WorkflowStatisticsInstance(operationVersion, payload, instance._solution.workspaceSid, instance._solution.workflowSid));
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
exports.WorkflowStatisticsContextImpl = WorkflowStatisticsContextImpl;
class WorkflowStatisticsInstance {
    constructor(_version, payload, workspaceSid, workflowSid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.cumulative = payload.cumulative;
        this.realtime = payload.realtime;
        this.workflowSid = payload.workflow_sid;
        this.workspaceSid = payload.workspace_sid;
        this.url = payload.url;
        this._solution = { workspaceSid, workflowSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new WorkflowStatisticsContextImpl(this._version, this._solution.workspaceSid, this._solution.workflowSid);
        return this._context;
    }
    fetch(params, callback) {
        return this._proxy.fetch(params, callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            cumulative: this.cumulative,
            realtime: this.realtime,
            workflowSid: this.workflowSid,
            workspaceSid: this.workspaceSid,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.WorkflowStatisticsInstance = WorkflowStatisticsInstance;
function WorkflowStatisticsListInstance(version, workspaceSid, workflowSid) {
    if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
        throw new Error("Parameter 'workspaceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(workflowSid)) {
        throw new Error("Parameter 'workflowSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new WorkflowStatisticsContextImpl(version, workspaceSid, workflowSid);
    };
    instance._version = version;
    instance._solution = { workspaceSid, workflowSid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.WorkflowStatisticsListInstance = WorkflowStatisticsListInstance;
