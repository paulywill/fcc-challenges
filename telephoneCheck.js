
function telephoneCheck(str) {
  // Good luck!

  var regex1 = /[0-9-]+$/;
  console.log("str: " + str);
  console.log(regex1.test(str));

  ///^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im




  return true;





}

console.clear();

telephoneCheck("555-six-5555");
