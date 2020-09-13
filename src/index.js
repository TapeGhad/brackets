module.exports = function check(str, bracketsConfig) {
  let arrOpen = ["(", "[", "{"];
  let arrClose = [")", "]", "}"];
  console.log(str);
  let finalOpen = false, countOpen = 0, countClose = 0, isOpen1 = false, isOpen2 = false, isOpen3 = false, bad = false;
  let arr = str.split("").map((elem, index) => {
    if (arrOpen.includes(elem)) {
      if (elem === "(") isOpen1 = true;
      if (elem === "[") isOpen2 = true;
      if (elem === "{") isOpen3 = true;
      countOpen ++;
    }
    else if (arrClose.includes(elem)) {
      
      countClose ++;
    }
    return elem;
  });
  if (arrOpen.includes(arr[arr.length - 1])) finalOpen = true;
  return (finalOpen === false && countClose === countOpen) ? true : false;
}
