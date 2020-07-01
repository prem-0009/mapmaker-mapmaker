/******************
 * YOUR CODE HERE *
******************/
const doubleAll = function(arr){
  let result = [];
  for ( let i = 0; i < arr.length; i++){
    result.push(arr[i] * 2)
  }
  
  return result;
}

//2
const yelledGreetings = function(str){
  let result = [];
  for ( let i = 0; i < str.length; i++){
    result.push(str[i]+'!');
  }
  return result;
}



//3
const absoluteValues = function(arr){
  let result = [];
  for ( let i = 0; i < arr.length; i++){
    result.push(Math.abs(arr[i]));
  }

  return result;
}

// //4..in a littler bit

const upperCaseFirstLetters = function(arr){
  const result = [];
  for ( let i = 0; i < arr.length; i++){
    let allLowerCase = arr[i].toLowerCase();
    // console.log(allLowerCase);
    for(let i = 1; i<allLowerCase.length; i++){
      let result =allLowerCase[0].toUpperCase();
      result += allLowerCase[i]
      // console.log(result)
    }

 
}return result;
}

upperCaseFirstLetters(['my','park'])

//5
// const changeToInitials = function(arr){
//   let result = [];
//   for ( let i = 0; i < arr.length; i++){
    
//   }

//   return result;
// }

// changeToInitials(['conlin jafa','prem sherp'])


/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
