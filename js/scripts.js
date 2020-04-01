$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    var numberInput = parseInt(userInput);
    console.log(userInput);
    var vowelsArray = ["a", "e", "i" , "o", "u"];
    var consonatesArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
    
    if (numberInput === true) {
      $("#output").text("'"+ userInput+ "'" + " is a number, my dude. How about some words next time?")
    }
    for (var i = 0; i < vowelsArray.length; i++) {
      if (vowelsArray[i] === userInput.includes("i") || vowelsArray[i] === userInput.includes("a")){
        $("#output").text(userInput + "ay");
      } else if (vowelsArray[i] === userInput.charAt(0)) {
       $("#output").text(userInput + "way");
      }
    }
    for (var i = 0; i < consonatesArray.length; i++) {
      if (consonatesArray[i] === userInput.charAt(0)) {
       $("#output").text(userInput + "way");
      }
    }
  });
});


  // else {
  //  $("#output").text(phrase.slice(1, phrase.length) + phrase.charAt(0) + "ay");
  // }
