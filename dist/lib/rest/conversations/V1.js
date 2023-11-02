"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
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
const addressConfiguration_1 = require("./v1/addressConfiguration");
const configuration_1 = require("./v1/configuration");
const conversation_1 = require("./v1/conversation");
const credential_1 = require("./v1/credential");
const participantConversation_1 = require("./v1/participantConversation");
const role_1 = require("./v1/role");
const service_1 = require("./v1/service");
const user_1 = require("./v1/user");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Conversations
     *
     * @param domain - The Twilio (Twilio.Conversations) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for addressConfigurations resource */
    get addressConfigurations() {
        this._addressConfigurations =
            this._addressConfigurations || (0, addressConfiguration_1.AddressConfigurationListInstance)(this);
        return this._addressConfigurations;
    }
    /** Getter for configuration resource */
    get configuration() {
        this._configuration =
            this._configuration || (0, configuration_1.ConfigurationListInstance)(this);
        return this._configuration;
    }
    /** Getter for conversations resource */
    get conversations() {
        this._conversations = this._conversations || (0, conversation_1.ConversationListInstance)(this);
        return this._conversations;
    }
    /** Getter for credentials resource */
    get credentials() {
        this._credentials = this._credentials || (0, credential_1.CredentialListInstance)(this);
        return this._credentials;
    }
    /** Getter for participantConversations resource */
    get participantConversations() {
        this._participantConversations =
            this._participantConversations ||
                (0, participantConversation_1.ParticipantConversationListInstance)(this);
        return this._participantConversations;
    }
    /** Getter for roles resource */
    get roles() {
        this._roles = this._roles || (0, role_1.RoleListInstance)(this);
        return this._roles;
    }
    /** Getter for services resource */
    get services() {
        this._services = this._services || (0, service_1.ServiceListInstance)(this);
        return this._services;
    }
    /** Getter for users resource */
    get users() {
        this._users = this._users || (0, user_1.UserListInstance)(this);
        return this._users;
    }
}
exports.default = V1;