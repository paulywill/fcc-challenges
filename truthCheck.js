
function truthCheck(collection, pre) {
  // Is everyone being true?
  for (var k in collection) {
    console.log(  collection[k][pre]);
    var preValue = collection[k][pre];
    if ( !(pre in collection[k]) || (!preValue)   ){
      return false;
    }
  }
  return true;
}

console.clear();

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
