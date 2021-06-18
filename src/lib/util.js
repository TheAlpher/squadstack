import { validTabKeys } from "./constants";

const isValidTab = (index) => {
  if (validTabKeys.includes(Number(index))) {
    return true;
  }
  return false;
};

const objToString = (obj) => {
  let str = "";
  if (obj instanceof Object)
    Object.keys(obj).forEach((ele) => {
      str = str + `${ele} : ${obj[ele]} \n`;
    });
  return str;
};
export { isValidTab, objToString };
