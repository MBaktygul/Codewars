function highAndLow(numbers){
  const nums = numbers.split(' ').map(Number);
  let min = Math.min(...nums);
  let max = Math.max(...nums);
​
  let result = [max, min].toString().replace(',', ' ');
  
  return result;
}