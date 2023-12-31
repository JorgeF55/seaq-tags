"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Wireless
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
const command_1 = require("./v1/command");
const ratePlan_1 = require("./v1/ratePlan");
const sim_1 = require("./v1/sim");
const usageRecord_1 = require("./v1/usageRecord");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Wireless
     *
     * @param domain - The Twilio (Twilio.Wireless) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for commands resource */
    get commands() {
        this._commands = this._commands || (0, command_1.CommandListInstance)(this);
        return this._commands;
    }
    /** Getter for ratePlans resource */
    get ratePlans() {
        this._ratePlans = this._ratePlans || (0, ratePlan_1.RatePlanListInstance)(this);
        return this._ratePlans;
    }
    /** Getter for sims resource */
    get sims() {
        this._sims = this._sims || (0, sim_1.SimListInstance)(this);
        return this._sims;
    }
    /** Getter for usageRecords resource */
    get usageRecords() {
        this._usageRecords = this._usageRecords || (0, usageRecord_1.UsageRecordListInstance)(this);
        return this._usageRecords;
    }
}
exports.default = V1;
