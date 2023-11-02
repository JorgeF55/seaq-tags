"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
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
const assessments_1 = require("./v1/assessments");
const channel_1 = require("./v1/channel");
const configuration_1 = require("./v1/configuration");
const flexFlow_1 = require("./v1/flexFlow");
const goodData_1 = require("./v1/goodData");
const interaction_1 = require("./v1/interaction");
const userRoles_1 = require("./v1/userRoles");
const webChannel_1 = require("./v1/webChannel");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of FlexApi
     *
     * @param domain - The Twilio (Twilio.FlexApi) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for assessments resource */
    get assessments() {
        this._assessments = this._assessments || (0, assessments_1.AssessmentsListInstance)(this);
        return this._assessments;
    }
    /** Getter for channel resource */
    get channel() {
        this._channel = this._channel || (0, channel_1.ChannelListInstance)(this);
        return this._channel;
    }
    /** Getter for configuration resource */
    get configuration() {
        this._configuration =
            this._configuration || (0, configuration_1.ConfigurationListInstance)(this);
        return this._configuration;
    }
    /** Getter for flexFlow resource */
    get flexFlow() {
        this._flexFlow = this._flexFlow || (0, flexFlow_1.FlexFlowListInstance)(this);
        return this._flexFlow;
    }
    /** Getter for goodData resource */
    get goodData() {
        this._goodData = this._goodData || (0, goodData_1.GoodDataListInstance)(this);
        return this._goodData;
    }
    /** Getter for interaction resource */
    get interaction() {
        this._interaction = this._interaction || (0, interaction_1.InteractionListInstance)(this);
        return this._interaction;
    }
    /** Getter for userRoles resource */
    get userRoles() {
        this._userRoles = this._userRoles || (0, userRoles_1.UserRolesListInstance)(this);
        return this._userRoles;
    }
    /** Getter for webChannel resource */
    get webChannel() {
        this._webChannel = this._webChannel || (0, webChannel_1.WebChannelListInstance)(this);
        return this._webChannel;
    }
}
exports.default = V1;