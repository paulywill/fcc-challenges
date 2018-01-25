
function sym(args) {

  var diff = [].concat.apply([],arguments).reduce(
    function(result, current) {
      console.log("result: " + result);
      console.log("current: " + current);
      console.log("result.indexOf(current): " + result.indexOf(current));

      var index = result.indexOf(current);


      return result.indexOf(current) === -1 ?
      result.concat(current) :
      result.slice(0, index).concat(result.slice(index + 1));
    }, []
  );

  console.log("diff: " + diff);



  return diff;
}

console.clear();
sym([1, 2, 3], [5, 2, 1, 4]);
