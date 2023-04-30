const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(right + left / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const arr = [1, 2, 6, 8, 10, 78, 100];
const indexOfSearchedElement = binarySearch(arr, 6);
console.log(indexOfSearchedElement);
