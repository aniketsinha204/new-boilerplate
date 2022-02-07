import { is, curryN, gte } from 'ramda';
import axios from './ApiClient';

const isWithin = curryN(3, (min, max, value) => {
    const isNumber = is(Number);
    return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value);
});
const in200s = isWithin(200, 299);

const signin = (email: string, password: string) =>
    axios
        .post('authentication/auth-admin', { email, password })
        .then((response) => {
            if (in200s(response.status)) {
                return response;
            }
            return null;
        })
        .catch((error) => error.response);

export const userService = {
    signin,
};
