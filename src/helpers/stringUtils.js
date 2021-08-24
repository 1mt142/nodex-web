/**
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-05-19 11:11:00
 * @modify date 2021-06-14 13:22:16
 * @desc [description]
 */

export const formatCardNumber = (cardNumber) => {
  const cnString = String(cardNumber);
  const formatted = `${cnString.substr(0, 4)}********${cnString.substr(
    12,
    15
  )}`;
  return formatted;
};

export const stringToTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
export const ucFirst = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};
