function findEvenIndex(arr){
  for(i in arr){
    let left = arr.slice(0, i);
    let right = arr.slice(Number(i) + 1, arr.length);
    if(left.reduce((a,b) => a + b, 0) == right.reduce((a,b) => a + b, 0))
      return i;
  }
  return -1;
}

findEvenIndex([1,2,3,4,3,2,1]);
