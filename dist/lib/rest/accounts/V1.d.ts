import AccountsBase from "../AccountsBase";
import Version from "../../base/Version";
import { AuthTokenPromotionListInstance } from "./v1/authTokenPromotion";
import { CredentialListInstance } from "./v1/credential";
import { SecondaryAuthTokenListInstance } from "./v1/secondaryAuthToken";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Accounts
     *
     * @param domain - The Twilio (Twilio.Accounts) domain
     */
    constructor(domain: AccountsBase);
    /** authTokenPromotion - { Twilio.Accounts.V1.AuthTokenPromotionListInstance } resource */
    protected _authTokenPromotion?: AuthTokenPromotionListInstance;
    /** credentials - { Twilio.Accounts.V1.CredentialListInstance } resource */
    protected _credentials?: CredentialListInstance;
    /** secondaryAuthToken - { Twilio.Accounts.V1.SecondaryAuthTokenListInstance } resource */
    protected _secondaryAuthToken?: SecondaryAuthTokenListInstance;
    /** Getter for authTokenPromotion resource */
    get authTokenPromotion(): AuthTokenPromotionListInstance;
    /** Getter for credentials resource */
    get credentials(): CredentialListInstance;
    /** Getter for secondaryAuthToken resource */
    get secondaryAuthToken(): SecondaryAuthTokenListInstance;
}
