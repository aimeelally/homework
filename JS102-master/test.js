/*(function(){
  'use strict';
  adaptemyServices.factory('ArrayFunctions',[function(){

   var that= {
              object:{
                convertToArray:convertToArray
              },
              array:{
                sortByKey:sortByKey
              },
              nodelist:{}
             };

    var inputArray = [{name: 'John',hair: 'brown'},{name: 'Daniel',hair: 'red'},{name: 'Soledad',hair: 'blonde'}];

    function sort(){
      inputArray.sort(function (a, b){
        return ((a.hair > b.hair) ? 1 : (a.hair < b.hair) ? -1 : 0);
      });
    }

    function foreach(){
      inputArray.sort(function (a, b){
        return ((a.hair > b.hair) ? 1 : (a.hair < b.hair) ? -1 : 0);
      });
    }


  return that;  
  }]);
}());
*/
var inputArray = [
  {
    name: 'John',
    hair: 'brown'
  },
  {
    name: 'Daniel',
    hair: 'red'
  },
  {
    name: 'Soledad',
    hair: 'blonde'
  }
];

var concatArray = [
  {
    name: 'Aimée',
    hair: 'dark-brown'
  },
  {
    name: 'Ioanna',
    hair: 'black'
  }
];

var arr1 = [1,2,3];
var arr2 = [4,5,6];

//foreach
function hasWhatHairColor(element) {
  console.log(element.name + ' has ' + element.hair + ' hair.');
}
inputArray.forEach(hasWhatHairColor);

//sort
function sortByHairColor(a, b) {
  return((a.hair > b.hair) ? 1 : (a.hair < b.hair) ? -1 : 0);
}
console.log(inputArray.sort(sortByHairColor));

//concat
function joinArrays(originalArray, arrayToAdd){
  var newArray = originalArray.concat(arrayToAdd);
  return newArray;
}
console.log(joinArrays(inputArray, concatArray));

//every

//some
function isLongerThan5(arrayToTest){
  return(arrayToTest.length > 5);
}
//isLongerThan5(inputArray)
inputArray.name.some(isLongerThan5);

//pop
function removeLastElement(element){
  return(element.pop());
}
removeLastElement(inputArray);
console.log(inputArray);

//push
function pushElementToArray(elementToPush, arrayToPushTo){
  return(arrayToPushTo.push(elementToPush));
}
pushElementToArray(concatArray, inputArray);
console.log(inputArray);
