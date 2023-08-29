const capitalize = (str) => {
  let allLower = str.toLowerCase();
  let capitalized = str.charAt(0).toUpperCase() + allLower.slice(1);
  return capitalized;
};

module.exports = capitalize;
