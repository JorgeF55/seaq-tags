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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTypesListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
const utility_1 = require("../../../../../../base/utility");
const authTypeCalls_1 = require("./authTypes/authTypeCalls");
const authTypeRegistrations_1 = require("./authTypes/authTypeRegistrations");
function AuthTypesListInstance(version, accountSid, domainSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(domainSid)) {
        throw new Error("Parameter 'domainSid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { accountSid, domainSid };
    instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth.json`;
    Object.defineProperty(instance, "calls", {
        get: function calls() {
            if (!instance._calls) {
                instance._calls = (0, authTypeCalls_1.AuthTypeCallsListInstance)(instance._version, instance._solution.accountSid, instance._solution.domainSid);
            }
            return instance._calls;
        },
    });
    Object.defineProperty(instance, "registrations", {
        get: function registrations() {
            if (!instance._registrations) {
                instance._registrations = (0, authTypeRegistrations_1.AuthTypeRegistrationsListInstance)(instance._version, instance._solution.accountSid, instance._solution.domainSid);
            }
            return instance._registrations;
        },
    });
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.AuthTypesListInstance = AuthTypesListInstance;
