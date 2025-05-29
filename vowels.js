function vowels(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count = count + 1;
    }
  }
  return count;
}

console.log(vowels("Hello world"));

const calcTypeOfLetters = (str) => {
  let vowels = 0;
  let cons = 0;
  const VOWELS = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (VOWELS.includes(char)) {
      vowels++;
    } else {
      cons++;
    }
  }

  return { vowels, cons };
};

console.log(calcTypeOfLetters("hello Rayudu"));
