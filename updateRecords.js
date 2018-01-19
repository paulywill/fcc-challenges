
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {


  console.log("id: " + id);
  console.log("prop: " + prop);
  console.log("value: " + value);

  for (var k in collection){
    console.log("ID found?: " + (k == id));

    //record exists
    if(k == id){

      //modify data
      if(value != ""){


        if(prop == "tracks"){
          console.log("prop is tracks!!!!!!!!!");
        }
        else if(prop == "artist") {
          console.log("prop is artist!!!!!!!!!");
        }
      }//mod data

      //delete data
      else{
        //delete myObj.test.key1;

        console.log(prop + " has been deleted! :S");

      }



      }

    } //record exists check






  return collection;
}


console.clear();
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


/* var getTitle=function(json,val){
  for (var key in json) {
    var titles= json[key];
    for (var tit in titles) {
      var names=titles[tit];
      for (var name in names) {
        var string=names[name];
        if(string===val)
          return tit;
      }
    }
}
}

searchVal.forEach(function(valToSearch){
   console.log(getTitle(json,valToSearch));
});

*/


//
