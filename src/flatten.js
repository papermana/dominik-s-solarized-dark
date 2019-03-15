const flatten = (obj, prefix = "") => {
  const newObj = {};

  for (prop in obj) {
    const val = obj[prop];
    const newPrefix = prefix ? `${prefix}.${prop}` : prop;

    if (val.toString() === "[object Object]") {
      Object.assign(newObj, flatten(val, newPrefix));
    } else {
      newObj[newPrefix] = val;
    }
  }

  return newObj;
};

module.exports = flatten;
