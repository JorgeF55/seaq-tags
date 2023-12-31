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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionStepPage = exports.ExecutionStepListInstance = exports.ExecutionStepInstance = exports.ExecutionStepContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
const executionStepContext_1 = require("./executionStep/executionStepContext");
class ExecutionStepContextImpl {
    constructor(_version, flowSid, executionSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(flowSid)) {
            throw new Error("Parameter 'flowSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(executionSid)) {
            throw new Error("Parameter 'executionSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { flowSid, executionSid, sid };
        this._uri = `/Flows/${flowSid}/Executions/${executionSid}/Steps/${sid}`;
    }
    get stepContext() {
        this._stepContext =
            this._stepContext ||
                (0, executionStepContext_1.ExecutionStepContextListInstance)(this._version, this._solution.flowSid, this._solution.executionSid, this._solution.sid);
        return this._stepContext;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new ExecutionStepInstance(operationVersion, payload, instance._solution.flowSid, instance._solution.executionSid, instance._solution.sid));
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
exports.ExecutionStepContextImpl = ExecutionStepContextImpl;
class ExecutionStepInstance {
    constructor(_version, payload, flowSid, executionSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.flowSid = payload.flow_sid;
        this.executionSid = payload.execution_sid;
        this.name = payload.name;
        this.context = payload.context;
        this.transitionedFrom = payload.transitioned_from;
        this.transitionedTo = payload.transitioned_to;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { flowSid, executionSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ExecutionStepContextImpl(this._version, this._solution.flowSid, this._solution.executionSid, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a ExecutionStepInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ExecutionStepInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Access the stepContext.
     */
    stepContext() {
        return this._proxy.stepContext;
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
            flowSid: this.flowSid,
            executionSid: this.executionSid,
            name: this.name,
            context: this.context,
            transitionedFrom: this.transitionedFrom,
            transitionedTo: this.transitionedTo,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ExecutionStepInstance = ExecutionStepInstance;
function ExecutionStepListInstance(version, flowSid, executionSid) {
    if (!(0, utility_1.isValidPathParam)(flowSid)) {
        throw new Error("Parameter 'flowSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(executionSid)) {
        throw new Error("Parameter 'executionSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ExecutionStepContextImpl(version, flowSid, executionSid, sid);
    };
    instance._version = version;
    instance._solution = { flowSid, executionSid };
    instance._uri = `/Flows/${flowSid}/Executions/${executionSid}/Steps`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["pageSize"] !== undefined)
            data["PageSize"] = params["pageSize"];
        if (params.pageNumber !== undefined)
            data["Page"] = params.pageNumber;
        if (params.pageToken !== undefined)
            data["PageToken"] = params.pageToken;
        const headers = {};
        let operationVersion = version, operationPromise = operationVersion.page({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ExecutionStepPage(operationVersion, payload, instance._solution));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.each = instance._version.each;
    instance.list = instance._version.list;
    instance.getPage = function getPage(targetUrl, callback) {
        const operationPromise = instance._version._domain.twilio.request({
            method: "get",
            uri: targetUrl,
        });
        let pagePromise = operationPromise.then((payload) => new ExecutionStepPage(instance._version, payload, instance._solution));
        pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
        return pagePromise;
    };
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.ExecutionStepListInstance = ExecutionStepListInstance;
class ExecutionStepPage extends Page_1.default {
    /**
     * Initialize the ExecutionStepPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ExecutionStepInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ExecutionStepInstance(this._version, payload, this._solution.flowSid, this._solution.executionSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ExecutionStepPage = ExecutionStepPage;
