function testfunc(array){
  for (i = 0; i < array.length; i++){
    let increment = i*2;
    array[i] = array[i] + increment;
  }

  return array;
}

let array = [1,1,1,1]
console.log(testfunc(array));