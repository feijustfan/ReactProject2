//shorthand property names es6
let a = "foo", b = 42, c = {};
let o = {a, b, c};

console.log(o);

function quickSort(inputArr, start, end, pivot){
  let arrOut = [];
  let start = 0, end = length(inputArr) -1, pivot = Math.round((end - start)/2);
  arrOut = grouping(inputArr, start, end, pivot);
  //sort left part
  quickSort(arrOut, start, pivot, leftpivot);
  //sort right part
  quickSort(arrOut, pivot+1, end, rightpivot);


}
// ensure items before p is smaller, items afer p is larger
function grouping(inputArray, start, end, pivot){
  let a = [], a = inputArray;
  let i = start;
  let j = end;
  let p = pivot;
  for (i < j){
    if(a[i] > a[p] && a[j] < a[p]){
      
        a[i], a[j] = a[j], a[i];
        i++,j--; 
      }else if(a[i] > a[p] && a[j] > a[p]){
        //item j right, j stays, i move right
        i++;
      }else if(a[i] < a[p] && a[j] > a[p]){
        //both items right, find another 2, both move
        i++, j--;
      }else if(a[i] < a[p] && a[j] < a[p]){
        //item i right, move pointer j
        j--;
      }
  }
  reurn a
} 

  

