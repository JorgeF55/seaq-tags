"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymizeListInstance = exports.AnonymizeInstance = exports.AnonymizeContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class AnonymizeContextImpl {
    constructor(_version, roomSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(roomSid)) {
            throw new Error("Parameter 'roomSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { roomSid, sid };
        this._uri = `/Rooms/${roomSid}/Participants/${sid}/Anonymize`;
    }
    update(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
        });
        operationPromise = operationPromise.then((payload) => new AnonymizeInstance(operationVersion, payload, instance._solution.roomSid, instance._solution.sid));
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
exports.AnonymizeContextImpl = AnonymizeContextImpl;
class AnonymizeInstance {
    constructor(_version, payload, roomSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.roomSid = payload.room_sid;
        this.accountSid = payload.account_sid;
        this.status = payload.status;
        this.identity = payload.identity;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.startTime = deserialize.iso8601DateTime(payload.start_time);
        this.endTime = deserialize.iso8601DateTime(payload.end_time);
        this.duration = deserialize.integer(payload.duration);
        this.url = payload.url;
        this._solution = { roomSid, sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new AnonymizeContextImpl(this._version, this._solution.roomSid, this._solution.sid);
        return this._context;
    }
    /**
     * Update a AnonymizeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AnonymizeInstance
     */
    update(callback) {
        return this._proxy.update(callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            roomSid: this.roomSid,
            accountSid: this.accountSid,
            status: this.status,
            identity: this.identity,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            startTime: this.startTime,
            endTime: this.endTime,
            duration: this.duration,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AnonymizeInstance = AnonymizeInstance;
function AnonymizeListInstance(version, roomSid, sid) {
    if (!(0, utility_1.isValidPathParam)(roomSid)) {
        throw new Error("Parameter 'roomSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(sid)) {
        throw new Error("Parameter 'sid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new AnonymizeContextImpl(version, roomSid, sid);
    };
    instance._version = version;
    instance._solution = { roomSid, sid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.AnonymizeListInstance = AnonymizeListInstance;