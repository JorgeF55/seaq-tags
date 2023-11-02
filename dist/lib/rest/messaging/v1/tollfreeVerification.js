"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
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
exports.TollfreeVerificationPage = exports.TollfreeVerificationListInstance = exports.TollfreeVerificationInstance = exports.TollfreeVerificationContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
class TollfreeVerificationContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Tollfree/Verifications/${sid}`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new TollfreeVerificationInstance(operationVersion, payload, instance._solution.sid));
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
        if (params["businessName"] !== undefined)
            data["BusinessName"] = params["businessName"];
        if (params["businessWebsite"] !== undefined)
            data["BusinessWebsite"] = params["businessWebsite"];
        if (params["notificationEmail"] !== undefined)
            data["NotificationEmail"] = params["notificationEmail"];
        if (params["useCaseCategories"] !== undefined)
            data["UseCaseCategories"] = serialize.map(params["useCaseCategories"], (e) => e);
        if (params["useCaseSummary"] !== undefined)
            data["UseCaseSummary"] = params["useCaseSummary"];
        if (params["productionMessageSample"] !== undefined)
            data["ProductionMessageSample"] = params["productionMessageSample"];
        if (params["optInImageUrls"] !== undefined)
            data["OptInImageUrls"] = serialize.map(params["optInImageUrls"], (e) => e);
        if (params["optInType"] !== undefined)
            data["OptInType"] = params["optInType"];
        if (params["messageVolume"] !== undefined)
            data["MessageVolume"] = params["messageVolume"];
        if (params["businessStreetAddress"] !== undefined)
            data["BusinessStreetAddress"] = params["businessStreetAddress"];
        if (params["businessStreetAddress2"] !== undefined)
            data["BusinessStreetAddress2"] = params["businessStreetAddress2"];
        if (params["businessCity"] !== undefined)
            data["BusinessCity"] = params["businessCity"];
        if (params["businessStateProvinceRegion"] !== undefined)
            data["BusinessStateProvinceRegion"] =
                params["businessStateProvinceRegion"];
        if (params["businessPostalCode"] !== undefined)
            data["BusinessPostalCode"] = params["businessPostalCode"];
        if (params["businessCountry"] !== undefined)
            data["BusinessCountry"] = params["businessCountry"];
        if (params["additionalInformation"] !== undefined)
            data["AdditionalInformation"] = params["additionalInformation"];
        if (params["businessContactFirstName"] !== undefined)
            data["BusinessContactFirstName"] = params["businessContactFirstName"];
        if (params["businessContactLastName"] !== undefined)
            data["BusinessContactLastName"] = params["businessContactLastName"];
        if (params["businessContactEmail"] !== undefined)
            data["BusinessContactEmail"] = params["businessContactEmail"];
        if (params["businessContactPhone"] !== undefined)
            data["BusinessContactPhone"] = params["businessContactPhone"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new TollfreeVerificationInstance(operationVersion, payload, instance._solution.sid));
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
exports.TollfreeVerificationContextImpl = TollfreeVerificationContextImpl;
class TollfreeVerificationInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.customerProfileSid = payload.customer_profile_sid;
        this.trustProductSid = payload.trust_product_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.regulatedItemSid = payload.regulated_item_sid;
        this.businessName = payload.business_name;
        this.businessStreetAddress = payload.business_street_address;
        this.businessStreetAddress2 = payload.business_street_address2;
        this.businessCity = payload.business_city;
        this.businessStateProvinceRegion = payload.business_state_province_region;
        this.businessPostalCode = payload.business_postal_code;
        this.businessCountry = payload.business_country;
        this.businessWebsite = payload.business_website;
        this.businessContactFirstName = payload.business_contact_first_name;
        this.businessContactLastName = payload.business_contact_last_name;
        this.businessContactEmail = payload.business_contact_email;
        this.businessContactPhone = payload.business_contact_phone;
        this.notificationEmail = payload.notification_email;
        this.useCaseCategories = payload.use_case_categories;
        this.useCaseSummary = payload.use_case_summary;
        this.productionMessageSample = payload.production_message_sample;
        this.optInImageUrls = payload.opt_in_image_urls;
        this.optInType = payload.opt_in_type;
        this.messageVolume = payload.message_volume;
        this.additionalInformation = payload.additional_information;
        this.tollfreePhoneNumberSid = payload.tollfree_phone_number_sid;
        this.status = payload.status;
        this.url = payload.url;
        this.resourceLinks = payload.resource_links;
        this.externalReferenceId = payload.external_reference_id;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new TollfreeVerificationContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a TollfreeVerificationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TollfreeVerificationInstance
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
            sid: this.sid,
            accountSid: this.accountSid,
            customerProfileSid: this.customerProfileSid,
            trustProductSid: this.trustProductSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            regulatedItemSid: this.regulatedItemSid,
            businessName: this.businessName,
            businessStreetAddress: this.businessStreetAddress,
            businessStreetAddress2: this.businessStreetAddress2,
            businessCity: this.businessCity,
            businessStateProvinceRegion: this.businessStateProvinceRegion,
            businessPostalCode: this.businessPostalCode,
            businessCountry: this.businessCountry,
            businessWebsite: this.businessWebsite,
            businessContactFirstName: this.businessContactFirstName,
            businessContactLastName: this.businessContactLastName,
            businessContactEmail: this.businessContactEmail,
            businessContactPhone: this.businessContactPhone,
            notificationEmail: this.notificationEmail,
            useCaseCategories: this.useCaseCategories,
            useCaseSummary: this.useCaseSummary,
            productionMessageSample: this.productionMessageSample,
            optInImageUrls: this.optInImageUrls,
            optInType: this.optInType,
            messageVolume: this.messageVolume,
            additionalInformation: this.additionalInformation,
            tollfreePhoneNumberSid: this.tollfreePhoneNumberSid,
            status: this.status,
            url: this.url,
            resourceLinks: this.resourceLinks,
            externalReferenceId: this.externalReferenceId,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TollfreeVerificationInstance = TollfreeVerificationInstance;
function TollfreeVerificationListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new TollfreeVerificationContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Tollfree/Verifications`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["businessName"] === null ||
            params["businessName"] === undefined) {
            throw new Error("Required parameter \"params['businessName']\" missing.");
        }
        if (params["businessWebsite"] === null ||
            params["businessWebsite"] === undefined) {
            throw new Error("Required parameter \"params['businessWebsite']\" missing.");
        }
        if (params["notificationEmail"] === null ||
            params["notificationEmail"] === undefined) {
            throw new Error("Required parameter \"params['notificationEmail']\" missing.");
        }
        if (params["useCaseCategories"] === null ||
            params["useCaseCategories"] === undefined) {
            throw new Error("Required parameter \"params['useCaseCategories']\" missing.");
        }
        if (params["useCaseSummary"] === null ||
            params["useCaseSummary"] === undefined) {
            throw new Error("Required parameter \"params['useCaseSummary']\" missing.");
        }
        if (params["productionMessageSample"] === null ||
            params["productionMessageSample"] === undefined) {
            throw new Error("Required parameter \"params['productionMessageSample']\" missing.");
        }
        if (params["optInImageUrls"] === null ||
            params["optInImageUrls"] === undefined) {
            throw new Error("Required parameter \"params['optInImageUrls']\" missing.");
        }
        if (params["optInType"] === null || params["optInType"] === undefined) {
            throw new Error("Required parameter \"params['optInType']\" missing.");
        }
        if (params["messageVolume"] === null ||
            params["messageVolume"] === undefined) {
            throw new Error("Required parameter \"params['messageVolume']\" missing.");
        }
        if (params["tollfreePhoneNumberSid"] === null ||
            params["tollfreePhoneNumberSid"] === undefined) {
            throw new Error("Required parameter \"params['tollfreePhoneNumberSid']\" missing.");
        }
        let data = {};
        data["BusinessName"] = params["businessName"];
        data["BusinessWebsite"] = params["businessWebsite"];
        data["NotificationEmail"] = params["notificationEmail"];
        data["UseCaseCategories"] = serialize.map(params["useCaseCategories"], (e) => e);
        data["UseCaseSummary"] = params["useCaseSummary"];
        data["ProductionMessageSample"] = params["productionMessageSample"];
        data["OptInImageUrls"] = serialize.map(params["optInImageUrls"], (e) => e);
        data["OptInType"] = params["optInType"];
        data["MessageVolume"] = params["messageVolume"];
        data["TollfreePhoneNumberSid"] = params["tollfreePhoneNumberSid"];
        if (params["customerProfileSid"] !== undefined)
            data["CustomerProfileSid"] = params["customerProfileSid"];
        if (params["businessStreetAddress"] !== undefined)
            data["BusinessStreetAddress"] = params["businessStreetAddress"];
        if (params["businessStreetAddress2"] !== undefined)
            data["BusinessStreetAddress2"] = params["businessStreetAddress2"];
        if (params["businessCity"] !== undefined)
            data["BusinessCity"] = params["businessCity"];
        if (params["businessStateProvinceRegion"] !== undefined)
            data["BusinessStateProvinceRegion"] =
                params["businessStateProvinceRegion"];
        if (params["businessPostalCode"] !== undefined)
            data["BusinessPostalCode"] = params["businessPostalCode"];
        if (params["businessCountry"] !== undefined)
            data["BusinessCountry"] = params["businessCountry"];
        if (params["additionalInformation"] !== undefined)
            data["AdditionalInformation"] = params["additionalInformation"];
        if (params["businessContactFirstName"] !== undefined)
            data["BusinessContactFirstName"] = params["businessContactFirstName"];
        if (params["businessContactLastName"] !== undefined)
            data["BusinessContactLastName"] = params["businessContactLastName"];
        if (params["businessContactEmail"] !== undefined)
            data["BusinessContactEmail"] = params["businessContactEmail"];
        if (params["businessContactPhone"] !== undefined)
            data["BusinessContactPhone"] = params["businessContactPhone"];
        if (params["externalReferenceId"] !== undefined)
            data["ExternalReferenceId"] = params["externalReferenceId"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new TollfreeVerificationInstance(operationVersion, payload));
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
        if (params["tollfreePhoneNumberSid"] !== undefined)
            data["TollfreePhoneNumberSid"] = params["tollfreePhoneNumberSid"];
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
        operationPromise = operationPromise.then((payload) => new TollfreeVerificationPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new TollfreeVerificationPage(instance._version, payload, instance._solution));
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
exports.TollfreeVerificationListInstance = TollfreeVerificationListInstance;
class TollfreeVerificationPage extends Page_1.default {
    /**
     * Initialize the TollfreeVerificationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of TollfreeVerificationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new TollfreeVerificationInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TollfreeVerificationPage = TollfreeVerificationPage;
