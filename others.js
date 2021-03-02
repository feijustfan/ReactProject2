// //shorthand property names es6
// let a = "foo", b = 42, c = {};
// let o = {a, b, c};

// console.log(o);












// function quickSort1(inputArr, start, end, pivot){
//   let arrOut = [];
//   let start = 0, end = length(inputArr) -1, pivot = Math.round((end - start)/2);
//   arrOut = grouping(inputArr, start, end, pivot);
//   //sort left part
//   quickSort(arrOut, start, pivot, leftpivot);
//   //sort right part
//   quickSort(arrOut, pivot+1, end, rightpivot);


// }
// // ensure items before p is smaller, items afer p is larger
// function grouping1(inputArray, start, end, pivot){
//   let arrayAfterGrouping = Number[], arrayAfterGrouping = inputArray;
//   let i = start;
//   let j = end;
//   let p = pivot;
//   while (i < j){
//     if(a[i] > a[p] && a[j] < a[p]){
      
//         a[i], a[j] = a[j], a[i];
//         i++,j--; 
//       }else if(a[i] > a[p] && a[j] > a[p]){
//         //item j right, j stays, i move right
//         i++;
//       }else if(a[i] < a[p] && a[j] > a[p]){
//         //both items right, find another 2, both move
//         i++, j--;
//       }else if(a[i] < a[p] && a[j] < a[p]){
//         //item i right, move pointer j
//         j--;
//       }
//   }
//   reurn arrayAfterGrouping
// } 

  
//set pivot at the end of the array
function qucikSort2(array, left, right){
  // if(array.legth === 1){
  //   return array;
  // }

  // const pivot  = array[array.length - 1];
  let begin  = left || 0;
  let end  = right || array.length - 1;
  
  if (begin < end){
    let partition = findPartition(array, begin, end);

    quickSort2(arr, begin, pivot - 1);
    qucikSort2(arr, pivot + 1, end);
  }

  function findPartition(array, begin, end){
    let pivot = array[end];
    let i = begin - 1;
    for (let j = begin; j < end; j++){
      if(array[j] < pivot){
        i++;

        //swap value at i, j
        array[i],array[j] = array[j], array[i];
      }

    }

    //swap value at i +1 at high or pivot

    array[i +1],array[j] = array[j], array[i + 1];

    return i +1;
  }
  
}

//test array:
let array = [9,1,2,5,7,4,6,8,3];
qucikSort2(array);
console.log(array);