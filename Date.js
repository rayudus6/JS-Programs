"use strict";

console.log(new Date()); //2023-04-07T16:55:40.420Z
console.log(new Date(2020, 7, 18)); //2020-08-17T18:30:00.000Z
console.log(new Date("2021-7-1")); //2021-06-30T18:30:00.000Z

const date = new Date();
console.log(date.getFullYear()); //2023
console.log(date.getDay()); //5
console.log(date.getMonth()); //3 month jan statrt with 0 jan-0 to Dec-11

date.setFullYear(2020);
date.setMonth(2);
date.setDate(25);

console.log(Number(new Date())); //2020-03-25T17:02:24.334Z it will chane the year and dates
console.log(this);
