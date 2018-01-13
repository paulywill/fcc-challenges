
function binaryAgent(str) {
  console.log("str: " + str);
  console.log("str.split(' ').length: " + str.split(' ').length  );

  var splitArr = str.split(' ');
  var strResult = "";
  console.log("splitArr: " + splitArr);
  for (i = 0; i < splitArr.length; i++){
    console.log("Word "+ i +": " + splitArr[i] );
    //The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
    var strDecoded = String.fromCharCode(parseInt(splitArr[i],2) );
    console.log("Word "+ i +" decoded: " +  strDecoded);
    strResult = strResult.concat(strDecoded);
  }
  return strResult;
}


console.clear();
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



//testing
//console.log( parseInt("01000001",2).toString(10) );
console.log( parseInt("01000001",2) );
