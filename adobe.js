setTimeout(() => {
  console.log(1);
});
Promise.resolve(2).then((res) => {
  console.log(res);
});
Promise.resolve("3").then((res) => {
  setTimeout(() => {
    console.log(res);
  });
});
new Promise(() => {
  console.log(4);
});
setTimeout(() => {
  console.log(5);
});
