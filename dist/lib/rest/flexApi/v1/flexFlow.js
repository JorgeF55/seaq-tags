"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
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
exports.FlexFlowPage = exports.FlexFlowListInstance = exports.FlexFlowInstance = exports.FlexFlowContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
class FlexFlowContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/FlexFlows/${sid}`;
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
        operationPromise = operationPromise.then((payload) => new FlexFlowInstance(operationVersion, payload, instance._solution.sid));
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
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["chatServiceSid"] !== undefined)
            data["ChatServiceSid"] = params["chatServiceSid"];
        if (params["channelType"] !== undefined)
            data["ChannelType"] = params["channelType"];
        if (params["contactIdentity"] !== undefined)
            data["ContactIdentity"] = params["contactIdentity"];
        if (params["enabled"] !== undefined)
            data["Enabled"] = serialize.bool(params["enabled"]);
        if (params["integrationType"] !== undefined)
            data["IntegrationType"] = params["integrationType"];
        if (params["integration.flowSid"] !== undefined)
            data["Integration.FlowSid"] = params["integration.flowSid"];
        if (params["integration.url"] !== undefined)
            data["Integration.Url"] = params["integration.url"];
        if (params["integration.workspaceSid"] !== undefined)
            data["Integration.WorkspaceSid"] = params["integration.workspaceSid"];
        if (params["integration.workflowSid"] !== undefined)
            data["Integration.WorkflowSid"] = params["integration.workflowSid"];
        if (params["integration.channel"] !== undefined)
            data["Integration.Channel"] = params["integration.channel"];
        if (params["integration.timeout"] !== undefined)
            data["Integration.Timeout"] = params["integration.timeout"];
        if (params["integration.priority"] !== undefined)
            data["Integration.Priority"] = params["integration.priority"];
        if (params["integration.creationOnMessage"] !== undefined)
            data["Integration.CreationOnMessage"] = serialize.bool(params["integration.creationOnMessage"]);
        if (params["longLived"] !== undefined)
            data["LongLived"] = serialize.bool(params["longLived"]);
        if (params["janitorEnabled"] !== undefined)
            data["JanitorEnabled"] = serialize.bool(params["janitorEnabled"]);
        if (params["integration.retryCount"] !== undefined)
            data["Integration.RetryCount"] = params["integration.retryCount"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new FlexFlowInstance(operationVersion, payload, instance._solution.sid));
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
exports.FlexFlowContextImpl = FlexFlowContextImpl;
class FlexFlowInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.sid = payload.sid;
        this.friendlyName = payload.friendly_name;
        this.chatServiceSid = payload.chat_service_sid;
        this.channelType = payload.channel_type;
        this.contactIdentity = payload.contact_identity;
        this.enabled = payload.enabled;
        this.integrationType = payload.integration_type;
        this.integration = payload.integration;
        this.longLived = payload.long_lived;
        this.janitorEnabled = payload.janitor_enabled;
        this.url = payload.url;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new FlexFlowContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a FlexFlowInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a FlexFlowInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FlexFlowInstance
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
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            sid: this.sid,
            friendlyName: this.friendlyName,
            chatServiceSid: this.chatServiceSid,
            channelType: this.channelType,
            contactIdentity: this.contactIdentity,
            enabled: this.enabled,
            integrationType: this.integrationType,
            integration: this.integration,
            longLived: this.longLived,
            janitorEnabled: this.janitorEnabled,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.FlexFlowInstance = FlexFlowInstance;
function FlexFlowListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new FlexFlowContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/FlexFlows`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        if (params["chatServiceSid"] === null ||
            params["chatServiceSid"] === undefined) {
            throw new Error("Required parameter \"params['chatServiceSid']\" missing.");
        }
        if (params["channelType"] === null || params["channelType"] === undefined) {
            throw new Error("Required parameter \"params['channelType']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        data["ChatServiceSid"] = params["chatServiceSid"];
        data["ChannelType"] = params["channelType"];
        if (params["contactIdentity"] !== undefined)
            data["ContactIdentity"] = params["contactIdentity"];
        if (params["enabled"] !== undefined)
            data["Enabled"] = serialize.bool(params["enabled"]);
        if (params["integrationType"] !== undefined)
            data["IntegrationType"] = params["integrationType"];
        if (params["integration.flowSid"] !== undefined)
            data["Integration.FlowSid"] = params["integration.flowSid"];
        if (params["integration.url"] !== undefined)
            data["Integration.Url"] = params["integration.url"];
        if (params["integration.workspaceSid"] !== undefined)
            data["Integration.WorkspaceSid"] = params["integration.workspaceSid"];
        if (params["integration.workflowSid"] !== undefined)
            data["Integration.WorkflowSid"] = params["integration.workflowSid"];
        if (params["integration.channel"] !== undefined)
            data["Integration.Channel"] = params["integration.channel"];
        if (params["integration.timeout"] !== undefined)
            data["Integration.Timeout"] = params["integration.timeout"];
        if (params["integration.priority"] !== undefined)
            data["Integration.Priority"] = params["integration.priority"];
        if (params["integration.creationOnMessage"] !== undefined)
            data["Integration.CreationOnMessage"] = serialize.bool(params["integration.creationOnMessage"]);
        if (params["longLived"] !== undefined)
            data["LongLived"] = serialize.bool(params["longLived"]);
        if (params["janitorEnabled"] !== undefined)
            data["JanitorEnabled"] = serialize.bool(params["janitorEnabled"]);
        if (params["integration.retryCount"] !== undefined)
            data["Integration.RetryCount"] = params["integration.retryCount"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new FlexFlowInstance(operationVersion, payload));
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
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
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
        operationPromise = operationPromise.then((payload) => new FlexFlowPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new FlexFlowPage(instance._version, payload, instance._solution));
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
exports.FlexFlowListInstance = FlexFlowListInstance;
class FlexFlowPage extends Page_1.default {
    /**
     * Initialize the FlexFlowPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of FlexFlowInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new FlexFlowInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.FlexFlowPage = FlexFlowPage;
