
const global = {
    maxFileSize: 5242880,
    regex: {
        password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
        mobile: /^([6789][0-9]{9})$/,
        pan: /([A-Za-z]+){5}([0-9]+){4}[A-Za-z]{1}$/,
        otp: /^[0-9]{6}$/,
        email: /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
        pincode: /^[1-9][0-9]{5}$/,
        address: /^.{0,40}$/,
        name: /^[a-zA-Z\s.]{2,100}$/,
        alpha: /^[a-zA-Z\s.]*$/,
        alphaOnly: /^[a-zA-Z\s]*$/,
        alphaSpecial: /^[ A-Za-z&]*$/,
        numeric: /^[0-9]*$/,
        alphaNumeric: /^[a-zA-Z0-9]*$/,
        fullname: /^[a-zA-Z\s]*$/ // /^[a-zA-Z]+\s([a-zA-Z ])*[a-zA-Z]+$/
    }
};

export default global;
