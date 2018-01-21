
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
      if(value){

        //deal with artist
        if(prop == "artist"){
          collection[k][prop]=value;
        }

        //deal with tracks
        if(prop =="tracks"){
          if (collection[k][prop]){
            collection[k][prop].push(value);
          }else{
            var newVal = [];
            collection[k][prop] = newVal;
            collection[k][prop].push(value);
          } //else

        }

        //Advance feature: troubleshoot partial find
        /*
        var props = collection[k][prop];
         for (var l in props){
           console.log("props[l] == value: " + (props[l] == value) );
         }
        */

      }else{
        //delete property

        delete collection[k][prop];
        console.log(prop + " has been deleted! :S");
      }
    } //for k
  }
  return collection;
}


console.clear();
// Alter values below to test your code
