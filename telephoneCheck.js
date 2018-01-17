
function telephoneCheck(str) {
 //NANP - http://en.wikipedia.org/wiki/North_American_Numbering_Plan

  //https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript

 //https://stackoverflow.com/questions/45620551/understanding-regexp-for-area-code-phone

 //https://www.regextester.com/17

  var regex1 = /^(?:(?:1?\s*(?:[-]\s*)?)?(\(\s*(\(\d{3}\)|\d{3})\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[-]\s*)?([0-9]{4})$/;


  console.log("str: " + str);
  console.log(regex1.test(str));
  return regex1.test(str);
}

console.clear();

telephoneCheck("555-six-5555");
