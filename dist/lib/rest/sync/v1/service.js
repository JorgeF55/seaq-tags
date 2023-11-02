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
exports.ServicePage = exports.ServiceListInstance = exports.ServiceInstance = exports.ServiceContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const document_1 = require("./service/document");
const syncList_1 = require("./service/syncList");
const syncMap_1 = require("./service/syncMap");
const syncStream_1 = require("./service/syncStream");
class ServiceContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Services/${sid}`;
    }
    get documents() {
        this._documents =
            this._documents ||
                (0, document_1.DocumentListInstance)(this._version, this._solution.sid);
        return this._documents;
    }
    get syncLists() {
        this._syncLists =
            this._syncLists ||
                (0, syncList_1.SyncListListInstance)(this._version, this._solution.sid);
        return this._syncLists;
    }
    get syncMaps() {
        this._syncMaps =
            this._syncMaps || (0, syncMap_1.SyncMapListInstance)(this._version, this._solution.sid);
        return this._syncMaps;
    }
    get syncStreams() {
        this._syncStreams =
            this._syncStreams ||
                (0, syncStream_1.SyncStreamListInstance)(this._version, this._solution.sid);
        return this._syncStreams;
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
        operationPromise = operationPromise.then((payload) => new ServiceInstance(operationVersion, payload, instance._solution.sid));
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
        if (params["webhookUrl"] !== undefined)
            data["WebhookUrl"] = params["webhookUrl"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["reachabilityWebhooksEnabled"] !== undefined)
            data["ReachabilityWebhooksEnabled"] = serialize.bool(params["reachabilityWebhooksEnabled"]);
        if (params["aclEnabled"] !== undefined)
            data["AclEnabled"] = serialize.bool(params["aclEnabled"]);
        if (params["reachabilityDebouncingEnabled"] !== undefined)
            data["ReachabilityDebouncingEnabled"] = serialize.bool(params["reachabilityDebouncingEnabled"]);
        if (params["reachabilityDebouncingWindow"] !== undefined)
            data["ReachabilityDebouncingWindow"] =
                params["reachabilityDebouncingWindow"];
        if (params["webhooksFromRestEnabled"] !== undefined)
            data["WebhooksFromRestEnabled"] = serialize.bool(params["webhooksFromRestEnabled"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ServiceInstance(operationVersion, payload, instance._solution.sid));
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
exports.ServiceContextImpl = ServiceContextImpl;
class ServiceInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.uniqueName = payload.unique_name;
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this.webhookUrl = payload.webhook_url;
        this.webhooksFromRestEnabled = payload.webhooks_from_rest_enabled;
        this.reachabilityWebhooksEnabled = payload.reachability_webhooks_enabled;
        this.aclEnabled = payload.acl_enabled;
        this.reachabilityDebouncingEnabled =
            payload.reachability_debouncing_enabled;
        this.reachabilityDebouncingWindow = deserialize.integer(payload.reachability_debouncing_window);
        this.links = payload.links;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ServiceContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a ServiceInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a ServiceInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ServiceInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the documents.
     */
    documents() {
        return this._proxy.documents;
    }
    /**
     * Access the syncLists.
     */
    syncLists() {
        return this._proxy.syncLists;
    }
    /**
     * Access the syncMaps.
     */
    syncMaps() {
        return this._proxy.syncMaps;
    }
    /**
     * Access the syncStreams.
     */
    syncStreams() {
        return this._proxy.syncStreams;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            uniqueName: this.uniqueName,
            accountSid: this.accountSid,
            friendlyName: this.friendlyName,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
            webhookUrl: this.webhookUrl,
            webhooksFromRestEnabled: this.webhooksFromRestEnabled,
            reachabilityWebhooksEnabled: this.reachabilityWebhooksEnabled,
            aclEnabled: this.aclEnabled,
            reachabilityDebouncingEnabled: this.reachabilityDebouncingEnabled,
            reachabilityDebouncingWindow: this.reachabilityDebouncingWindow,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ServiceInstance = ServiceInstance;
function ServiceListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ServiceContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Services`;
    instance.create = function create(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["webhookUrl"] !== undefined)
            data["WebhookUrl"] = params["webhookUrl"];
        if (params["reachabilityWebhooksEnabled"] !== undefined)
            data["ReachabilityWebhooksEnabled"] = serialize.bool(params["reachabilityWebhooksEnabled"]);
        if (params["aclEnabled"] !== undefined)
            data["AclEnabled"] = serialize.bool(params["aclEnabled"]);
        if (params["reachabilityDebouncingEnabled"] !== undefined)
            data["ReachabilityDebouncingEnabled"] = serialize.bool(params["reachabilityDebouncingEnabled"]);
        if (params["reachabilityDebouncingWindow"] !== undefined)
            data["ReachabilityDebouncingWindow"] =
                params["reachabilityDebouncingWindow"];
        if (params["webhooksFromRestEnabled"] !== undefined)
            data["WebhooksFromRestEnabled"] = serialize.bool(params["webhooksFromRestEnabled"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ServiceInstance(operationVersion, payload));
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
        operationPromise = operationPromise.then((payload) => new ServicePage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new ServicePage(instance._version, payload, instance._solution));
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
exports.ServiceListInstance = ServiceListInstance;
class ServicePage extends Page_1.default {
    /**
     * Initialize the ServicePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ServiceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ServiceInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ServicePage = ServicePage;
