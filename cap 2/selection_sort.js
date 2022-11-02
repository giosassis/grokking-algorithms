const findSmallestIndex = (arr) => {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const orderBySelection = (arr) => {
  let sortedArray = [];
  let length = arr.length;

  for (i = 0; i < length; i++) {
    var smallestIndex = findSmallestIndex(arr);
    sortedArray.push(arr.splice(smallestIndex, 1)[0]);
  }
  return sortedArray;
};

const result = orderBySelection([5, 3, 6, 2, 10, 18, 23, 70, 85, 200, 90, 78]);
console.log(result)