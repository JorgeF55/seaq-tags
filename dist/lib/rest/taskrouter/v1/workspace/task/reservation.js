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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationPage = exports.ReservationListInstance = exports.ReservationInstance = exports.ReservationContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class ReservationContextImpl {
    constructor(_version, workspaceSid, taskSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
            throw new Error("Parameter 'workspaceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(taskSid)) {
            throw new Error("Parameter 'taskSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { workspaceSid, taskSid, sid };
        this._uri = `/Workspaces/${workspaceSid}/Tasks/${taskSid}/Reservations/${sid}`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new ReservationInstance(operationVersion, payload, instance._solution.workspaceSid, instance._solution.taskSid, instance._solution.sid));
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
        if (params["reservationStatus"] !== undefined)
            data["ReservationStatus"] = params["reservationStatus"];
        if (params["workerActivitySid"] !== undefined)
            data["WorkerActivitySid"] = params["workerActivitySid"];
        if (params["instruction"] !== undefined)
            data["Instruction"] = params["instruction"];
        if (params["dequeuePostWorkActivitySid"] !== undefined)
            data["DequeuePostWorkActivitySid"] = params["dequeuePostWorkActivitySid"];
        if (params["dequeueFrom"] !== undefined)
            data["DequeueFrom"] = params["dequeueFrom"];
        if (params["dequeueRecord"] !== undefined)
            data["DequeueRecord"] = params["dequeueRecord"];
        if (params["dequeueTimeout"] !== undefined)
            data["DequeueTimeout"] = params["dequeueTimeout"];
        if (params["dequeueTo"] !== undefined)
            data["DequeueTo"] = params["dequeueTo"];
        if (params["dequeueStatusCallbackUrl"] !== undefined)
            data["DequeueStatusCallbackUrl"] = params["dequeueStatusCallbackUrl"];
        if (params["callFrom"] !== undefined)
            data["CallFrom"] = params["callFrom"];
        if (params["callRecord"] !== undefined)
            data["CallRecord"] = params["callRecord"];
        if (params["callTimeout"] !== undefined)
            data["CallTimeout"] = params["callTimeout"];
        if (params["callTo"] !== undefined)
            data["CallTo"] = params["callTo"];
        if (params["callUrl"] !== undefined)
            data["CallUrl"] = params["callUrl"];
        if (params["callStatusCallbackUrl"] !== undefined)
            data["CallStatusCallbackUrl"] = params["callStatusCallbackUrl"];
        if (params["callAccept"] !== undefined)
            data["CallAccept"] = serialize.bool(params["callAccept"]);
        if (params["redirectCallSid"] !== undefined)
            data["RedirectCallSid"] = params["redirectCallSid"];
        if (params["redirectAccept"] !== undefined)
            data["RedirectAccept"] = serialize.bool(params["redirectAccept"]);
        if (params["redirectUrl"] !== undefined)
            data["RedirectUrl"] = params["redirectUrl"];
        if (params["to"] !== undefined)
            data["To"] = params["to"];
        if (params["from"] !== undefined)
            data["From"] = params["from"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["statusCallbackMethod"] !== undefined)
            data["StatusCallbackMethod"] = params["statusCallbackMethod"];
        if (params["statusCallbackEvent"] !== undefined)
            data["StatusCallbackEvent"] = serialize.map(params["statusCallbackEvent"], (e) => e);
        if (params["timeout"] !== undefined)
            data["Timeout"] = params["timeout"];
        if (params["record"] !== undefined)
            data["Record"] = serialize.bool(params["record"]);
        if (params["muted"] !== undefined)
            data["Muted"] = serialize.bool(params["muted"]);
        if (params["beep"] !== undefined)
            data["Beep"] = params["beep"];
        if (params["startConferenceOnEnter"] !== undefined)
            data["StartConferenceOnEnter"] = serialize.bool(params["startConferenceOnEnter"]);
        if (params["endConferenceOnExit"] !== undefined)
            data["EndConferenceOnExit"] = serialize.bool(params["endConferenceOnExit"]);
        if (params["waitUrl"] !== undefined)
            data["WaitUrl"] = params["waitUrl"];
        if (params["waitMethod"] !== undefined)
            data["WaitMethod"] = params["waitMethod"];
        if (params["earlyMedia"] !== undefined)
            data["EarlyMedia"] = serialize.bool(params["earlyMedia"]);
        if (params["maxParticipants"] !== undefined)
            data["MaxParticipants"] = params["maxParticipants"];
        if (params["conferenceStatusCallback"] !== undefined)
            data["ConferenceStatusCallback"] = params["conferenceStatusCallback"];
        if (params["conferenceStatusCallbackMethod"] !== undefined)
            data["ConferenceStatusCallbackMethod"] =
                params["conferenceStatusCallbackMethod"];
        if (params["conferenceStatusCallbackEvent"] !== undefined)
            data["ConferenceStatusCallbackEvent"] = serialize.map(params["conferenceStatusCallbackEvent"], (e) => e);
        if (params["conferenceRecord"] !== undefined)
            data["ConferenceRecord"] = params["conferenceRecord"];
        if (params["conferenceTrim"] !== undefined)
            data["ConferenceTrim"] = params["conferenceTrim"];
        if (params["recordingChannels"] !== undefined)
            data["RecordingChannels"] = params["recordingChannels"];
        if (params["recordingStatusCallback"] !== undefined)
            data["RecordingStatusCallback"] = params["recordingStatusCallback"];
        if (params["recordingStatusCallbackMethod"] !== undefined)
            data["RecordingStatusCallbackMethod"] =
                params["recordingStatusCallbackMethod"];
        if (params["conferenceRecordingStatusCallback"] !== undefined)
            data["ConferenceRecordingStatusCallback"] =
                params["conferenceRecordingStatusCallback"];
        if (params["conferenceRecordingStatusCallbackMethod"] !== undefined)
            data["ConferenceRecordingStatusCallbackMethod"] =
                params["conferenceRecordingStatusCallbackMethod"];
        if (params["region"] !== undefined)
            data["Region"] = params["region"];
        if (params["sipAuthUsername"] !== undefined)
            data["SipAuthUsername"] = params["sipAuthUsername"];
        if (params["sipAuthPassword"] !== undefined)
            data["SipAuthPassword"] = params["sipAuthPassword"];
        if (params["dequeueStatusCallbackEvent"] !== undefined)
            data["DequeueStatusCallbackEvent"] = serialize.map(params["dequeueStatusCallbackEvent"], (e) => e);
        if (params["postWorkActivitySid"] !== undefined)
            data["PostWorkActivitySid"] = params["postWorkActivitySid"];
        if (params["supervisorMode"] !== undefined)
            data["SupervisorMode"] = params["supervisorMode"];
        if (params["supervisor"] !== undefined)
            data["Supervisor"] = params["supervisor"];
        if (params["endConferenceOnCustomerExit"] !== undefined)
            data["EndConferenceOnCustomerExit"] = serialize.bool(params["endConferenceOnCustomerExit"]);
        if (params["beepOnCustomerEntrance"] !== undefined)
            data["BeepOnCustomerEntrance"] = serialize.bool(params["beepOnCustomerEntrance"]);
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
        operationPromise = operationPromise.then((payload) => new ReservationInstance(operationVersion, payload, instance._solution.workspaceSid, instance._solution.taskSid, instance._solution.sid));
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
exports.ReservationContextImpl = ReservationContextImpl;
class ReservationInstance {
    constructor(_version, payload, workspaceSid, taskSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.reservationStatus = payload.reservation_status;
        this.sid = payload.sid;
        this.taskSid = payload.task_sid;
        this.workerName = payload.worker_name;
        this.workerSid = payload.worker_sid;
        this.workspaceSid = payload.workspace_sid;
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { workspaceSid, taskSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ReservationContextImpl(this._version, this._solution.workspaceSid, this._solution.taskSid, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a ReservationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ReservationInstance
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
            reservationStatus: this.reservationStatus,
            sid: this.sid,
            taskSid: this.taskSid,
            workerName: this.workerName,
            workerSid: this.workerSid,
            workspaceSid: this.workspaceSid,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ReservationInstance = ReservationInstance;
function ReservationListInstance(version, workspaceSid, taskSid) {
    if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
        throw new Error("Parameter 'workspaceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(taskSid)) {
        throw new Error("Parameter 'taskSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ReservationContextImpl(version, workspaceSid, taskSid, sid);
    };
    instance._version = version;
    instance._solution = { workspaceSid, taskSid };
    instance._uri = `/Workspaces/${workspaceSid}/Tasks/${taskSid}/Reservations`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["reservationStatus"] !== undefined)
            data["ReservationStatus"] = params["reservationStatus"];
        if (params["workerSid"] !== undefined)
            data["WorkerSid"] = params["workerSid"];
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
        operationPromise = operationPromise.then((payload) => new ReservationPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new ReservationPage(instance._version, payload, instance._solution));
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
exports.ReservationListInstance = ReservationListInstance;
class ReservationPage extends Page_1.default {
    /**
     * Initialize the ReservationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ReservationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ReservationInstance(this._version, payload, this._solution.workspaceSid, this._solution.taskSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ReservationPage = ReservationPage;
