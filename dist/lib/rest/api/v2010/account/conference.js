"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
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
exports.ConferencePage = exports.ConferenceListInstance = exports.ConferenceInstance = exports.ConferenceContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const participant_1 = require("./conference/participant");
const recording_1 = require("./conference/recording");
class ConferenceContextImpl {
    constructor(_version, accountSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, sid };
        this._uri = `/Accounts/${accountSid}/Conferences/${sid}.json`;
    }
    get participants() {
        this._participants =
            this._participants ||
                (0, participant_1.ParticipantListInstance)(this._version, this._solution.accountSid, this._solution.sid);
        return this._participants;
    }
    get recordings() {
        this._recordings =
            this._recordings ||
                (0, recording_1.RecordingListInstance)(this._version, this._solution.accountSid, this._solution.sid);
        return this._recordings;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new ConferenceInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
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
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
        if (params["announceUrl"] !== undefined)
            data["AnnounceUrl"] = params["announceUrl"];
        if (params["announceMethod"] !== undefined)
            data["AnnounceMethod"] = params["announceMethod"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ConferenceInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
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
exports.ConferenceContextImpl = ConferenceContextImpl;
class ConferenceInstance {
    constructor(_version, payload, accountSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.apiVersion = payload.api_version;
        this.friendlyName = payload.friendly_name;
        this.region = payload.region;
        this.sid = payload.sid;
        this.status = payload.status;
        this.uri = payload.uri;
        this.subresourceUris = payload.subresource_uris;
        this.reasonConferenceEnded = payload.reason_conference_ended;
        this.callSidEndingConference = payload.call_sid_ending_conference;
        this._solution = { accountSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ConferenceContextImpl(this._version, this._solution.accountSid, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a ConferenceInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ConferenceInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the participants.
     */
    participants() {
        return this._proxy.participants;
    }
    /**
     * Access the recordings.
     */
    recordings() {
        return this._proxy.recordings;
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
            apiVersion: this.apiVersion,
            friendlyName: this.friendlyName,
            region: this.region,
            sid: this.sid,
            status: this.status,
            uri: this.uri,
            subresourceUris: this.subresourceUris,
            reasonConferenceEnded: this.reasonConferenceEnded,
            callSidEndingConference: this.callSidEndingConference,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ConferenceInstance = ConferenceInstance;
function ConferenceListInstance(version, accountSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ConferenceContextImpl(version, accountSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid };
    instance._uri = `/Accounts/${accountSid}/Conferences.json`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["dateCreated"] !== undefined)
            data["DateCreated"] = serialize.iso8601Date(params["dateCreated"]);
        if (params["dateCreatedBefore"] !== undefined)
            data["DateCreated<"] = serialize.iso8601Date(params["dateCreatedBefore"]);
        if (params["dateCreatedAfter"] !== undefined)
            data["DateCreated>"] = serialize.iso8601Date(params["dateCreatedAfter"]);
        if (params["dateUpdated"] !== undefined)
            data["DateUpdated"] = serialize.iso8601Date(params["dateUpdated"]);
        if (params["dateUpdatedBefore"] !== undefined)
            data["DateUpdated<"] = serialize.iso8601Date(params["dateUpdatedBefore"]);
        if (params["dateUpdatedAfter"] !== undefined)
            data["DateUpdated>"] = serialize.iso8601Date(params["dateUpdatedAfter"]);
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
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
        operationPromise = operationPromise.then((payload) => new ConferencePage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new ConferencePage(instance._version, payload, instance._solution));
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
exports.ConferenceListInstance = ConferenceListInstance;
class ConferencePage extends Page_1.default {
    /**
     * Initialize the ConferencePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ConferenceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ConferenceInstance(this._version, payload, this._solution.accountSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ConferencePage = ConferencePage;
