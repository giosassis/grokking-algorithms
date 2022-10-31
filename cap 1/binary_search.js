"use strict";

const binary_search = (arr, item) => {
  let low = 0;
  let hight = arr.length - 1;

  while (low <= hight) {
    let mid = Math.floor((low + hight) / 2);
    let guess = arr[mid];

    if (guess == item)
      return mid;

    if (guess > item) {
      hight = mid - 1;
      console.log("kick was too high");
    } else {
      low = mid + 1;
      console.log("kick was too low");
    }
  }

  console.log("number inexistent");
  return null;
};

const myArr = [1, 3, 5, 7, 9];

 