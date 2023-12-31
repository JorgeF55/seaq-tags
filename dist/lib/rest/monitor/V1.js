"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Monitor
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
const alert_1 = require("./v1/alert");
const event_1 = require("./v1/event");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Monitor
     *
     * @param domain - The Twilio (Twilio.Monitor) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for alerts resource */
    get alerts() {
        this._alerts = this._alerts || (0, alert_1.AlertListInstance)(this);
        return this._alerts;
    }
    /** Getter for events resource */
    get events() {
        this._events = this._events || (0, event_1.EventListInstance)(this);
        return this._events;
    }
}
exports.default = V1;
