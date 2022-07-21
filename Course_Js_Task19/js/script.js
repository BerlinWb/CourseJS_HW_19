"use strict";

const arr = [1, 2, 3, -1, -2, -3];

const positiveArray = function (arr) {
  let exampleArr = [];
  if (arr.length === 0) {
    return alert('array is empty');
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] >= 0)
      exampleArr.push(arr[i]);
  } if (exampleArr.length !== 0) {
    return exampleArr;
  } else {
    return null;
  }
};
console.log(positiveArray(arr));

