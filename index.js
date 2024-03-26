// Code your solution here
function findMatching(arr, name) {
  return arr.filter((item) => item.toLowerCase() === name.toLowerCase());
}

const drivers = ["Dave", "Torrido", "Jason", "Brooks", "Dan"];

// console.log(fuzzyMatch(drivers, "d"));

function fuzzyMatch(arr, name) {
  return arr.filter((item) => item[0].toLowerCase() === name[0].toLowerCase());
}

function matchName(objArr, record) {
  return objArr.filter((item) => item.name === record);
}
