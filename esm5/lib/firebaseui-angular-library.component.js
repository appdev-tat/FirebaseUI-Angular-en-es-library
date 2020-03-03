/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Inject, NgZone, Output, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthMethods, AuthProvider, CredentialHelper, } from './firebaseui-angular-library.helper';
// noinspection ES6UnusedImports
import * as firebase from 'firebase/app';
import { FirebaseuiAngularLibraryService } from './firebaseui-angular-library.service';
import 'firebase/auth';
var GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
var FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
var TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
var GithubAuthProvider = firebase.auth.GithubAuthProvider;
var EmailAuthProvider = firebase.auth.EmailAuthProvider;
var PhoneAuthProvider = firebase.auth.PhoneAuthProvider;
var FirebaseuiAngularLibraryComponent = /** @class */ (function () {
    function FirebaseuiAngularLibraryComponent(angularFireAuth, _firebaseUiConfig, _firebaseUiConfig_Feature, ngZone, firebaseUIService) {
        this.angularFireAuth = angularFireAuth;
        this._firebaseUiConfig = _firebaseUiConfig;
        this._firebaseUiConfig_Feature = _firebaseUiConfig_Feature;
        this.ngZone = ngZone;
        this.firebaseUIService = firebaseUIService;
        /**
         * @deprecated Use signInSuccessWithAuthResult
         */
        this.signInSuccessCallback = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.signInSuccessWithAuthResultCallback = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.signInFailureCallback = new EventEmitter(); // tslint:disable-line
<<<<<<< HEAD
        // tslint:disable-line
        // language must be either 'en' or 'es'
        this.language = 'en';
=======
>>>>>>> d2238c173485e483dc5c33b9fc5a8b41e366caaa
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.getAuthProvider = /**
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        switch (provider) {
            case AuthProvider.Google:
                return GoogleAuthProvider.PROVIDER_ID;
            case AuthProvider.Facebook:
                return FacebookAuthProvider.PROVIDER_ID;
            case AuthProvider.Twitter:
                return TwitterAuthProvider.PROVIDER_ID;
            case AuthProvider.Github:
                return GithubAuthProvider.PROVIDER_ID;
            case AuthProvider.Password:
                return EmailAuthProvider.PROVIDER_ID;
            case AuthProvider.Phone:
                return PhoneAuthProvider.PROVIDER_ID;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!changes.language) return [3 /*break*/, 5];
                        if (!(this.language === 'en')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, import('firebaseui-en-es/dist/npm__en')];
                    case 1:
                        _a.firebaseuiLibrary = _c.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.language === 'es')) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, import('firebaseui-en-es/dist/npm__es')];
                    case 3:
                        _b.firebaseuiLibrary = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        console.error('Language must be either "en" or "es"');
                        _c.label = 5;
                    case 5:
                        ((/** @type {?} */ (window))).firebaseui = this.firebaseuiLibrary;
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(FirebaseuiAngularLibraryComponent.prototype, "firebaseUiConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (tslib_1.__assign({}, this._firebaseUiConfig, this._firebaseUiConfig_Feature)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (['en', 'es'].indexOf(this.language) === -1) {
            console.error('Language must be either "en" or "es"');
            return;
        }
        else {
            this.firebaseuiLibrary = (this.language === 'en') ?
                require('firebaseui-en-es/dist/npm__en') :
                require('firebaseui-en-es/dist/npm__es');
            this.firebaseUIService.init(this.firebaseuiLibrary);
        }
        this.subscription = this.angularFireAuth.authState.subscribe(function (value) {
            if ((value && value.isAnonymous) || !value) {
                if (((/** @type {?} */ (_this.firebaseUiConfig))).providers) {
                    // tslint:disable-next-line
                    console.warn("\"FirebaseUIAuthConfig\" isn't supported since version 3.3.0 and will be removed in the future.\nPlease use the native configuration of firebaseui \"firebaseui.auth.Config\"");
                    console.warn('You can copy your converted configuration:\n', _this.getNewConfigurationString(_this.getUIAuthConfig()));
                    if (((/** @type {?} */ (_this.firebaseUiConfig))).providers.length !== 0) {
                        _this.firebaseUIPopup();
                    }
                    else {
                        throw new Error('There must be at least one AuthProvider.');
                    }
                }
                else {
                    if (((/** @type {?} */ (_this.firebaseUiConfig))).signInOptions.length !== 0) {
                        _this.firebaseUIPopup();
                    }
                    else {
                        throw new Error('There must be at least one AuthProvider.');
                    }
                }
            }
        });
    };
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (!!this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.getUIAuthConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        if (!((/** @type {?} */ (this.firebaseUiConfig))).providers) {
            if (!((/** @type {?} */ (this.firebaseUiConfig))).callbacks) {
                this._firebaseUiConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS] = true;
                ((/** @type {?} */ (this._firebaseUiConfig))).callbacks = this.getCallbacks();
            }
            return ((/** @type {?} */ (this.firebaseUiConfig)));
        }
        /** @type {?} */
        var authConfig = ((/** @type {?} */ (this.firebaseUiConfig)));
        /** @type {?} */
        var authProviders = [];
        try {
            for (var _b = tslib_1.__values(authConfig.providers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                if (!!((/** @type {?} */ (provider))).customConfig) {
                    provider = ((/** @type {?} */ (provider)));
                    /** @type {?} */
                    var providerWithConfig = provider.customConfig;
                    providerWithConfig['provider'] = FirebaseuiAngularLibraryComponent.getAuthProvider(provider.provider);
                    authProviders.push(providerWithConfig);
                }
                else {
                    authProviders.push(FirebaseuiAngularLibraryComponent.getAuthProvider((/** @type {?} */ (provider))));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var tosURL = authConfig.tos ? authConfig.tos : '';
        /** @type {?} */
        var privacyPolicyUrl = authConfig.privacyPolicyUrl ? authConfig.privacyPolicyUrl : '';
        /** @type {?} */
        var authMethod = 'popup';
        switch (authConfig.method) {
            case AuthMethods.Redirect:
                authMethod = 'redirect';
                break;
            case null:
            case AuthMethods.Popup:
            default:
                break;
        }
        /** @type {?} */
        var credentialHelper;
        switch (authConfig.credentialHelper) {
            case CredentialHelper.None:
                credentialHelper = this.firebaseuiLibrary.auth.CredentialHelper.NONE;
                break;
            case CredentialHelper.OneTap:
                credentialHelper = this.firebaseuiLibrary.auth.CredentialHelper.GOOGLE_YOLO;
                break;
            case CredentialHelper.AccountChooser:
            default:
                credentialHelper = this.firebaseuiLibrary.auth.CredentialHelper.ACCOUNT_CHOOSER_COM;
                break;
        }
        /** @type {?} */
        var autoUpgradeAnonymousUsers = authConfig.autoUpgradeAnonymousUsers == null ? false : authConfig.autoUpgradeAnonymousUsers;
        /** @type {?} */
        var signInSuccessCallback = function (currentUser, credential, redirectUrl) {
            _this.ngZone.run(function () {
                _this.signInSuccessCallback.emit({
                    currentUser: currentUser,
                    credential: credential,
                    redirectUrl: redirectUrl
                });
            });
            return !!authConfig.signInSuccessUrl;
        };
        /** @type {?} */
        var callbacks = tslib_1.__assign({}, this.getCallbacks(), { signInSuccess: null });
        if (!authConfig.disableSignInSuccessCallback) {
            console.warn('[FirebaseUiAngular] signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead.\n' +
                'To remove this warning set disableSignInSuccessCallback on the FirebaseUiConfig Object.');
            callbacks.signInSuccess = signInSuccessCallback;
        }
        /** @type {?} */
        var nativeConfiguration = {
            callbacks: callbacks,
            signInFlow: authMethod,
            signInOptions: authProviders,
            tosUrl: tosURL,
            privacyPolicyUrl: privacyPolicyUrl,
            credentialHelper: credentialHelper,
            autoUpgradeAnonymousUsers: autoUpgradeAnonymousUsers
        };
        if (!!authConfig.signInSuccessUrl) {
            nativeConfiguration.signInSuccessUrl = authConfig.signInSuccessUrl;
        }
        return nativeConfiguration;
    };
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.firebaseUIPopup = /**
     * @return {?}
     */
    function () {
<<<<<<< HEAD
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var firebaseUiInstance, uiAuthConfig, resetCallbacks;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebaseUIService.getInstance(this.language)];
                    case 1:
                        firebaseUiInstance = _a.sent();
                        uiAuthConfig = this.getUIAuthConfig();
                        // Check if callbacks got computed to reset them again after providing the to firebaseui.
                        // Necessary for allowing updating the firebaseui config during runtime.
                        resetCallbacks = false;
                        if (uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS]) {
                            resetCallbacks = true;
                            delete uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS];
                        }
                        // show the firebaseui
                        firebaseUiInstance.start('#firebaseui-auth-container', uiAuthConfig);
                        if (resetCallbacks) {
                            ((/** @type {?} */ (this._firebaseUiConfig))).callbacks = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
=======
        /** @type {?} */
        var uiAuthConfig = this.getUIAuthConfig();
        // Check if callbacks got computed to reset them again after providing the to firebaseui.
        // Necessary for allowing updating the firebaseui config during runtime.
        /** @type {?} */
        var resetCallbacks = false;
        if (uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS]) {
            resetCallbacks = true;
            delete uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS];
        }
        // show the firebaseui
        this.firebaseUIService.firebaseUiInstance.start('#firebaseui-auth-container', uiAuthConfig);
        if (resetCallbacks) {
            ((/** @type {?} */ (this._firebaseUiConfig))).callbacks = null;
        }
>>>>>>> d2238c173485e483dc5c33b9fc5a8b41e366caaa
    };
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.getCallbacks = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var signInSuccessWithAuthResult = function (authResult, redirectUrl) {
            _this.ngZone.run(function () {
                _this.signInSuccessWithAuthResultCallback.emit({
                    authResult: authResult,
                    redirectUrl: redirectUrl
                });
            });
            return _this.firebaseUiConfig.signInSuccessUrl;
        };
        /** @type {?} */
        var signInFailureCallback = function (error) {
            _this.ngZone.run(function () {
                _this.signInFailureCallback.emit({
                    code: error.code,
                    credential: error.credential
                });
            });
            return Promise.reject();
        };
        return {
            signInSuccessWithAuthResult: signInSuccessWithAuthResult,
            signInFailure: signInFailureCallback,
        };
    };
    /**
     * @param {?} configuration
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.getNewConfigurationString = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        delete configuration.callbacks;
        if (!configuration.autoUpgradeAnonymousUsers) {
            delete configuration.autoUpgradeAnonymousUsers;
        }
        /** @type {?} */
        var stringifiedConfiguration = JSON.stringify(configuration, null, 2);
        /* tslint:disable */
        stringifiedConfiguration = stringifiedConfiguration.replace('"credentialHelper": "accountchooser.com"', '"credentialHelper": firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM');
        stringifiedConfiguration = stringifiedConfiguration.replace('"credentialHelper": "googleyolo"', '"credentialHelper": firebaseui.auth.CredentialHelper.GOOGLE_YOLO');
        stringifiedConfiguration = stringifiedConfiguration.replace('"credentialHelper": "none"', '"credentialHelper": firebaseui.auth.CredentialHelper.NONE');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "google.com"', '"provider": firebase.auth.GoogleAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "facebook.com"', '"provider": firebase.auth.FacebookAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "twitter.com"', '"provider": firebase.auth.TwitterAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "github.com"', '"provider": firebase.auth.GithubAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "password"', '"provider": firebase.auth.EmailAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "phone"', '"provider": firebase.auth.PhoneAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"google.com"', 'firebase.auth.GoogleAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"facebook.com"', 'firebase.auth.FacebookAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"twitter.com"', 'firebase.auth.TwitterAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"github.com"', 'firebase.auth.TwitterAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"password"', 'firebase.auth.EmailAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"phone"', 'firebase.auth.PhoneAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace(/"([a-zA-Z0-9]*)": (.*)/g, '$1: $2');
        stringifiedConfiguration = stringifiedConfiguration.replace(/"/g, '\'');
        /* tslint:enable */
        return stringifiedConfiguration;
    };
    FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS = 'COMPUTED_CALLBACKS';
    FirebaseuiAngularLibraryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'firebase-ui',
                    template: '<div id="firebaseui-auth-container"></div>'
                }] }
    ];
    /** @nocollapse */
    FirebaseuiAngularLibraryComponent.ctorParameters = function () { return [
        { type: AngularFireAuth },
        { type: undefined, decorators: [{ type: Inject, args: ['firebaseUIAuthConfig',] }] },
        { type: undefined, decorators: [{ type: Inject, args: ['firebaseUIAuthConfigFeature',] }] },
        { type: NgZone },
        { type: FirebaseuiAngularLibraryService }
    ]; };
    FirebaseuiAngularLibraryComponent.propDecorators = {
        signInSuccessCallback: [{ type: Output, args: ['signInSuccess',] }],
        signInSuccessWithAuthResultCallback: [{ type: Output, args: ['signInSuccessWithAuthResult',] }],
        signInFailureCallback: [{ type: Output, args: ['signInFailure',] }],
        language: [{ type: Input }]
    };
    return FirebaseuiAngularLibraryComponent;
}());
export { FirebaseuiAngularLibraryComponent };
if (false) {
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS;
    /**
     * @deprecated Use signInSuccessWithAuthResult
     * @type {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.signInSuccessCallback;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.signInSuccessWithAuthResultCallback;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.signInFailureCallback;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.language;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.subscription;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.firebaseuiLibrary;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.angularFireAuth;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype._firebaseUiConfig;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype._firebaseUiConfig_Feature;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.ngZone;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.firebaseUIService;
}
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLWVuLWVzLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQWdDLE1BQU0sRUFBRSxLQUFLLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xJLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFFWixnQkFBZ0IsR0FNakIsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFJN0MsT0FBTyxLQUFLLFFBQVEsTUFBTSxjQUFjLENBQUM7QUFFekMsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckYsT0FBTyxlQUFlLENBQUM7QUFDdkIsSUFBTyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzdELElBQU8sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztBQUNqRSxJQUFPLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7QUFDL0QsSUFBTyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzdELElBQU8saUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUMzRCxJQUFPLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7QUFHM0Q7SUFzQ0UsMkNBQW9CLGVBQWdDLEVBQ0EsaUJBQW9FLEVBQzdELHlCQUE0RSxFQUNuSCxNQUFjLEVBQ2QsaUJBQWtE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d0JBQXdCLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO1FBRXRILHdCQUF3QixHQUFHLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLG1CQUFtQjtRQUNuQixPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFwUXVCLG9EQUFrQixHQUFHLG9CQUFvQixDQUFDOztnQkFMbkUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsNENBQTRDO2lCQUN2RDs7OztnQkEvQk8sZUFBZTtnREFtRVIsTUFBTSxTQUFDLHNCQUFzQjtnREFDN0IsTUFBTSxTQUFDLDZCQUE2QjtnQkFyRVYsTUFBTTtnQkFtQnZDLCtCQUErQjs7O3dDQW9CcEMsTUFBTSxTQUFDLGVBQWU7c0RBRXRCLE1BQU0sU0FBQyw2QkFBNkI7d0NBQ3BDLE1BQU0sU0FBQyxlQUFlOzJCQUV0QixLQUFLOztJQTJQUix3Q0FBQztDQUFBLEFBMVFELElBMFFDO1NBdFFZLGlDQUFpQzs7O0lBQzVDLHFEQUFrRTs7Ozs7SUFLbEUsa0VBQTJHOztJQUUzRyxnRkFBcUo7O0lBQ3JKLGtFQUEyRzs7SUFFM0cscURBQXNDOztJQUV0Qyx5REFBbUM7O0lBRW5DLDhEQUErQjs7SUFtQm5CLDREQUF3Qzs7SUFDeEMsOERBQTRHOztJQUM1RyxzRUFBMkg7O0lBQzNILG1EQUFzQjs7SUFDdEIsOERBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIE91dHB1dCwgSW5wdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGh9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBBdXRoTWV0aG9kcyxcbiAgQXV0aFByb3ZpZGVyLFxuICBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnLFxuICBDcmVkZW50aWFsSGVscGVyLFxuICBGaXJlYmFzZVVJQXV0aENvbmZpZyxcbiAgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUsXG4gIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzLFxuICBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0LFxuICBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyxcbn0gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXInO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aUVzIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWlFbiBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lbic7XG4vLyBub2luc3BlY3Rpb24gRVM2VW51c2VkSW1wb3J0c1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7RmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZX0gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlJztcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgR29vZ2xlQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXI7XG5pbXBvcnQgRmFjZWJvb2tBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyO1xuaW1wb3J0IFR3aXR0ZXJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXI7XG5pbXBvcnQgR2l0aHViQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXI7XG5pbXBvcnQgRW1haWxBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyO1xuaW1wb3J0IFBob25lQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlcjtcbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZpcmViYXNlLXVpJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGlkPVwiZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVEX0NBTExCQUNLUyA9ICdDT01QVVRFRF9DQUxMQkFDS1MnO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Ugc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0XG4gICAqL1xuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzJykgc2lnbkluU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgQE91dHB1dCgnc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Jykgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBAT3V0cHV0KCdzaWduSW5GYWlsdXJlJykgc2lnbkluRmFpbHVyZUNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JbkZhaWx1cmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIC8vIGxhbmd1YWdlIG11c3QgYmUgZWl0aGVyICdlbicgb3IgJ2VzJ1xuICBASW5wdXQoKSBsYW5ndWFnZTogJ2VuJyB8ICdlcycgPSAnZW4nO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBmaXJlYmFzZXVpTGlicmFyeTogYW55O1xuXG4gIHByaXZhdGUgc3RhdGljIGdldEF1dGhQcm92aWRlcihwcm92aWRlcjogQXV0aFByb3ZpZGVyKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHByb3ZpZGVyKSB7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5Hb29nbGU6XG4gICAgICAgIHJldHVybiBHb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5GYWNlYm9vazpcbiAgICAgICAgcmV0dXJuIEZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuVHdpdHRlcjpcbiAgICAgICAgcmV0dXJuIFR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5HaXRodWI6XG4gICAgICAgIHJldHVybiBHaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5QYXNzd29yZDpcbiAgICAgICAgcmV0dXJuIEVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGhvbmU6XG4gICAgICAgIHJldHVybiBQaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZ3VsYXJGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoLFxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZycpIHByaXZhdGUgX2ZpcmViYXNlVWlDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXG4gICAgICAgICAgICAgIEBJbmplY3QoJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScpIHByaXZhdGUgX2ZpcmViYXNlVWlDb25maWdfRmVhdHVyZTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVVJU2VydmljZTogRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSkge31cblxuICBhc3luYyBuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcbiAgICBpZiAoIGNoYW5nZXMubGFuZ3VhZ2UgKSB7XG4gICAgICBpZiAoIHRoaXMubGFuZ3VhZ2UgPT09ICdlbicgKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkgPSBhd2FpdCBpbXBvcnQoJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VuJyk7XG4gICAgICB9IGVsc2UgaWYgKCB0aGlzLmxhbmd1YWdlID09PSAnZXMnICkge1xuICAgICAgICB0aGlzLmZpcmViYXNldWlMaWJyYXJ5ID0gYXdhaXQgaW1wb3J0KCdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvciggJ0xhbmd1YWdlIG11c3QgYmUgZWl0aGVyIFwiZW5cIiBvciBcImVzXCInICk7XG4gICAgICB9XG4gICAgfVxuICAgICg8YW55PndpbmRvdykuZmlyZWJhc2V1aSA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnk7XG4gIH1cblxuICBnZXQgZmlyZWJhc2VVaUNvbmZpZygpOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5fZmlyZWJhc2VVaUNvbmZpZyxcbiAgICAgIC4uLnRoaXMuX2ZpcmViYXNlVWlDb25maWdfRmVhdHVyZVxuICAgIH0gYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hbmd1bGFyRmlyZUF1dGguYXV0aFN0YXRlLnN1YnNjcmliZSgodmFsdWU6IFVzZXIpID0+IHtcbiAgICAgIGlmICgodmFsdWUgJiYgdmFsdWUuaXNBbm9ueW1vdXMpIHx8ICF2YWx1ZSkge1xuICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgY29uc29sZS53YXJuKGBcIkZpcmViYXNlVUlBdXRoQ29uZmlnXCIgaXNuJ3Qgc3VwcG9ydGVkIHNpbmNlIHZlcnNpb24gMy4zLjAgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxcblBsZWFzZSB1c2UgdGhlIG5hdGl2ZSBjb25maWd1cmF0aW9uIG9mIGZpcmViYXNldWkgXCJmaXJlYmFzZXVpLmF1dGguQ29uZmlnXCJgKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW4gY29weSB5b3VyIGNvbnZlcnRlZCBjb25maWd1cmF0aW9uOlxcbicsIHRoaXMuZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyh0aGlzLmdldFVJQXV0aENvbmZpZygpKSk7XG5cbiAgICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVJUG9wdXAoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBtdXN0IGJlIGF0IGxlYXN0IG9uZSBBdXRoUHJvdmlkZXIuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5zaWduSW5PcHRpb25zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVJUG9wdXAoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBtdXN0IGJlIGF0IGxlYXN0IG9uZSBBdXRoUHJvdmlkZXIuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoISF0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVJQXV0aENvbmZpZygpOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB7XG4gICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMpIHtcbiAgICAgIGlmICghKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzKSB7XG4gICAgICAgIHRoaXMuX2ZpcmViYXNlVWlDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU10gPSB0cnVlO1xuICAgICAgICAodGhpcy5fZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzID0gdGhpcy5nZXRDYWxsYmFja3MoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdXRoQ29uZmlnOiBGaXJlYmFzZVVJQXV0aENvbmZpZyA9ICh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpO1xuXG4gICAgY29uc3QgYXV0aFByb3ZpZGVyczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGZvciAobGV0IHByb3ZpZGVyIG9mIGF1dGhDb25maWcucHJvdmlkZXJzKSB7XG4gICAgICBpZiAoISEocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZykuY3VzdG9tQ29uZmlnKSB7XG4gICAgICAgIHByb3ZpZGVyID0gKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcpO1xuXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyV2l0aENvbmZpZyA9IHByb3ZpZGVyLmN1c3RvbUNvbmZpZztcbiAgICAgICAgcHJvdmlkZXJXaXRoQ29uZmlnWydwcm92aWRlciddID0gRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LmdldEF1dGhQcm92aWRlcihwcm92aWRlci5wcm92aWRlcik7XG5cbiAgICAgICAgYXV0aFByb3ZpZGVycy5wdXNoKHByb3ZpZGVyV2l0aENvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2goRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LmdldEF1dGhQcm92aWRlcihwcm92aWRlciBhcyBBdXRoUHJvdmlkZXIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b3NVUkwgPSBhdXRoQ29uZmlnLnRvcyA/IGF1dGhDb25maWcudG9zIDogJyc7XG4gICAgY29uc3QgcHJpdmFjeVBvbGljeVVybCA9IGF1dGhDb25maWcucHJpdmFjeVBvbGljeVVybCA/IGF1dGhDb25maWcucHJpdmFjeVBvbGljeVVybCA6ICcnO1xuXG4gICAgbGV0IGF1dGhNZXRob2QgPSAncG9wdXAnO1xuICAgIHN3aXRjaCAoYXV0aENvbmZpZy5tZXRob2QpIHtcbiAgICAgIGNhc2UgQXV0aE1ldGhvZHMuUmVkaXJlY3Q6XG4gICAgICAgIGF1dGhNZXRob2QgPSAncmVkaXJlY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgIGNhc2UgQXV0aE1ldGhvZHMuUG9wdXA6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgY3JlZGVudGlhbEhlbHBlcjtcbiAgICBzd2l0Y2ggKGF1dGhDb25maWcuY3JlZGVudGlhbEhlbHBlcikge1xuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLk5vbmU6XG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5PbmVUYXA6XG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuQWNjb3VudENob29zZXI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gdGhpcy5maXJlYmFzZXVpTGlicmFyeS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuQUNDT1VOVF9DSE9PU0VSX0NPTTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycyA9IGF1dGhDb25maWcuYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycyA9PSBudWxsID8gZmFsc2UgOiBhdXRoQ29uZmlnLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM7XG5cbiAgICBjb25zdCBzaWduSW5TdWNjZXNzQ2FsbGJhY2sgPSAoY3VycmVudFVzZXI6IGZpcmViYXNlLlVzZXIsIGNyZWRlbnRpYWw6IGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwsIHJlZGlyZWN0VXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lnbkluU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe1xuICAgICAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgICAgIGNyZWRlbnRpYWwsXG4gICAgICAgICAgcmVkaXJlY3RVcmxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAhIWF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FsbGJhY2tzOiBhbnkgPSB7XG4gICAgICAuLi50aGlzLmdldENhbGxiYWNrcygpLFxuICAgICAgc2lnbkluU3VjY2VzczogbnVsbFxuICAgIH07XG5cbiAgICBpZiAoIWF1dGhDb25maWcuZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgY29uc29sZS53YXJuKCdbRmlyZWJhc2VVaUFuZ3VsYXJdIHNpZ25JblN1Y2Nlc3MgY2FsbGJhY2sgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQgY2FsbGJhY2sgaW5zdGVhZC5cXG4nICtcbiAgICAgICAgJ1RvIHJlbW92ZSB0aGlzIHdhcm5pbmcgc2V0IGRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2sgb24gdGhlIEZpcmViYXNlVWlDb25maWcgT2JqZWN0LicpO1xuICAgICAgY2FsbGJhY2tzLnNpZ25JblN1Y2Nlc3MgPSBzaWduSW5TdWNjZXNzQ2FsbGJhY2s7XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlQ29uZmlndXJhdGlvbjogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgPSB7XG4gICAgICBjYWxsYmFja3M6IGNhbGxiYWNrcyxcbiAgICAgIHNpZ25JbkZsb3c6IGF1dGhNZXRob2QsXG4gICAgICBzaWduSW5PcHRpb25zOiBhdXRoUHJvdmlkZXJzLFxuICAgICAgdG9zVXJsOiB0b3NVUkwsXG4gICAgICBwcml2YWN5UG9saWN5VXJsOiBwcml2YWN5UG9saWN5VXJsLFxuICAgICAgY3JlZGVudGlhbEhlbHBlcjogY3JlZGVudGlhbEhlbHBlcixcbiAgICAgIGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM6IGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnNcbiAgICB9O1xuICAgIGlmICghIWF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybCkge1xuICAgICAgbmF0aXZlQ29uZmlndXJhdGlvbi5zaWduSW5TdWNjZXNzVXJsID0gYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xuICAgIH1cbiAgICByZXR1cm4gbmF0aXZlQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZmlyZWJhc2VVSVBvcHVwKCkge1xuICAgIGNvbnN0IGZpcmViYXNlVWlJbnN0YW5jZSA9IGF3YWl0IHRoaXMuZmlyZWJhc2VVSVNlcnZpY2UuZ2V0SW5zdGFuY2UoIHRoaXMubGFuZ3VhZ2UgKTtcblxuICAgIGNvbnN0IHVpQXV0aENvbmZpZyA9IHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCk7XG5cbiAgICAvLyBDaGVjayBpZiBjYWxsYmFja3MgZ290IGNvbXB1dGVkIHRvIHJlc2V0IHRoZW0gYWdhaW4gYWZ0ZXIgcHJvdmlkaW5nIHRoZSB0byBmaXJlYmFzZXVpLlxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgYWxsb3dpbmcgdXBkYXRpbmcgdGhlIGZpcmViYXNldWkgY29uZmlnIGR1cmluZyBydW50aW1lLlxuICAgIGxldCByZXNldENhbGxiYWNrcyA9IGZhbHNlO1xuICAgIGlmICh1aUF1dGhDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU10pIHtcbiAgICAgIHJlc2V0Q2FsbGJhY2tzID0gdHJ1ZTtcbiAgICAgIGRlbGV0ZSB1aUF1dGhDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU107XG4gICAgfVxuXG4gICAgLy8gc2hvdyB0aGUgZmlyZWJhc2V1aVxuICAgIGZpcmViYXNlVWlJbnN0YW5jZS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB1aUF1dGhDb25maWcpO1xuXG4gICAgaWYgKHJlc2V0Q2FsbGJhY2tzKSB7XG4gICAgICAodGhpcy5fZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENhbGxiYWNrcygpOiBhbnkge1xuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCA9IChhdXRoUmVzdWx0OiBVc2VyQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2suZW1pdCh7XG4gICAgICAgICAgYXV0aFJlc3VsdCxcbiAgICAgICAgICByZWRpcmVjdFVybFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VVaUNvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xuICAgIH07XG5cbiAgICBjb25zdCBzaWduSW5GYWlsdXJlQ2FsbGJhY2sgPSAoZXJyb3I6IGZpcmViYXNldWlFbi5hdXRoLkF1dGhVSUVycm9yKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JbkZhaWx1cmVDYWxsYmFjay5lbWl0KHtcbiAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICAgIGNyZWRlbnRpYWw6IGVycm9yLmNyZWRlbnRpYWxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0OiBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXG4gICAgICBzaWduSW5GYWlsdXJlOiBzaWduSW5GYWlsdXJlQ2FsbGJhY2ssXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyhjb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk6IHN0cmluZyB7XG4gICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzO1xuXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMpIHtcbiAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM7XG4gICAgfVxuXG4gICAgbGV0IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyYXRpb24sIG51bGwsIDIpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImFjY291bnRjaG9vc2VyLmNvbVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImdvb2dsZXlvbG9cIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE8nKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwibm9uZVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FJyk7XG5cbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdvb2dsZS5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJmYWNlYm9vay5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInR3aXR0ZXIuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdpdGh1Yi5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJwYXNzd29yZFwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwicGhvbmVcIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdvb2dsZS5jb21cIicsICdmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImZhY2Vib29rLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJ0d2l0dGVyLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdpdGh1Yi5jb21cIicsICdmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwYXNzd29yZFwiJywgJ2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwaG9uZVwiJywgJ2ZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIihbYS16QS1aMC05XSopXCI6ICguKikvZywgJyQxOiAkMicpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIi9nLCAnXFwnJyk7XG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xuICAgIHJldHVybiBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb247XG4gIH1cbn1cbiJdfQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQXFCLE1BQU0sRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFDTCxXQUFXLEVBQ1gsWUFBWSxFQUVaLGdCQUFnQixHQU1qQixNQUFNLHFDQUFxQyxDQUFDOztBQUU3QyxPQUFPLEtBQUssUUFBUSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRixPQUFPLGVBQWUsQ0FBQztBQUN2QixJQUFPLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7QUFDN0QsSUFBTyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0FBQ2pFLElBQU8sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztBQUMvRCxJQUFPLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7QUFDN0QsSUFBTyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQzNELElBQU8saUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUszRDtJQXNDRSwyQ0FBb0IsZUFBZ0MsRUFDQSxpQkFBb0UsRUFDN0QseUJBQTRFLEVBQ25ILE1BQWMsRUFDZCxpQkFBa0Q7UUFKbEQs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Q0FBQzs7Z0JBTG5FLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDRDQUE0QztpQkFDdkQ7Ozs7Z0JBL0JPLGVBQWU7Z0RBbUVSLE1BQU0sU0FBQyxzQkFBc0I7Z0RBQzdCLE1BQU0sU0FBQyw2QkFBNkI7Z0JBckVWLE1BQU07Z0JBaUJ2QywrQkFBK0I7Ozt3Q0FzQnBDLE1BQU0sU0FBQyxlQUFlO3NEQUV0QixNQUFNLFNBQUMsNkJBQTZCO3dDQUNwQyxNQUFNLFNBQUMsZUFBZTsyQkFFdEIsS0FBSzs7SUF1UFIsd0NBQUM7Q0FBQSxBQXRRRCxJQXNRQztTQWxRWSxpQ0FBaUM7OztJQUM1QyxxREFBa0U7Ozs7O0lBS2xFLGtFQUEyRzs7SUFFM0csZ0ZBQXFKOztJQUNySixrRUFBMkc7O0lBRTNHLHFEQUEwQjs7SUFFMUIseURBQW1DOztJQUVuQyw4REFBK0I7O0lBbUJuQiw0REFBd0M7O0lBQ3hDLDhEQUE0Rzs7SUFDNUcsc0VBQTJIOztJQUMzSCxtREFBc0I7O0lBQ3RCLDhEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgQXV0aE1ldGhvZHMsXHJcbiAgQXV0aFByb3ZpZGVyLFxyXG4gIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcsXHJcbiAgQ3JlZGVudGlhbEhlbHBlcixcclxuICBGaXJlYmFzZVVJQXV0aENvbmZpZyxcclxuICBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSxcclxuICBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyxcclxuICBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0LFxyXG4gIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnLFxyXG59IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyJztcclxuLy8gbm9pbnNwZWN0aW9uIEVTNlVudXNlZEltcG9ydHNcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQge0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2V9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCBHb29nbGVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcjtcclxuaW1wb3J0IEZhY2Vib29rQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcjtcclxuaW1wb3J0IFR3aXR0ZXJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBHaXRodWJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcjtcclxuaW1wb3J0IEVtYWlsQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlcjtcclxuaW1wb3J0IFBob25lQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlcjtcclxuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcclxuXHJcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmaXJlYmFzZS11aScsXHJcbiAgdGVtcGxhdGU6ICc8ZGl2IGlkPVwiZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiPjwvZGl2PidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBDT01QVVRFRF9DQUxMQkFDS1MgPSAnQ09NUFVURURfQ0FMTEJBQ0tTJztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3NpZ25JblN1Y2Nlc3MnKSBzaWduSW5TdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuXHJcbiAgQE91dHB1dCgnc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Jykgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG4gIEBPdXRwdXQoJ3NpZ25JbkZhaWx1cmUnKSBzaWduSW5GYWlsdXJlQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluRmFpbHVyZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuICAvLyBsYW5ndWFnZSBtdXN0IGJlIGVpdGhlciAnZW4nIG9yICdlcydcclxuICBASW5wdXQoKSBsYW5ndWFnZTogc3RyaW5nOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgZmlyZWJhc2V1aUxpYnJhcnk6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyOiBBdXRoUHJvdmlkZXIpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChwcm92aWRlcikge1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5Hb29nbGU6XHJcbiAgICAgICAgcmV0dXJuIEdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuRmFjZWJvb2s6XHJcbiAgICAgICAgcmV0dXJuIEZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5Ud2l0dGVyOlxyXG4gICAgICAgIHJldHVybiBUd2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5HaXRodWI6XHJcbiAgICAgICAgcmV0dXJuIEdpdGh1YkF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGFzc3dvcmQ6XHJcbiAgICAgICAgcmV0dXJuIEVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5QaG9uZTpcclxuICAgICAgICByZXR1cm4gUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZ3VsYXJGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoJ2ZpcmViYXNlVUlBdXRoQ29uZmlnJykgcHJpdmF0ZSBfZmlyZWJhc2VVaUNvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyxcclxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnKSBwcml2YXRlIF9maXJlYmFzZVVpQ29uZmlnX0ZlYXR1cmU6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlVUlTZXJ2aWNlOiBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgZmlyZWJhc2VVaUNvbmZpZygpOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnRoaXMuX2ZpcmViYXNlVWlDb25maWcsXHJcbiAgICAgIC4uLnRoaXMuX2ZpcmViYXNlVWlDb25maWdfRmVhdHVyZVxyXG4gICAgfSBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIFsnZW4nLCdlcyddLmluZGV4T2YodGhpcy5sYW5ndWFnZSkgPT09IC0xICkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCAnTGFuZ3VhZ2UgbXVzdCBiZSBlaXRoZXIgXCJlblwiIG9yIFwiZXNcIicgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maXJlYmFzZXVpTGlicmFyeSA9ICggdGhpcy5sYW5ndWFnZSA9PT0gJ2VuJyApID9cclxuICAgICAgICByZXF1aXJlKCAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZW4nICkgOlxyXG4gICAgICAgIHJlcXVpcmUoICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcycgKTtcclxuICAgICAgdGhpcy5maXJlYmFzZVVJU2VydmljZS5pbml0KCB0aGlzLmZpcmViYXNldWlMaWJyYXJ5ICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmFuZ3VsYXJGaXJlQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKCh2YWx1ZTogVXNlcikgPT4ge1xyXG4gICAgICBpZiAoKHZhbHVlICYmIHZhbHVlLmlzQW5vbnltb3VzKSB8fCAhdmFsdWUpIHtcclxuICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzKSB7XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgXCJGaXJlYmFzZVVJQXV0aENvbmZpZ1wiIGlzbid0IHN1cHBvcnRlZCBzaW5jZSB2ZXJzaW9uIDMuMy4wIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cXG5QbGVhc2UgdXNlIHRoZSBuYXRpdmUgY29uZmlndXJhdGlvbiBvZiBmaXJlYmFzZXVpIFwiZmlyZWJhc2V1aS5hdXRoLkNvbmZpZ1wiYCk7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW4gY29weSB5b3VyIGNvbnZlcnRlZCBjb25maWd1cmF0aW9uOlxcbicsIHRoaXMuZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyh0aGlzLmdldFVJQXV0aENvbmZpZygpKSk7XHJcblxyXG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVJUG9wdXAoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgQXV0aFByb3ZpZGVyLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuc2lnbkluT3B0aW9ucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVJUG9wdXAoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgQXV0aFByb3ZpZGVyLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICghIXRoaXMuc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFVJQXV0aENvbmZpZygpOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB7XHJcbiAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xyXG4gICAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcykge1xyXG4gICAgICAgIHRoaXMuX2ZpcmViYXNlVWlDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU10gPSB0cnVlO1xyXG4gICAgICAgICh0aGlzLl9maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MgPSB0aGlzLmdldENhbGxiYWNrcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRoQ29uZmlnOiBGaXJlYmFzZVVJQXV0aENvbmZpZyA9ICh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpO1xyXG5cclxuICAgIGNvbnN0IGF1dGhQcm92aWRlcnM6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIGZvciAobGV0IHByb3ZpZGVyIG9mIGF1dGhDb25maWcucHJvdmlkZXJzKSB7XHJcbiAgICAgIGlmICghIShwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKS5jdXN0b21Db25maWcpIHtcclxuICAgICAgICBwcm92aWRlciA9IChwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXJXaXRoQ29uZmlnID0gcHJvdmlkZXIuY3VzdG9tQ29uZmlnO1xyXG4gICAgICAgIHByb3ZpZGVyV2l0aENvbmZpZ1sncHJvdmlkZXInXSA9IEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5nZXRBdXRoUHJvdmlkZXIocHJvdmlkZXIucHJvdmlkZXIpO1xyXG5cclxuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2gocHJvdmlkZXJXaXRoQ29uZmlnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2goRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LmdldEF1dGhQcm92aWRlcihwcm92aWRlciBhcyBBdXRoUHJvdmlkZXIpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvc1VSTCA9IGF1dGhDb25maWcudG9zID8gYXV0aENvbmZpZy50b3MgOiAnJztcclxuICAgIGNvbnN0IHByaXZhY3lQb2xpY3lVcmwgPSBhdXRoQ29uZmlnLnByaXZhY3lQb2xpY3lVcmwgPyBhdXRoQ29uZmlnLnByaXZhY3lQb2xpY3lVcmwgOiAnJztcclxuXHJcbiAgICBsZXQgYXV0aE1ldGhvZCA9ICdwb3B1cCc7XHJcbiAgICBzd2l0Y2ggKGF1dGhDb25maWcubWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgQXV0aE1ldGhvZHMuUmVkaXJlY3Q6XHJcbiAgICAgICAgYXV0aE1ldGhvZCA9ICdyZWRpcmVjdCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgbnVsbDpcclxuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5Qb3B1cDpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3JlZGVudGlhbEhlbHBlcjtcclxuICAgIHN3aXRjaCAoYXV0aENvbmZpZy5jcmVkZW50aWFsSGVscGVyKSB7XHJcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5Ob25lOlxyXG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuT25lVGFwOlxyXG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLkFjY291bnRDaG9vc2VyOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMgPSBhdXRoQ29uZmlnLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMgPT0gbnVsbCA/IGZhbHNlIDogYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzO1xyXG5cclxuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NDYWxsYmFjayA9IChjdXJyZW50VXNlcjogZmlyZWJhc2UuVXNlciwgY3JlZGVudGlhbDogZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmw6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2lnbkluU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe1xyXG4gICAgICAgICAgY3VycmVudFVzZXIsXHJcbiAgICAgICAgICBjcmVkZW50aWFsLFxyXG4gICAgICAgICAgcmVkaXJlY3RVcmxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiAhIWF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FsbGJhY2tzOiBhbnkgPSB7XHJcbiAgICAgIC4uLnRoaXMuZ2V0Q2FsbGJhY2tzKCksXHJcbiAgICAgIHNpZ25JblN1Y2Nlc3M6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFhdXRoQ29uZmlnLmRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgY29uc29sZS53YXJuKCdbRmlyZWJhc2VVaUFuZ3VsYXJdIHNpZ25JblN1Y2Nlc3MgY2FsbGJhY2sgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQgY2FsbGJhY2sgaW5zdGVhZC5cXG4nICtcclxuICAgICAgICAnVG8gcmVtb3ZlIHRoaXMgd2FybmluZyBzZXQgZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjayBvbiB0aGUgRmlyZWJhc2VVaUNvbmZpZyBPYmplY3QuJyk7XHJcbiAgICAgIGNhbGxiYWNrcy5zaWduSW5TdWNjZXNzID0gc2lnbkluU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5hdGl2ZUNvbmZpZ3VyYXRpb246IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnID0ge1xyXG4gICAgICBjYWxsYmFja3M6IGNhbGxiYWNrcyxcclxuICAgICAgc2lnbkluRmxvdzogYXV0aE1ldGhvZCxcclxuICAgICAgc2lnbkluT3B0aW9uczogYXV0aFByb3ZpZGVycyxcclxuICAgICAgdG9zVXJsOiB0b3NVUkwsXHJcbiAgICAgIHByaXZhY3lQb2xpY3lVcmw6IHByaXZhY3lQb2xpY3lVcmwsXHJcbiAgICAgIGNyZWRlbnRpYWxIZWxwZXI6IGNyZWRlbnRpYWxIZWxwZXIsXHJcbiAgICAgIGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM6IGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnNcclxuICAgIH07XHJcbiAgICBpZiAoISFhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmwpIHtcclxuICAgICAgbmF0aXZlQ29uZmlndXJhdGlvbi5zaWduSW5TdWNjZXNzVXJsID0gYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hdGl2ZUNvbmZpZ3VyYXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpcmViYXNlVUlQb3B1cCgpIHtcclxuICAgIGNvbnN0IHVpQXV0aENvbmZpZyA9IHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY2FsbGJhY2tzIGdvdCBjb21wdXRlZCB0byByZXNldCB0aGVtIGFnYWluIGFmdGVyIHByb3ZpZGluZyB0aGUgdG8gZmlyZWJhc2V1aS5cclxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgYWxsb3dpbmcgdXBkYXRpbmcgdGhlIGZpcmViYXNldWkgY29uZmlnIGR1cmluZyBydW50aW1lLlxyXG4gICAgbGV0IHJlc2V0Q2FsbGJhY2tzID0gZmFsc2U7XHJcbiAgICBpZiAodWlBdXRoQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdKSB7XHJcbiAgICAgIHJlc2V0Q2FsbGJhY2tzID0gdHJ1ZTtcclxuICAgICAgZGVsZXRlIHVpQXV0aENvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaG93IHRoZSBmaXJlYmFzZXVpXHJcbiAgICB0aGlzLmZpcmViYXNlVUlTZXJ2aWNlLmZpcmViYXNlVWlJbnN0YW5jZS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB1aUF1dGhDb25maWcpO1xyXG5cclxuICAgIGlmIChyZXNldENhbGxiYWNrcykge1xyXG4gICAgICAodGhpcy5fZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2FsbGJhY2tzKCk6IGFueSB7XHJcbiAgICBjb25zdCBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQgPSAoYXV0aFJlc3VsdDogVXNlckNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRDYWxsYmFjay5lbWl0KHtcclxuICAgICAgICAgIGF1dGhSZXN1bHQsXHJcbiAgICAgICAgICByZWRpcmVjdFVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VVaUNvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaWduSW5GYWlsdXJlQ2FsbGJhY2sgPSAoZXJyb3I6IGFueSApID0+IHsgLy8gZXJyb3IgdHlwZSBpcyBmaXJlYmFzZXVpRXMuYXV0aC5BdXRoVUlFcnJvclxyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2lnbkluRmFpbHVyZUNhbGxiYWNrLmVtaXQoe1xyXG4gICAgICAgICAgY29kZTogZXJyb3IuY29kZSxcclxuICAgICAgICAgIGNyZWRlbnRpYWw6IGVycm9yLmNyZWRlbnRpYWxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCxcclxuICAgICAgc2lnbkluRmFpbHVyZTogc2lnbkluRmFpbHVyZUNhbGxiYWNrLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyhjb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk6IHN0cmluZyB7XHJcbiAgICBkZWxldGUgY29uZmlndXJhdGlvbi5jYWxsYmFja3M7XHJcblxyXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMpIHtcclxuICAgICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gSlNPTi5zdHJpbmdpZnkoY29uZmlndXJhdGlvbiwgbnVsbCwgMik7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImFjY291bnRjaG9vc2VyLmNvbVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwiZ29vZ2xleW9sb1wiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTycpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcIm5vbmVcIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORScpO1xyXG5cclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ29vZ2xlLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZmFjZWJvb2suY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInR3aXR0ZXIuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ2l0aHViLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwicGFzc3dvcmRcIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwicGhvbmVcIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuXHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJnb29nbGUuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImZhY2Vib29rLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInR3aXR0ZXIuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJnaXRodWIuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwYXNzd29yZFwiJywgJ2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInBob25lXCInLCAnZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG5cclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIihbYS16QS1aMC05XSopXCI6ICguKikvZywgJyQxOiAkMicpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoL1wiL2csICdcXCcnKTtcclxuICAgIC8qIHRzbGludDplbmFibGUgKi9cclxuICAgIHJldHVybiBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==
>>>>>>> d2238c173485e483dc5c33b9fc5a8b41e366caaa
