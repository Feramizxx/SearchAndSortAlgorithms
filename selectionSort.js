const selectionSort = (arr) => {
  const len = arr.length;

  const swap = (arr, l, r) => {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  };
  for (let i = 0; i < len; i++) {
    let smallestVal = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[smallestVal]) {
        smallestVal = j;
      }

      if (smallestVal !== i) {
        swap(arr,i,smallestVal)
      }
    }
  }
  return arr;
};
const arr = [5, 8, 3, 6, 78, 125, 4505];
const result = selectionSort(arr);
console.log(result);
