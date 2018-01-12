function steamrollArray(arr) {
  //thank you Stackoverflow
  //https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
