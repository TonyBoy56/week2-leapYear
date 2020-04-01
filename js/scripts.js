// Business Interface
function isVowel(letter) {
  var vowelsArray = ["a", "e", "i" , "o", "u"];

  for (var i = 0; i < vowelsArray.length; i++) {
    if (vowelsArray[i] === letter) {
      return true;
    }
  }
  return false;
}

function igPayatinLay(userInput) {
  var numberInput = parseInt(userInput);
    if (numberInput) {
      return"'"+ userInput+ "'" + " is a number, my dude. How about some words next time?";
    } else if (userInput === "i" || userInput === "a"){
      return userInput + "ay";
    } else if (isVowel(userInput.charAt(0)) ) {
      return userInput + "way";
    } else if (userInput.slice(0, 2) === "qu") {
      return  userInput.slice(2) + userInput.slice(0,2) + "ay";
    } else {
     for (var i = 0; i < userInput.length; i++) {
      if ( isVowel(userInput.charAt(i))) {
        return userInput.slice(i)       //sliced from the vowel to the end
         + userInput.slice(0,i) //from beginning of word to the vowel but not including the vowel
         + "ay";    // then adds "AY"
      }
    }
  }
}

// UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $('#output').text(igPayatinLay(userInput));
  });
});