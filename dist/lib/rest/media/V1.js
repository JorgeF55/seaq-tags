"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Media
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
const mediaProcessor_1 = require("./v1/mediaProcessor");
const mediaRecording_1 = require("./v1/mediaRecording");
const playerStreamer_1 = require("./v1/playerStreamer");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Media
     *
     * @param domain - The Twilio (Twilio.Media) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for mediaProcessor resource */
    get mediaProcessor() {
        this._mediaProcessor =
            this._mediaProcessor || (0, mediaProcessor_1.MediaProcessorListInstance)(this);
        return this._mediaProcessor;
    }
    /** Getter for mediaRecording resource */
    get mediaRecording() {
        this._mediaRecording =
            this._mediaRecording || (0, mediaRecording_1.MediaRecordingListInstance)(this);
        return this._mediaRecording;
    }
    /** Getter for playerStreamer resource */
    get playerStreamer() {
        this._playerStreamer =
            this._playerStreamer || (0, playerStreamer_1.PlayerStreamerListInstance)(this);
        return this._playerStreamer;
    }
}
exports.default = V1;
