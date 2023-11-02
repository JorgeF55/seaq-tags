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
exports.TaskQueuePage = exports.TaskQueueListInstance = exports.TaskQueueInstance = exports.TaskQueueContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const taskQueueCumulativeStatistics_1 = require("./taskQueue/taskQueueCumulativeStatistics");
const taskQueueRealTimeStatistics_1 = require("./taskQueue/taskQueueRealTimeStatistics");
const taskQueueStatistics_1 = require("./taskQueue/taskQueueStatistics");
const taskQueuesStatistics_1 = require("./taskQueue/taskQueuesStatistics");
class TaskQueueContextImpl {
    constructor(_version, workspaceSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
            throw new Error("Parameter 'workspaceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { workspaceSid, sid };
        this._uri = `/Workspaces/${workspaceSid}/TaskQueues/${sid}`;
    }
    get cumulativeStatistics() {
        this._cumulativeStatistics =
            this._cumulativeStatistics ||
                (0, taskQueueCumulativeStatistics_1.TaskQueueCumulativeStatisticsListInstance)(this._version, this._solution.workspaceSid, this._solution.sid);
        return this._cumulativeStatistics;
    }
    get realTimeStatistics() {
        this._realTimeStatistics =
            this._realTimeStatistics ||
                (0, taskQueueRealTimeStatistics_1.TaskQueueRealTimeStatisticsListInstance)(this._version, this._solution.workspaceSid, this._solution.sid);
        return this._realTimeStatistics;
    }
    get statistics() {
        this._statistics =
            this._statistics ||
                (0, taskQueueStatistics_1.TaskQueueStatisticsListInstance)(this._version, this._solution.workspaceSid, this._solution.sid);
        return this._statistics;
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
        operationPromise = operationPromise.then((payload) => new TaskQueueInstance(operationVersion, payload, instance._solution.workspaceSid, instance._solution.sid));
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
        if (params["targetWorkers"] !== undefined)
            data["TargetWorkers"] = params["targetWorkers"];
        if (params["reservationActivitySid"] !== undefined)
            data["ReservationActivitySid"] = params["reservationActivitySid"];
        if (params["assignmentActivitySid"] !== undefined)
            data["AssignmentActivitySid"] = params["assignmentActivitySid"];
        if (params["maxReservedWorkers"] !== undefined)
            data["MaxReservedWorkers"] = params["maxReservedWorkers"];
        if (params["taskOrder"] !== undefined)
            data["TaskOrder"] = params["taskOrder"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new TaskQueueInstance(operationVersion, payload, instance._solution.workspaceSid, instance._solution.sid));
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
exports.TaskQueueContextImpl = TaskQueueContextImpl;
class TaskQueueInstance {
    constructor(_version, payload, workspaceSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.assignmentActivitySid = payload.assignment_activity_sid;
        this.assignmentActivityName = payload.assignment_activity_name;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.friendlyName = payload.friendly_name;
        this.maxReservedWorkers = deserialize.integer(payload.max_reserved_workers);
        this.reservationActivitySid = payload.reservation_activity_sid;
        this.reservationActivityName = payload.reservation_activity_name;
        this.sid = payload.sid;
        this.targetWorkers = payload.target_workers;
        this.taskOrder = payload.task_order;
        this.url = payload.url;
        this.workspaceSid = payload.workspace_sid;
        this.links = payload.links;
        this._solution = { workspaceSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new TaskQueueContextImpl(this._version, this._solution.workspaceSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a TaskQueueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a TaskQueueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskQueueInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the cumulativeStatistics.
     */
    cumulativeStatistics() {
        return this._proxy.cumulativeStatistics;
    }
    /**
     * Access the realTimeStatistics.
     */
    realTimeStatistics() {
        return this._proxy.realTimeStatistics;
    }
    /**
     * Access the statistics.
     */
    statistics() {
        return this._proxy.statistics;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            assignmentActivitySid: this.assignmentActivitySid,
            assignmentActivityName: this.assignmentActivityName,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            friendlyName: this.friendlyName,
            maxReservedWorkers: this.maxReservedWorkers,
            reservationActivitySid: this.reservationActivitySid,
            reservationActivityName: this.reservationActivityName,
            sid: this.sid,
            targetWorkers: this.targetWorkers,
            taskOrder: this.taskOrder,
            url: this.url,
            workspaceSid: this.workspaceSid,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TaskQueueInstance = TaskQueueInstance;
function TaskQueueListInstance(version, workspaceSid) {
    if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
        throw new Error("Parameter 'workspaceSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new TaskQueueContextImpl(version, workspaceSid, sid);
    };
    instance._version = version;
    instance._solution = { workspaceSid };
    instance._uri = `/Workspaces/${workspaceSid}/TaskQueues`;
    Object.defineProperty(instance, "statistics", {
        get: function statistics() {
            if (!instance._statistics) {
                instance._statistics = (0, taskQueuesStatistics_1.TaskQueuesStatisticsListInstance)(instance._version, instance._solution.workspaceSid);
            }
            return instance._statistics;
        },
    });
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        if (params["targetWorkers"] !== undefined)
            data["TargetWorkers"] = params["targetWorkers"];
        if (params["maxReservedWorkers"] !== undefined)
            data["MaxReservedWorkers"] = params["maxReservedWorkers"];
        if (params["taskOrder"] !== undefined)
            data["TaskOrder"] = params["taskOrder"];
        if (params["reservationActivitySid"] !== undefined)
            data["ReservationActivitySid"] = params["reservationActivitySid"];
        if (params["assignmentActivitySid"] !== undefined)
            data["AssignmentActivitySid"] = params["assignmentActivitySid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new TaskQueueInstance(operationVersion, payload, instance._solution.workspaceSid));
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
        if (params["evaluateWorkerAttributes"] !== undefined)
            data["EvaluateWorkerAttributes"] = params["evaluateWorkerAttributes"];
        if (params["workerSid"] !== undefined)
            data["WorkerSid"] = params["workerSid"];
        if (params["ordering"] !== undefined)
            data["Ordering"] = params["ordering"];
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
        operationPromise = operationPromise.then((payload) => new TaskQueuePage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new TaskQueuePage(instance._version, payload, instance._solution));
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
exports.TaskQueueListInstance = TaskQueueListInstance;
class TaskQueuePage extends Page_1.default {
    /**
     * Initialize the TaskQueuePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of TaskQueueInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new TaskQueueInstance(this._version, payload, this._solution.workspaceSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TaskQueuePage = TaskQueuePage;
