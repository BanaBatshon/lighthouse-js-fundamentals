function merge(array1,array2){
  for (var i = 0; i < array2.length; i ++){
    array1.push(array2[i]);
  }
  array1.sort();
  return array1;
}