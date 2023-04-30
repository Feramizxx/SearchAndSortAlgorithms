const arr = [1, 2, 4, 67, 6, 12];


/**********Linear Search*********/
const linearSearchFunction = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};


console.log("Index of item  found with Linear Search: " + linearSearchFunction(arr, 4));


/**********Binary Search*********/
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


console.log("Index of item found with Binary Search: "+binarySearch(arr, 6));


/**********Bubble Sort*********/
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const swap = (arr, l, r) => {
        [arr[l], arr[r]] = [arr[r], arr[l]];
      };
  
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  
    return arr;
  };
  
  const bubbleSortedArr = bubbleSort(arr);
  console.log("Sorted array with Bubble Sort Algorithm: "+ bubbleSortedArr);

 /**********Selection Sort*********/
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
  const result = selectionSort(arr);
  console.log("Sorted array with Selection Sort Algorithm: "+result);


 /**********Insertion Sort*********/
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }

  return arr;
};


const sortedArrayWithInsertionMethod = insertionSort(arr);
console.log("Sorted array with Insertion Sort Algorithm: "+sortedArrayWithInsertionMethod);



 /**********Merge Sort*********/
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

console.log("Sorted array with Merge Sort Algorithm: " +mergeSort(arr));


 /**********Quick Sort*********/
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

console.log("Sorted array with Quick Sort Algorithm: "+quickSort(arr));








  
  


  


