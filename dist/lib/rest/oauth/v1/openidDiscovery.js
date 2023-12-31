"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Oauth
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenidDiscoveryListInstance = exports.OpenidDiscoveryInstance = exports.OpenidDiscoveryContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
class OpenidDiscoveryContextImpl {
    constructor(_version) {
        this._version = _version;
        this._solution = {};
        this._uri = `/.well-known/openid-configuration`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new OpenidDiscoveryInstance(operationVersion, payload));
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
exports.OpenidDiscoveryContextImpl = OpenidDiscoveryContextImpl;
class OpenidDiscoveryInstance {
    constructor(_version, payload) {
        this._version = _version;
        this.issuer = payload.issuer;
        this.authorizationEndpoint = payload.authorization_endpoint;
        this.deviceAuthorizationEndpoint = payload.device_authorization_endpoint;
        this.tokenEndpoint = payload.token_endpoint;
        this.userinfoEndpoint = payload.userinfo_endpoint;
        this.revocationEndpoint = payload.revocation_endpoint;
        this.jwkUri = payload.jwk_uri;
        this.responseTypeSupported = payload.response_type_supported;
        this.subjectTypeSupported = payload.subject_type_supported;
        this.idTokenSigningAlgValuesSupported =
            payload.id_token_signing_alg_values_supported;
        this.scopesSupported = payload.scopes_supported;
        this.claimsSupported = payload.claims_supported;
        this.url = payload.url;
        this._solution = {};
    }
    get _proxy() {
        this._context =
            this._context || new OpenidDiscoveryContextImpl(this._version);
        return this._context;
    }
    /**
     * Fetch a OpenidDiscoveryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OpenidDiscoveryInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            issuer: this.issuer,
            authorizationEndpoint: this.authorizationEndpoint,
            deviceAuthorizationEndpoint: this.deviceAuthorizationEndpoint,
            tokenEndpoint: this.tokenEndpoint,
            userinfoEndpoint: this.userinfoEndpoint,
            revocationEndpoint: this.revocationEndpoint,
            jwkUri: this.jwkUri,
            responseTypeSupported: this.responseTypeSupported,
            subjectTypeSupported: this.subjectTypeSupported,
            idTokenSigningAlgValuesSupported: this.idTokenSigningAlgValuesSupported,
            scopesSupported: this.scopesSupported,
            claimsSupported: this.claimsSupported,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.OpenidDiscoveryInstance = OpenidDiscoveryInstance;
function OpenidDiscoveryListInstance(version) {
    const instance = (() => instance.get());
    instance.get = function get() {
        return new OpenidDiscoveryContextImpl(version);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.OpenidDiscoveryListInstance = OpenidDiscoveryListInstance;
