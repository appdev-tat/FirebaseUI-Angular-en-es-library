import { AngularFireAuth } from '@angular/fire/auth';
<<<<<<< HEAD
import * as firebaseuiEs from 'firebaseui-en-es/dist/npm__es';
export declare class FirebaseuiAngularLibraryService {
    private angularFireAuth;
    firebaseUiInstance: firebaseuiEs.auth.AuthUI;
    currentLanguage: 'en' | 'es';
    constructor(angularFireAuth: AngularFireAuth);
    getInstance(language: 'en' | 'es'): Promise<any>;
=======
export declare class FirebaseuiAngularLibraryService {
    private angularFireAuth;
    firebaseUiInstance: any;
    constructor(angularFireAuth: AngularFireAuth);
    init(library: any): void;
>>>>>>> d2238c173485e483dc5c33b9fc5a8b41e366caaa
}
