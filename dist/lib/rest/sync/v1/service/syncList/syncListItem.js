"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Sync
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
exports.SyncListItemPage = exports.SyncListItemListInstance = exports.SyncListItemInstance = exports.SyncListItemContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class SyncListItemContextImpl {
    constructor(_version, serviceSid, listSid, index) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(listSid)) {
            throw new Error("Parameter 'listSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(index)) {
            throw new Error("Parameter 'index' is not valid.");
        }
        this._solution = { serviceSid, listSid, index };
        this._uri = `/Services/${serviceSid}/Lists/${listSid}/Items/${index}`;
    }
    remove(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        const headers = {};
        if (params["ifMatch"] !== undefined)
            headers["If-Match"] = params["ifMatch"];
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.remove({
            uri: instance._uri,
            method: "delete",
            params: data,
            headers,
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
        operationPromise = operationPromise.then((payload) => new SyncListItemInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.listSid, instance._solution.index));
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
        if (params["data"] !== undefined)
            data["Data"] = serialize.object(params["data"]);
        if (params["ttl"] !== undefined)
            data["Ttl"] = params["ttl"];
        if (params["itemTtl"] !== undefined)
            data["ItemTtl"] = params["itemTtl"];
        if (params["collectionTtl"] !== undefined)
            data["CollectionTtl"] = params["collectionTtl"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        if (params["ifMatch"] !== undefined)
            headers["If-Match"] = params["ifMatch"];
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SyncListItemInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.listSid, instance._solution.index));
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
exports.SyncListItemContextImpl = SyncListItemContextImpl;
class SyncListItemInstance {
    constructor(_version, payload, serviceSid, listSid, index) {
        this._version = _version;
        this.index = deserialize.integer(payload.index);
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.listSid = payload.list_sid;
        this.url = payload.url;
        this.revision = payload.revision;
        this.data = payload.data;
        this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.createdBy = payload.created_by;
        this._solution = { serviceSid, listSid, index: index || this.index };
    }
    get _proxy() {
        this._context =
            this._context ||
                new SyncListItemContextImpl(this._version, this._solution.serviceSid, this._solution.listSid, this._solution.index);
        return this._context;
    }
    remove(params, callback) {
        return this._proxy.remove(params, callback);
    }
    /**
     * Fetch a SyncListItemInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SyncListItemInstance
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
            index: this.index,
            accountSid: this.accountSid,
            serviceSid: this.serviceSid,
            listSid: this.listSid,
            url: this.url,
            revision: this.revision,
            data: this.data,
            dateExpires: this.dateExpires,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            createdBy: this.createdBy,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SyncListItemInstance = SyncListItemInstance;
function SyncListItemListInstance(version, serviceSid, listSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(listSid)) {
        throw new Error("Parameter 'listSid' is not valid.");
    }
    const instance = ((index) => instance.get(index));
    instance.get = function get(index) {
        return new SyncListItemContextImpl(version, serviceSid, listSid, index);
    };
    instance._version = version;
    instance._solution = { serviceSid, listSid };
    instance._uri = `/Services/${serviceSid}/Lists/${listSid}/Items`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["data"] === null || params["data"] === undefined) {
            throw new Error("Required parameter \"params['data']\" missing.");
        }
        let data = {};
        data["Data"] = serialize.object(params["data"]);
        if (params["ttl"] !== undefined)
            data["Ttl"] = params["ttl"];
        if (params["itemTtl"] !== undefined)
            data["ItemTtl"] = params["itemTtl"];
        if (params["collectionTtl"] !== undefined)
            data["CollectionTtl"] = params["collectionTtl"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SyncListItemInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.listSid));
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
        if (params["order"] !== undefined)
            data["Order"] = params["order"];
        if (params["from"] !== undefined)
            data["From"] = params["from"];
        if (params["bounds"] !== undefined)
            data["Bounds"] = params["bounds"];
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
        operationPromise = operationPromise.then((payload) => new SyncListItemPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new SyncListItemPage(instance._version, payload, instance._solution));
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
exports.SyncListItemListInstance = SyncListItemListInstance;
class SyncListItemPage extends Page_1.default {
    /**
     * Initialize the SyncListItemPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of SyncListItemInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new SyncListItemInstance(this._version, payload, this._solution.serviceSid, this._solution.listSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SyncListItemPage = SyncListItemPage;
