"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
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
const Version_1 = __importDefault(require("../../base/Version"));
const archivedCall_1 = require("./v1/archivedCall");
const byocTrunk_1 = require("./v1/byocTrunk");
const connectionPolicy_1 = require("./v1/connectionPolicy");
const dialingPermissions_1 = require("./v1/dialingPermissions");
const ipRecord_1 = require("./v1/ipRecord");
const sourceIpMapping_1 = require("./v1/sourceIpMapping");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Voice
     *
     * @param domain - The Twilio (Twilio.Voice) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for archivedCalls resource */
    get archivedCalls() {
        this._archivedCalls = this._archivedCalls || (0, archivedCall_1.ArchivedCallListInstance)(this);
        return this._archivedCalls;
    }
    /** Getter for byocTrunks resource */
    get byocTrunks() {
        this._byocTrunks = this._byocTrunks || (0, byocTrunk_1.ByocTrunkListInstance)(this);
        return this._byocTrunks;
    }
    /** Getter for connectionPolicies resource */
    get connectionPolicies() {
        this._connectionPolicies =
            this._connectionPolicies || (0, connectionPolicy_1.ConnectionPolicyListInstance)(this);
        return this._connectionPolicies;
    }
    /** Getter for dialingPermissions resource */
    get dialingPermissions() {
        this._dialingPermissions =
            this._dialingPermissions || (0, dialingPermissions_1.DialingPermissionsListInstance)(this);
        return this._dialingPermissions;
    }
    /** Getter for ipRecords resource */
    get ipRecords() {
        this._ipRecords = this._ipRecords || (0, ipRecord_1.IpRecordListInstance)(this);
        return this._ipRecords;
    }
    /** Getter for sourceIpMappings resource */
    get sourceIpMappings() {
        this._sourceIpMappings =
            this._sourceIpMappings || (0, sourceIpMapping_1.SourceIpMappingListInstance)(this);
        return this._sourceIpMappings;
    }
}
exports.default = V1;
