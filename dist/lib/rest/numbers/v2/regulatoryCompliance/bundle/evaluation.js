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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationPage = exports.EvaluationListInstance = exports.EvaluationInstance = exports.EvaluationContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class EvaluationContextImpl {
    constructor(_version, bundleSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(bundleSid)) {
            throw new Error("Parameter 'bundleSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { bundleSid, sid };
        this._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/Evaluations/${sid}`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new EvaluationInstance(operationVersion, payload, instance._solution.bundleSid, instance._solution.sid));
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
exports.EvaluationContextImpl = EvaluationContextImpl;
class EvaluationInstance {
    constructor(_version, payload, bundleSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.regulationSid = payload.regulation_sid;
        this.bundleSid = payload.bundle_sid;
        this.status = payload.status;
        this.results = payload.results;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.url = payload.url;
        this._solution = { bundleSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new EvaluationContextImpl(this._version, this._solution.bundleSid, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a EvaluationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed EvaluationInstance
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
            sid: this.sid,
            accountSid: this.accountSid,
            regulationSid: this.regulationSid,
            bundleSid: this.bundleSid,
            status: this.status,
            results: this.results,
            dateCreated: this.dateCreated,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.EvaluationInstance = EvaluationInstance;
function EvaluationListInstance(version, bundleSid) {
    if (!(0, utility_1.isValidPathParam)(bundleSid)) {
        throw new Error("Parameter 'bundleSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new EvaluationContextImpl(version, bundleSid, sid);
    };
    instance._version = version;
    instance._solution = { bundleSid };
    instance._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/Evaluations`;
    instance.create = function create(callback) {
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
        });
        operationPromise = operationPromise.then((payload) => new EvaluationInstance(operationVersion, payload, instance._solution.bundleSid));
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
        operationPromise = operationPromise.then((payload) => new EvaluationPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new EvaluationPage(instance._version, payload, instance._solution));
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
exports.EvaluationListInstance = EvaluationListInstance;
class EvaluationPage extends Page_1.default {
    /**
     * Initialize the EvaluationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of EvaluationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new EvaluationInstance(this._version, payload, this._solution.bundleSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.EvaluationPage = EvaluationPage;
