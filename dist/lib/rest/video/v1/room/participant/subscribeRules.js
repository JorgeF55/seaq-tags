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
exports.SubscribeRulesInstance = exports.SubscribeRulesListInstance = exports.VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules {
}
exports.VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules = VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules;
function SubscribeRulesListInstance(version, roomSid, participantSid) {
    if (!(0, utility_1.isValidPathParam)(roomSid)) {
        throw new Error("Parameter 'roomSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(participantSid)) {
        throw new Error("Parameter 'participantSid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { roomSid, participantSid };
    instance._uri = `/Rooms/${roomSid}/Participants/${participantSid}/SubscribeRules`;
    instance.fetch = function fetch(callback) {
        let operationVersion = version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new SubscribeRulesInstance(operationVersion, payload, instance._solution.roomSid, instance._solution.participantSid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.update = function update(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["rules"] !== undefined)
            data["Rules"] = serialize.object(params["rules"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SubscribeRulesInstance(operationVersion, payload, instance._solution.roomSid, instance._solution.participantSid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.SubscribeRulesListInstance = SubscribeRulesListInstance;
class SubscribeRulesInstance {
    constructor(_version, payload, roomSid, participantSid) {
        this._version = _version;
        this.participantSid = payload.participant_sid;
        this.roomSid = payload.room_sid;
        this.rules = payload.rules;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            participantSid: this.participantSid,
            roomSid: this.roomSid,
            rules: this.rules,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SubscribeRulesInstance = SubscribeRulesInstance;
