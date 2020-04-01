$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = $("input#userInput").val();
    var vowelsArray = ["a", "e", "i" , "o", "u", "A", "E", "I", "O", "U"];
    input.split("");
    console.log(input);
    if (input === "") {
      alert("Invalid submission! Please enter a phrase!");
    //} else if (input === "i", "a") {
      //$("#output").text(input + "ay");
    }
  });
});

