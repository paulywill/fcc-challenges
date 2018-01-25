
function sym(args) {

  var diff = [].concat.apply([],arguments).reduce(
    function(result, current) {
      console.log("result: " + result);
      console.log("current: " + current);
      console.log("result.indexOf(current): " + result.indexOf(current));
      //If my result array doesn't get current element
      return result.indexOf(current) === -1 ?
      //concat current element to result and return it
      result.concat(current)
      //Otherwise, just return actual result array
      : result.splice(result.indexOf(current), 1);
    }, []
  );

  console.log("diff: " + diff);



  return diff;
}

console.clear();
sym([1, 2, 3], [5, 2, 1, 4]);
