// determines the longest string in a given array
function find_longest(arr) {
  //set length of array
  var length = arr.length;
  // check if the array contains numbers
  for (var i = 0; i < length; i++) {
    if (typeof(arr[i]) === "number") {
      return "Use string inputs only!";
    }
  }
  
  // kept this line to remind myself of the wrong syntax for typeof
  //   if (typeof(arr[i] === "number")) {

  //check if the array is empty, or has just one element
  if (length === 0) {
    return false;
  } else if (length === 1) {
    if (arr[0] === "") {
      return "Your array is empty!";
    } else {
      return arr;
    }
  }

  // sort function from highest to lowest, return first value in arr after sorting
  var longest = arr.sort(function(a,b){
    return b.length - a.length;
  })[0];
  // log the longest string
  console.log(longest);
}
