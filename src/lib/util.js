import { validTabKeys } from "./constants";

const isValidTab = (index) => {
  if (validTabKeys.includes(Number(index))) {
    return true;
  }
  return false;
};
export { isValidTab };
