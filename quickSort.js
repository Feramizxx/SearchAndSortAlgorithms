//nlog()n
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotElement = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const sortedArray = [...quickSort(left), pivotElement, ...quickSort(right)];

  return sortedArray;
}

const arr = [7, 5, 2, 3, 9, 5, 78];
console.log(quickSort(arr));
