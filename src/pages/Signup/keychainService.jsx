import Keychain from 'react-native-keychain';

export const GetCredentials = async () => {
    return new Promise ((resolve, reject) => {
        Keychain.getGenericPassword()
        .then((credentials) => {
            if(credentials && credentials.username){
                console.log('Credentials successfully loaded for user ' + credentials.username);
                resolve(credentials);
            }
        })
        .catch(err => {
            console.log("err: ", err);
            reject(err);
        });
    });
}