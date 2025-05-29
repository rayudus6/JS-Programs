// "use Strict";

// console.log(this);

function reverse(str) {
  let result = [];
  const words = str.split(" ");
  // console.log(words);
  // for (let i = 0; i < words.length; i++) {
  for (let word of words) {
    // console.log(words[i]);
    const res = word.split("").reverse().join("");
    // console.log(res);
    result.push(res);
  }
  return result.join(" ");
}

console.log(reverse("my name rayudu"));
