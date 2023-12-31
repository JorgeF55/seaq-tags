"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Domain_1 = __importDefault(require("../base/Domain"));
const V1_1 = __importDefault(require("./chat/V1"));
const V2_1 = __importDefault(require("./chat/V2"));
const V3_1 = __importDefault(require("./chat/V3"));
class ChatBase extends Domain_1.default {
    /**
     * Initialize chat domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio) {
        super(twilio, "https://chat.twilio.com");
    }
    get v1() {
        this._v1 = this._v1 || new V1_1.default(this);
        return this._v1;
    }
    get v2() {
        this._v2 = this._v2 || new V2_1.default(this);
        return this._v2;
    }
    get v3() {
        this._v3 = this._v3 || new V3_1.default(this);
        return this._v3;
    }
}
module.exports = ChatBase;
