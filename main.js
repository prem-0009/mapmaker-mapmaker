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

// 4
const upperCaseFirstLetters = function(arr){
  let result = [];
  let toLower = []
  //changing to lower case
  for ( let i = 0; i < arr.length; i++){
    toLower.push(arr[i].toLowerCase())
  }
  //changing the first char to upper case
  for ( let i = 0; i < toLower.length; i++){
    result.push(toLower[i][0].toUpperCase()+toLower[i].slice(1,toLower[i].length))
  }
  
  return result;
}

//5
const changeToInitials = function(name){
  let initialList = [];
  
  for ( let i = 0; i < name.length; i++){
    let newName = name[i]
    let initials = '';
    for ( let i = 0; i < newName.length; i++){
      if ( i === 0 || newName[i-1] === ' '){
        initials += newName[i].toUpperCase()
        initials;
      }
    // initialList.push(initials);
    }
    initialList.push(initials);
  }
    initialList;
    return initialList;
  }
  

//6
const doubleOdd = function(arr){
let result = [];
let test =Math.floor(23.5)
test;
for ( let i = 0; i < arr.length; i++){
  if (Math.floor(arr[i]) %2 !== 0 ){
    result.push(arr[i] * 2)
  } else {
    result.push(arr[i])
  }
}

return result;
}


//7
const add1ToLeft = function(arr){
  let result = [];
  for ( let i = 0; i < arr.length; i++){
    if ( arr[i] >= 0){
      result.push(Number('1' + arr[i]))
    } else {
      nonNegative = Math.abs(arr[i])
      nonNegative;
      result.push(Number('-1'+ nonNegative))
    }
  }

  return result;
}

console.log(add1ToLeft([1,2,3,-4,0,101]))
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
