

export default {
    checkDataValidation (data, regexType) {
        let valid = true;
        valid = regexType.test(data);
        return valid;
    },

    generateSeedPhrase (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     },
};