import FlexApiBase from "../FlexApiBase";
import Version from "../../base/Version";
import { AssessmentsListInstance } from "./v1/assessments";
import { ChannelListInstance } from "./v1/channel";
import { ConfigurationListInstance } from "./v1/configuration";
import { FlexFlowListInstance } from "./v1/flexFlow";
import { GoodDataListInstance } from "./v1/goodData";
import { InteractionListInstance } from "./v1/interaction";
import { UserRolesListInstance } from "./v1/userRoles";
import { WebChannelListInstance } from "./v1/webChannel";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of FlexApi
     *
     * @param domain - The Twilio (Twilio.FlexApi) domain
     */
    constructor(domain: FlexApiBase);
    /** assessments - { Twilio.FlexApi.V1.AssessmentsListInstance } resource */
    protected _assessments?: AssessmentsListInstance;
    /** channel - { Twilio.FlexApi.V1.ChannelListInstance } resource */
    protected _channel?: ChannelListInstance;
    /** configuration - { Twilio.FlexApi.V1.ConfigurationListInstance } resource */
    protected _configuration?: ConfigurationListInstance;
    /** flexFlow - { Twilio.FlexApi.V1.FlexFlowListInstance } resource */
    protected _flexFlow?: FlexFlowListInstance;
    /** goodData - { Twilio.FlexApi.V1.GoodDataListInstance } resource */
    protected _goodData?: GoodDataListInstance;
    /** interaction - { Twilio.FlexApi.V1.InteractionListInstance } resource */
    protected _interaction?: InteractionListInstance;
    /** userRoles - { Twilio.FlexApi.V1.UserRolesListInstance } resource */
    protected _userRoles?: UserRolesListInstance;
    /** webChannel - { Twilio.FlexApi.V1.WebChannelListInstance } resource */
    protected _webChannel?: WebChannelListInstance;
    /** Getter for assessments resource */
    get assessments(): AssessmentsListInstance;
    /** Getter for channel resource */
    get channel(): ChannelListInstance;
    /** Getter for configuration resource */
    get configuration(): ConfigurationListInstance;
    /** Getter for flexFlow resource */
    get flexFlow(): FlexFlowListInstance;
    /** Getter for goodData resource */
    get goodData(): GoodDataListInstance;
    /** Getter for interaction resource */
    get interaction(): InteractionListInstance;
    /** Getter for userRoles resource */
    get userRoles(): UserRolesListInstance;
    /** Getter for webChannel resource */
    get webChannel(): WebChannelListInstance;
}
