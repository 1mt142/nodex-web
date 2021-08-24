/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 13:52:17
 * @modify date 2021-06-15 13:52:18
 * @desc [description]
 */

import jwtDecode from "jwt-decode";
/**
 * Sets JWT token in local storage
 * @param token {string} JWT token that is obtained from the server
 */
export const setToken = (token) => {
  localStorage.setItem("token", token);
};
/**
 * Gets JWT token from the local storage
 * @returns {string}
 */
export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
export const setProfile = (profile) => {
  localStorage.setItem("profile", JSON.stringify(profile));
};

/**
 * Gets User profile from the local storage
 * @returns {Object}
 */

export const getProfile = () => {
  return JSON.parse(localStorage.getItem("profile")) || {};
};

/**
 * Set JWT refreshtoken to the local storage
 * * @param token {string} JWT refreshtoken that is obtained from the server
 */
export const setRefreshToken = (token) => {
  localStorage.setItem("refreshtoken", token);
};
/**
 * Gets JWT refreshtoken from the local storage
 * @returns {string}
 */
export const getRefreshToken = () => {
  const token = localStorage.getItem("refreshtoken") || null;
  return token;
};

/**
 * Sets permission to the local storage
 * @param permission {string[]} permissions obtained from the server
 */
export const setPermission = (permission) => {
  localStorage.setItem("permission", JSON.stringify(permission));
};

/**
 * Checks if respective permission is available for the user in local storage
 * @param permissionName {string} permission name that we are looking for
 * @returns {boolean}
 */
export const hasPermission = (permissionName) => {
  const permission = JSON.parse(localStorage.getItem("permission") || null);
  return (
    permission &&
    Array.isArray(permission) &&
    permission.includes(permissionName)
  );
};

/**
 * Removes all data from local storage
 */
export const destroyLoginSession = () => {
  localStorage.clear();
};

/**
 * Checks if user is authenticated
 * @returns {boolean}
 */
export const isUserAuthenticated = () => {
  const token = getRefreshToken();
  if (!token) return false;
  const { exp } = jwtDecode(token);
  if (Date.now() >= exp * 1000) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshtoken");
    return false;
  }
  return !!token;
};
