"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
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
exports.EnvironmentPage = exports.EnvironmentListInstance = exports.EnvironmentInstance = exports.EnvironmentContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const deployment_1 = require("./environment/deployment");
const log_1 = require("./environment/log");
const variable_1 = require("./environment/variable");
class EnvironmentContextImpl {
    constructor(_version, serviceSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { serviceSid, sid };
        this._uri = `/Services/${serviceSid}/Environments/${sid}`;
    }
    get deployments() {
        this._deployments =
            this._deployments ||
                (0, deployment_1.DeploymentListInstance)(this._version, this._solution.serviceSid, this._solution.sid);
        return this._deployments;
    }
    get logs() {
        this._logs =
            this._logs ||
                (0, log_1.LogListInstance)(this._version, this._solution.serviceSid, this._solution.sid);
        return this._logs;
    }
    get variables() {
        this._variables =
            this._variables ||
                (0, variable_1.VariableListInstance)(this._version, this._solution.serviceSid, this._solution.sid);
        return this._variables;
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
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new EnvironmentInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sid));
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
exports.EnvironmentContextImpl = EnvironmentContextImpl;
class EnvironmentInstance {
    constructor(_version, payload, serviceSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.buildSid = payload.build_sid;
        this.uniqueName = payload.unique_name;
        this.domainSuffix = payload.domain_suffix;
        this.domainName = payload.domain_name;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { serviceSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new EnvironmentContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a EnvironmentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a EnvironmentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed EnvironmentInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Access the deployments.
     */
    deployments() {
        return this._proxy.deployments;
    }
    /**
     * Access the logs.
     */
    logs() {
        return this._proxy.logs;
    }
    /**
     * Access the variables.
     */
    variables() {
        return this._proxy.variables;
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
            buildSid: this.buildSid,
            uniqueName: this.uniqueName,
            domainSuffix: this.domainSuffix,
            domainName: this.domainName,
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
exports.EnvironmentInstance = EnvironmentInstance;
function EnvironmentListInstance(version, serviceSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new EnvironmentContextImpl(version, serviceSid, sid);
    };
    instance._version = version;
    instance._solution = { serviceSid };
    instance._uri = `/Services/${serviceSid}/Environments`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
            throw new Error("Required parameter \"params['uniqueName']\" missing.");
        }
        let data = {};
        data["UniqueName"] = params["uniqueName"];
        if (params["domainSuffix"] !== undefined)
            data["DomainSuffix"] = params["domainSuffix"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new EnvironmentInstance(operationVersion, payload, instance._solution.serviceSid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
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
        operationPromise = operationPromise.then((payload) => new EnvironmentPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new EnvironmentPage(instance._version, payload, instance._solution));
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
exports.EnvironmentListInstance = EnvironmentListInstance;
class EnvironmentPage extends Page_1.default {
    /**
     * Initialize the EnvironmentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of EnvironmentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new EnvironmentInstance(this._version, payload, this._solution.serviceSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.EnvironmentPage = EnvironmentPage;
