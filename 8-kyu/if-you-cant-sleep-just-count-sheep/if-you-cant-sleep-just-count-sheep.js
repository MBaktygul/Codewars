var countSheep = function (num){
  let text = '';
    if (num == 0) {
    return text = '';
  }
  for (let i = 1; i <= num; i++) {
    text += i + " sheep...";
  }
  return text;
}