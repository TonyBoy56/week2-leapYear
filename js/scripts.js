$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    var vowelsArray = ["a", "e", "i" , "o", "u", "A", "E", "I", "O", "U"];
    var consonatesArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
    var inputArray = userInput.split("");
    
    for (var i = 0; i < vowelsArray.length; i++) {
      if (userInput.includes(i)) {
        $("#output").text(userInput);
      }
    }
  });
});

