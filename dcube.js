const arr = [1, 2, 2, 3, 3, 3, 3, 4];

// const result=arr.filter((item,index) =>{
//     // console.log(index)
//     return arr.indexOf(item)==index;
// })

let result = [];

for (i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) == i) {
    result.push(arr[i]);
  }
}

console.log(result);

const str = "xyzxyzabc";
const data = str.split("");

const res = data.filter((item, index, array) => {
  return array.indexOf(item) == index;
});

console.log(res);
