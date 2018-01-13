
function truthCheck(collection, pre) {
  // Is everyone being true?

  var srcKeys = Object.keys(pre);

  console.log("srcKeys.length: " + srcKeys.length);
  console.log("pre: " + pre);


  for(var i = 0; i < srcKeys.length; i++) {

    console.log(collection[srcKeys[i]]);
    console.log(pre in collection[srcKeys[i]]);

    console.log( collection[i].pre );

    if ( !(pre in collection[srcKeys[i]]) || (collection[srcKeys[i]] !== pre[srcKeys[i]]) ){
      return false;
    }

  }

  return true;


}

console.clear();

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
