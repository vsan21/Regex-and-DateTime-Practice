//1) Write a function that takes a word and returns true if the word ends with 'tonica'
function returnTrue (word) {
  var match = /tonica/;
  return (match.test(word));
}
returnTrue('Techtonica');
//Another way to do it:
var string = 'Techtonica';
var myRegExp = /tonica/;
myRegExp.test(string);


//2) Write a function expression that takes a string replaces all instances of symantec with semantic?
function replaceCharacter (string) {
  var character = /e/gi;
  return (string.replace(character, "i"));
}
replaceCharacter('Symantec is cool. Symantec is nice.');
//Another way to do it:
var string = 'symantec';
var myRegExp = /e/gi;
newstr = string.replace(myRegExp, "i");
console.log(newstr);


//3) Write a function that takes a string and deletes all words that end in ing?
function removeING (string) {
  var ending = /ing/gi;
  return (string.replace(ending, ""));
}
removeING('amazing, incredible, celebrating');
//Another way to do it:
var string = 'amazing, incredible, celebrating';
var myRegExp = /ing/gi;
newstr = string.replace(myRegExp, "");
console.log(newstr);


//4) Write a function that takes a string and returns true if it is an email address? Compare your answer with your neighbor.
function validateEmail(email) {
  var string = /[@][a-z]+[\.][a-z]+/;
  return string.test(email);
}
validateEmail('test123@gmail.com');
//Another way to do it:
var string = 'test123@gmail.com';
var myRegExp = /[@][a-z]+[\.][a-z]+/;
myRegExp.test(string);


//5) Write a function that takes a string containing names separated by commas like "Leah, Russell, Michelle" and returns an array of names, ["Leah", "Russell", "Michelle"]
function stringToArray (array) {
  var removeComma = /\,/gi;
  var newArray = array.replace(removeComma, "");
  return newArray.split(" ");
}
stringToArray('Leah, Russell, Michelle');
//Another way to do it:
var names = 'Leah, Russell, Michelle';
var removeComma = /\,/gi;
var newArray = names.replace(removeComma, "");
newArray.split(" ");
