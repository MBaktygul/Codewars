function reverseWords(str) {
  let words = str.split(" ");
   let reverseWords = words.map(word => word.split('').reverse().join(''));
  return reverseWords.join(' ')
}