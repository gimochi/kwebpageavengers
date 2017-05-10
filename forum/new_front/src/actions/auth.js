import * as service from 'services/auth';

export const AUTH = {
    CHECK_USERNAME: 'CHECK_USERNAME',
    CHECK_EMAIL: 'CHECK_EMAIL',

    LOCAL_REGISTER_PRIOR: 'LOCAL_REGISTER_PRIOR',
    LOCAL_REGISTER: 'LOCAL_REGISTER',

    LOGIN: 'LOGIN',

    OAUTH_CHECK: 'OAUTH_CHECK',
    OAUTH_REGISTER: 'OAUTH_REGISTER',

    CHECK_SESSION: 'CHECK_SESSION',

    RESET_REGISTER_STATUS: 'RESET_REGISTER_STATUS',
    SET_SUBMIT_STATUS: 'SET_SUBMIT_STATUS',

    LOGOUT: 'LOGOUT'
};


export const login = () => ({
    type: AUTH.LOGIN,
    payload: {
        promise: service.login()
    }
})