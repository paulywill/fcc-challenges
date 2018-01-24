
function sym(args) {

  var flattened = [...arguments].reduce(
    function(a, b) {
      console.log("a: " + a);
      console.log("b: " + b);
      return a.concat(b);
    },
    []
  );

  console.log("flattened: " + flattened);
  console.log(typeof + flattened);
  console.log("flattened[2]: " + flattened[2]);





  return args;
}

console.clear();
sym([1, 2, 3], [5, 2, 1, 4]);
