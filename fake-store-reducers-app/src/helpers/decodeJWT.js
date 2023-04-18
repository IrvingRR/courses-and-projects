import jwt_decode from 'jwt-decode';

export const decodeJWT = (token) => {
    let decoded = jwt_decode(token);
    return decoded;
}