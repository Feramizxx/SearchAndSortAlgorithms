const arr = [1, 2, 4, 67];
const linearSearchFunction = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const result = linearSearchFunction(arr, 4);
console.log(result);
