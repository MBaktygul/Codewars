function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0;
  }
​
  array.sort((a, b) => a - b);
  array.pop();    
  array.shift();  
​
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
​
  return sum;
}