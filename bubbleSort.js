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

const arr = [5, 6, 8, 2, 6, 78, 20];
const bubbleSortedArr = bubbleSort(arr);
console.log(bubbleSortedArr);

// swap func
//   let temp;
//   temp=arr[j];
//   arr[j]=arr[j+1];
//   arr[j+1]=temp;
