//nlog()n
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
  }

  return [...mergedArr, ...left.slice(i), ...right.slice(j)];
}

const arr = [1, 5, 2, 3, 9, 5, 78];
console.log(mergeSort(arr));
