const findSmallestIndex = (arr) => {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const orderBySelection = (array) => {
  let sortedArray  = [];
  for (i = 0; i < array.length; i++) {
    let smallestIndex = findSmallestIndex(array);
    sortedArray.push(array.splice((smallestIndex,1)[0]));
  }
  return sortedArray;
};

const result = console.log(orderBySelection([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
