function reverse(str) {
  const result = [];
  const words = str.split(" ");
  //   const words = [...str];
  //   console.log(words);
  // const words=str.split(' ').reverse().join(' ').split('').reverse().join('')
  //   for (let i = 0; i < words.length; i++) {
  //     let res = words[i].split("").reverse().join("");
  //     result.push(res);
  //   }
  for (let word of words) {
    let res = word.split("").reverse().join("");
    result.push(res);
  }
  // const result=words.map((word) =>{
  //     const res=word.split('').reverse().join('')
  //     return res
  // })
  return result.join(" ");
  // return words
}

function reverseArray(str) {
  let arr = str.split("");
  let data = "";
  let result = "";
  for (i = arr.length - 1; i >= 0; i--) {
    data += arr[i];
  }
  let all = data.split(" ");
  for (j = all.length - 1; j >= 0; j--) {
    result += all[j] + " ";
  }
  return result;
}

const transformer = (str, fun) => {
  console.log(`Original value ::${str}`);
  console.log(`Transformered value ::${fun(str)}`);
  console.log(`Function name ::${fun.name}`);
};

transformer("My Name is Rayudu", reverseArray);
transformer("My Name is Geeta", reverse);
