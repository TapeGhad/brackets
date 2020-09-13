module.exports = function check(str, bracketsConfig) {
  let arrOpen = ["(", "[", "{", "|", "7", "8", "1", "3", "5"];
  let arrClose = [")", "]", "}", "|", "7", "8", "2", "4", "6"];
  console.log(str);
  let Open = "", storage = [], checkSame = true;
  str.split("").map(elem => {
    if (elem === "|" || elem === "7" || elem === "8") {
      if (checkSame) {
        storage.push(elem);
        checkSame = false;
      }
      else {
        Open = elem;
        if (storage[storage.length - 1] === Open) storage.pop();
        else storage.push(elem);
      }
    }
    else {
      if (arrOpen.includes(elem)) {
        storage.push(elem);
      }
      if (arrClose.includes(elem)) {
        Open = arrOpen[arrClose.indexOf(elem)];
        if (storage[storage.length - 1] === Open) storage.pop();
        else storage.push(elem);
      }
    }
    return elem;
  });
  return storage.length === 0;
}
