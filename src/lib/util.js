import { validTabKeys } from "./constants";

/**
 * Checks if {@param index} is a part of valid keys in {@var validTabKeys}
 * @param {any} index 
 * @returns {Boolean}
 */

const isValidTab = (index) => {
  if (index && validTabKeys.includes(Number(index))) return true;
  return false;
};

/**
 * @param {any} obj 
 * @returns String generated from the key value pairs of {@param obj}
 */

const objToString = (obj) => {
  let str = "";
  if (obj instanceof Object)
    Object.keys(obj).forEach((ele) => {
      str = str + `${ele} : ${obj[ele]} \n`;
    });
  return str;
};
export { isValidTab, objToString };
