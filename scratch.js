function unite(){
    //Flat array arguments, then process to reduce data
    return [].concat.apply([], arguments).reduce(function(result, current){
      //If my result array doesn't get current element
      return result.indexOf(current) === -1
      //concat current element to result and return it
      ? result.concat(current)
      //Otherwise, just return actual result array
      : result;
    }, []);
  }

  var array = unite([1,2], [1,6,2,3], [4,5]);

  console.log(array);
