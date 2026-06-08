function isPangram(string) {
  string = string.toLowerCase();
​
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
​
  for (let i = 0; i < alphabet.length; i++) {
    if (!string.includes(alphabet[i])) {
      return false;
    }
  }
​
  return true;
}
console.log(isPangram('love')); 
console.log(isPangram('The quick brown fox jumps over the lazy dog'));