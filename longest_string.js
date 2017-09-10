//program determines the longest string in a given array
function find_longest (arr) {
  //check if the array is empty, or has just one element
  if (arr.length === 0) {
    return false;
  } else if (arr.length === 1) {
    if (arr[0] == "") {
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
