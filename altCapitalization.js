function altCap(str) {
  let str1 = "",
    str2 = "";
  for (i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      str1 += str[i].toUpperCase();
      // str2+=str[i].toLowerCase();
    } else {
      str1 += str[i].toLowerCase();
      // str2+=str[i].toUpperCase();
    }
  }
  return [str1];
}

console.log(altCap("rayudu"));
