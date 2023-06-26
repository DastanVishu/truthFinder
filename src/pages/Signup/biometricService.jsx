import TouchID from 'react-native-touch-id';
import React, {Platform} from 'react-native';

export const CheckBiometricSupportednEnrolled = async () => {
    const optionalConfigObject = {
        unifiedErrors: false,
        passcodeFallback: false
    }

    return new Promise((resolve, reject) => {
        TouchID.isSupported(optionalConfigObject)
        .then((biometry) => {
            if(biometry && biometry !== "FaceID"){
              resolve(true)
            } else {
              let fingerprintLableForOS = Platform.OS == "ios" ? "Touch ID":"Fingerprint";
              reject( fingerprintLableForOS + " is not available on this device");
            }
        })
        .catch(error => {
            let errorCode = Platform.OS == "ios" ? error.name : error.code;
            if (errorCode === "LAErrorTouchIDNotEnrolled" || errorCode === "NOT_AVAILABLE" || errorCode === "NOT_ENROLLED") {
          let fingerprintLableForOS = Platform.OS == "ios" ? "Touch ID" : "Fingerprint";
                resolve(fingerprintLableForOS + " has no enrolled fingers. Please go to settings and enable " + fingerprintLableForOS + " on this device.");
            } else {
                reject(Platform.OS == "ios" ? error.message : translations.t(error.code));
            }
        });
      })

}

export const AuthenticateFingerPrint = () => {
    return new Promise((resolve, reject) => {
        let fingerprintLableForOS = Platform.OS == 'ios' ? "Touch ID" : "Fingerprint";

        TouchID.authenticate('Login to Truth Finder using' + fingerprintLableForOS)
        .then(success => {
            console.log('Authenticated Successfully', success)
            resolve(success);
        })
        .catch(error => {
            console.log('Authentication Failed', error.code)
            reject(error)
        });
    });
}