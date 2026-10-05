function accum(s) {
    let result = "";
​
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
​
        let part = letter.toUpperCase() + letter.toLowerCase().repeat(i);
​
        if (i > 0) {
            result += "-";
        }
​
        result += part;
    }
​
    return result;
}
​
console.log(accum('abcdefR'))