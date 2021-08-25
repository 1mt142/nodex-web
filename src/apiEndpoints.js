/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 12:03:32
 * @modify date 2021-06-15 12:03:34
 * @desc [description]
 */

// export const BASE_URL = "http://192.168.10.32:8004/b2b_backend/";
// export const BASE_URL = "https://uat-api.upay.systems/b2b_backend/";
export const BASE_URL = "http://192.168.11.228:5000/";
// Auth endpoints

export const LOGIN_URL = "/v1/auth/login";
export const REFRESH_TOKEN = "user/login/token-refresh/";
export const USER_SET_PASSWORD = "user/reset-password/";

// Reports

export const GET_USERS = "/v1/users";
export const GET_BLOGS = "/v1/blogs";
