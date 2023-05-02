import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constants";
import ls from "../localstorage/localStorage";

class Token {
  getToken(key) {
    return ls.getItem(key);
  }

  decodeToken(key) {
    return jwt.decode(this.getToken(key));
  }

  setToken(key, token) {
    ls.setItem(key, token);
  }

  clearToken() {
    ls.removeItem(ACCESS_TOKEN_KEY);
    ls.removeItem(REFRESH_TOKEN_KEY);
  }
}

export default new Token();
