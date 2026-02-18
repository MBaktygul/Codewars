function padIt(str, n) {
  let i = 0;
​
  while (i < n) {
    if (i % 2 === 0) {
      str = "*" + str;   // add to left
    } else {
      str = str + "*";   // add to right
    }
    i++;
  }
​
  return str;
}
​