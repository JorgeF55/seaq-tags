"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
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
exports.EntityPage = exports.EntityListInstance = exports.EntityInstance = exports.EntityContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const challenge_1 = require("./entity/challenge");
const factor_1 = require("./entity/factor");
const newFactor_1 = require("./entity/newFactor");
class EntityContextImpl {
    constructor(_version, serviceSid, identity) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(identity)) {
            throw new Error("Parameter 'identity' is not valid.");
        }
        this._solution = { serviceSid, identity };
        this._uri = `/Services/${serviceSid}/Entities/${identity}`;
    }
    get challenges() {
        this._challenges =
            this._challenges ||
                (0, challenge_1.ChallengeListInstance)(this._version, this._solution.serviceSid, this._solution.identity);
        return this._challenges;
    }
    get factors() {
        this._factors =
            this._factors ||
                (0, factor_1.FactorListInstance)(this._version, this._solution.serviceSid, this._solution.identity);
        return this._factors;
    }
    get newFactors() {
        this._newFactors =
            this._newFactors ||
                (0, newFactor_1.NewFactorListInstance)(this._version, this._solution.serviceSid, this._solution.identity);
        return this._newFactors;
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
        operationPromise = operationPromise.then((payload) => new EntityInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.identity));
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
exports.EntityContextImpl = EntityContextImpl;
class EntityInstance {
    constructor(_version, payload, serviceSid, identity) {
        this._version = _version;
        this.sid = payload.sid;
        this.identity = payload.identity;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { serviceSid, identity: identity || this.identity };
    }
    get _proxy() {
        this._context =
            this._context ||
                new EntityContextImpl(this._version, this._solution.serviceSid, this._solution.identity);
        return this._context;
    }
    /**
     * Remove a EntityInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a EntityInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed EntityInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Access the challenges.
     */
    challenges() {
        return this._proxy.challenges;
    }
    /**
     * Access the factors.
     */
    factors() {
        return this._proxy.factors;
    }
    /**
     * Access the newFactors.
     */
    newFactors() {
        return this._proxy.newFactors;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            identity: this.identity,
            accountSid: this.accountSid,
            serviceSid: this.serviceSid,
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
exports.EntityInstance = EntityInstance;
function EntityListInstance(version, serviceSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    const instance = ((identity) => instance.get(identity));
    instance.get = function get(identity) {
        return new EntityContextImpl(version, serviceSid, identity);
    };
    instance._version = version;
    instance._solution = { serviceSid };
    instance._uri = `/Services/${serviceSid}/Entities`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["identity"] === null || params["identity"] === undefined) {
            throw new Error("Required parameter \"params['identity']\" missing.");
        }
        let data = {};
        data["Identity"] = params["identity"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new EntityInstance(operationVersion, payload, instance._solution.serviceSid));
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
        operationPromise = operationPromise.then((payload) => new EntityPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new EntityPage(instance._version, payload, instance._solution));
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
exports.EntityListInstance = EntityListInstance;
class EntityPage extends Page_1.default {
    /**
     * Initialize the EntityPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of EntityInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new EntityInstance(this._version, payload, this._solution.serviceSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.EntityPage = EntityPage;
