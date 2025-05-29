for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//333

for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//012345

let j;
for (j = 0; j < 5; j++) {
  setTimeout(() => {
    console.log(j);
  }, 1000);
}
//55555--5 sixes because of no "="
