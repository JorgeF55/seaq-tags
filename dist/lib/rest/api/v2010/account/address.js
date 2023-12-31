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
exports.AddressPage = exports.AddressListInstance = exports.AddressInstance = exports.AddressContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const dependentPhoneNumber_1 = require("./address/dependentPhoneNumber");
class AddressContextImpl {
    constructor(_version, accountSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, sid };
        this._uri = `/Accounts/${accountSid}/Addresses/${sid}.json`;
    }
    get dependentPhoneNumbers() {
        this._dependentPhoneNumbers =
            this._dependentPhoneNumbers ||
                (0, dependentPhoneNumber_1.DependentPhoneNumberListInstance)(this._version, this._solution.accountSid, this._solution.sid);
        return this._dependentPhoneNumbers;
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
        operationPromise = operationPromise.then((payload) => new AddressInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
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
        if (params["customerName"] !== undefined)
            data["CustomerName"] = params["customerName"];
        if (params["street"] !== undefined)
            data["Street"] = params["street"];
        if (params["city"] !== undefined)
            data["City"] = params["city"];
        if (params["region"] !== undefined)
            data["Region"] = params["region"];
        if (params["postalCode"] !== undefined)
            data["PostalCode"] = params["postalCode"];
        if (params["emergencyEnabled"] !== undefined)
            data["EmergencyEnabled"] = serialize.bool(params["emergencyEnabled"]);
        if (params["autoCorrectAddress"] !== undefined)
            data["AutoCorrectAddress"] = serialize.bool(params["autoCorrectAddress"]);
        if (params["streetSecondary"] !== undefined)
            data["StreetSecondary"] = params["streetSecondary"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new AddressInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
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
exports.AddressContextImpl = AddressContextImpl;
class AddressInstance {
    constructor(_version, payload, accountSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.city = payload.city;
        this.customerName = payload.customer_name;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.friendlyName = payload.friendly_name;
        this.isoCountry = payload.iso_country;
        this.postalCode = payload.postal_code;
        this.region = payload.region;
        this.sid = payload.sid;
        this.street = payload.street;
        this.uri = payload.uri;
        this.emergencyEnabled = payload.emergency_enabled;
        this.validated = payload.validated;
        this.verified = payload.verified;
        this.streetSecondary = payload.street_secondary;
        this._solution = { accountSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new AddressContextImpl(this._version, this._solution.accountSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a AddressInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a AddressInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AddressInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the dependentPhoneNumbers.
     */
    dependentPhoneNumbers() {
        return this._proxy.dependentPhoneNumbers;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            city: this.city,
            customerName: this.customerName,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            friendlyName: this.friendlyName,
            isoCountry: this.isoCountry,
            postalCode: this.postalCode,
            region: this.region,
            sid: this.sid,
            street: this.street,
            uri: this.uri,
            emergencyEnabled: this.emergencyEnabled,
            validated: this.validated,
            verified: this.verified,
            streetSecondary: this.streetSecondary,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AddressInstance = AddressInstance;
function AddressListInstance(version, accountSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new AddressContextImpl(version, accountSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid };
    instance._uri = `/Accounts/${accountSid}/Addresses.json`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["customerName"] === null ||
            params["customerName"] === undefined) {
            throw new Error("Required parameter \"params['customerName']\" missing.");
        }
        if (params["street"] === null || params["street"] === undefined) {
            throw new Error("Required parameter \"params['street']\" missing.");
        }
        if (params["city"] === null || params["city"] === undefined) {
            throw new Error("Required parameter \"params['city']\" missing.");
        }
        if (params["region"] === null || params["region"] === undefined) {
            throw new Error("Required parameter \"params['region']\" missing.");
        }
        if (params["postalCode"] === null || params["postalCode"] === undefined) {
            throw new Error("Required parameter \"params['postalCode']\" missing.");
        }
        if (params["isoCountry"] === null || params["isoCountry"] === undefined) {
            throw new Error("Required parameter \"params['isoCountry']\" missing.");
        }
        let data = {};
        data["CustomerName"] = params["customerName"];
        data["Street"] = params["street"];
        data["City"] = params["city"];
        data["Region"] = params["region"];
        data["PostalCode"] = params["postalCode"];
        data["IsoCountry"] = params["isoCountry"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["emergencyEnabled"] !== undefined)
            data["EmergencyEnabled"] = serialize.bool(params["emergencyEnabled"]);
        if (params["autoCorrectAddress"] !== undefined)
            data["AutoCorrectAddress"] = serialize.bool(params["autoCorrectAddress"]);
        if (params["streetSecondary"] !== undefined)
            data["StreetSecondary"] = params["streetSecondary"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new AddressInstance(operationVersion, payload, instance._solution.accountSid));
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
        if (params["customerName"] !== undefined)
            data["CustomerName"] = params["customerName"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["isoCountry"] !== undefined)
            data["IsoCountry"] = params["isoCountry"];
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
        operationPromise = operationPromise.then((payload) => new AddressPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new AddressPage(instance._version, payload, instance._solution));
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
exports.AddressListInstance = AddressListInstance;
class AddressPage extends Page_1.default {
    /**
     * Initialize the AddressPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of AddressInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new AddressInstance(this._version, payload, this._solution.accountSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AddressPage = AddressPage;
