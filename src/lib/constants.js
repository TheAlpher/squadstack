import data from "assets/json/data.json";
const validTabKeys = data.map(obj=>  obj.key);
const extraPlan = {
  planName: "Enterprise",
  description: "Want more than 80 qualified leads per month",
};
export { validTabKeys, extraPlan };
