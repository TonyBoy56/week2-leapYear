$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = $("input#userInput").val();
    var inputArray = input.split("");
    var vowelsArray = ["a", "e", "i" , "o", "u", "A", "E", "I", "O", "U"];
    console.log(inputArray);
    if (input === "") {
      alert("Invalid submission! Please enter a phrase!");
    } else if (input === int || float) {
      $("#output").text(input);
    } else if (inputArray.includes(vowelsArray)) {
      inputArray.join();
      $("#output").text(inputArray + "ay");
    }
  });
});

