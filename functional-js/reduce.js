function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(prev, curr){
  	prev[curr] = ++prev[curr] || 1;
  	return prev;
  },{});
}

module.exports = countWords