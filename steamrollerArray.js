function steamrollArray(arr) {
// I'm a steamroller, baby
  for (i = 0; i < arr.length; i++){  //==> For loop not working for me
    if (Array.isArray(arr[i]) ){
      flattened(arr);
    }
  }

  console.log("arr: " + arr);
  return arr;
}

function flattened(arr){
  return arr.reduce(
      ( acc, cur ) => acc.concat(cur),
      []
    );

}



console.clear();
steamrollArray([1, [2], [3, [[4]]]]);
