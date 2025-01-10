import {jwtDecode} from "jwt-decode";

const showName = () => {
    const Token = localStorage.getItem("Token");

    if (Token !== undefined || Token !== null) {
        const decodedToken = jwtDecode(Token);
        return decodedToken;
    }
};

export {showName}
