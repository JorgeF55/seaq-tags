"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormListInstance = exports.FormInstance = exports.FormContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
class FormContextImpl {
    constructor(_version, formType) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(formType)) {
            throw new Error("Parameter 'formType' is not valid.");
        }
        this._solution = { formType };
        this._uri = `/Forms/${formType}`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new FormInstance(operationVersion, payload, instance._solution.formType));
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
exports.FormContextImpl = FormContextImpl;
class FormInstance {
    constructor(_version, payload, formType) {
        this._version = _version;
        this.formType = payload.form_type;
        this.forms = payload.forms;
        this.formMeta = payload.form_meta;
        this.url = payload.url;
        this._solution = { formType: formType || this.formType };
    }
    get _proxy() {
        this._context =
            this._context ||
                new FormContextImpl(this._version, this._solution.formType);
        return this._context;
    }
    /**
     * Fetch a FormInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FormInstance
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
            formType: this.formType,
            forms: this.forms,
            formMeta: this.formMeta,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.FormInstance = FormInstance;
function FormListInstance(version) {
    const instance = ((formType) => instance.get(formType));
    instance.get = function get(formType) {
        return new FormContextImpl(version, formType);
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
exports.FormListInstance = FormListInstance;