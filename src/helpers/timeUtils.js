/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 13:52:34
 * @modify date 2021-06-15 13:52:51
 * @desc All time formatting utils should be here
 */
/* eslint-disable no-restricted-syntax */
import format from "date-fns/format";
import { parseISO } from "date-fns";

export const formatDateTime = (timedate) => {
  const result = format(parseISO(timedate), "dd-MM-yyyy hh:mm:ss a");
  return result;
};

export const formatDate = (timedate) => {
  const result = format(parseISO(timedate), "yyyy-MM-dd");
  return result;
};

export const formatTime = (timedate) => {
  const result = format(parseISO(timedate), "HH:mm:ss");
  return result;
};

export const formatTimeCustom = (timedate, formatString) => {
  const result = format(parseISO(timedate), formatString);
  return result;
};

export const formatParamTime = (params) => {
  for (const key in params) {
    if (key.includes("date")) {
      params[key] = new Date(params[key]).toISOString();
    }
  }
};
