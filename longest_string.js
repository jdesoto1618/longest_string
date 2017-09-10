//program determines the longest string in a given array
function find_longest(arr) {
  //set length of array
  var length = arr.length;
  
  // var i = 0;
  // //check if the array contains numbers
  // for (i; i < length; i++) {
  //   if (typeof(arr[i] === "number")) {
  //     return "One or more values in the array are numeric! Please pass only strings.";
  //   }
  // }

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

  //sort function from highest to lowest, return first value in arr after sorting
  var longest = arr.sort(function(a,b){
    return b.length - a.length;
  })[0];
  //log value. This will be the longest string
  console.log(longest);
}
