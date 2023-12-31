"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
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
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const conferenceParticipant_1 = require("./conference/conferenceParticipant");
class ConferenceContextImpl {
    constructor(_version, conferenceSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(conferenceSid)) {
            throw new Error("Parameter 'conferenceSid' is not valid.");
        }
        this._solution = { conferenceSid };
        this._uri = `/Conferences/${conferenceSid}`;
    }
    get conferenceParticipants() {
        this._conferenceParticipants =
            this._conferenceParticipants ||
                (0, conferenceParticipant_1.ConferenceParticipantListInstance)(this._version, this._solution.conferenceSid);
        return this._conferenceParticipants;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new ConferenceInstance(operationVersion, payload, instance._solution.conferenceSid));
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
    constructor(_version, payload, conferenceSid) {
        this._version = _version;
        this.conferenceSid = payload.conference_sid;
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.createTime = deserialize.iso8601DateTime(payload.create_time);
        this.startTime = deserialize.iso8601DateTime(payload.start_time);
        this.endTime = deserialize.iso8601DateTime(payload.end_time);
        this.durationSeconds = deserialize.integer(payload.duration_seconds);
        this.connectDurationSeconds = deserialize.integer(payload.connect_duration_seconds);
        this.status = payload.status;
        this.maxParticipants = deserialize.integer(payload.max_participants);
        this.maxConcurrentParticipants = deserialize.integer(payload.max_concurrent_participants);
        this.uniqueParticipants = deserialize.integer(payload.unique_participants);
        this.endReason = payload.end_reason;
        this.endedBy = payload.ended_by;
        this.mixerRegion = payload.mixer_region;
        this.mixerRegionRequested = payload.mixer_region_requested;
        this.recordingEnabled = payload.recording_enabled;
        this.detectedIssues = payload.detected_issues;
        this.tags = payload.tags;
        this.tagInfo = payload.tag_info;
        this.processingState = payload.processing_state;
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { conferenceSid: conferenceSid || this.conferenceSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ConferenceContextImpl(this._version, this._solution.conferenceSid);
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
    /**
     * Access the conferenceParticipants.
     */
    conferenceParticipants() {
        return this._proxy.conferenceParticipants;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            conferenceSid: this.conferenceSid,
            accountSid: this.accountSid,
            friendlyName: this.friendlyName,
            createTime: this.createTime,
            startTime: this.startTime,
            endTime: this.endTime,
            durationSeconds: this.durationSeconds,
            connectDurationSeconds: this.connectDurationSeconds,
            status: this.status,
            maxParticipants: this.maxParticipants,
            maxConcurrentParticipants: this.maxConcurrentParticipants,
            uniqueParticipants: this.uniqueParticipants,
            endReason: this.endReason,
            endedBy: this.endedBy,
            mixerRegion: this.mixerRegion,
            mixerRegionRequested: this.mixerRegionRequested,
            recordingEnabled: this.recordingEnabled,
            detectedIssues: this.detectedIssues,
            tags: this.tags,
            tagInfo: this.tagInfo,
            processingState: this.processingState,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ConferenceInstance = ConferenceInstance;
function ConferenceListInstance(version) {
    const instance = ((conferenceSid) => instance.get(conferenceSid));
    instance.get = function get(conferenceSid) {
        return new ConferenceContextImpl(version, conferenceSid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Conferences`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["conferenceSid"] !== undefined)
            data["ConferenceSid"] = params["conferenceSid"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
        if (params["createdAfter"] !== undefined)
            data["CreatedAfter"] = params["createdAfter"];
        if (params["createdBefore"] !== undefined)
            data["CreatedBefore"] = params["createdBefore"];
        if (params["mixerRegion"] !== undefined)
            data["MixerRegion"] = params["mixerRegion"];
        if (params["tags"] !== undefined)
            data["Tags"] = params["tags"];
        if (params["subaccount"] !== undefined)
            data["Subaccount"] = params["subaccount"];
        if (params["detectedIssues"] !== undefined)
            data["DetectedIssues"] = params["detectedIssues"];
        if (params["endReason"] !== undefined)
            data["EndReason"] = params["endReason"];
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
        return new ConferenceInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ConferencePage = ConferencePage;
