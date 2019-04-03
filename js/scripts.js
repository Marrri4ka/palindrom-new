$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();




    var user_answer = $("input#palindrome_user").val();
    var newSentence = user_answer.split("");
    var stringSentence = newSentence.reverse();
    var finalSentence = stringSentence.join("");

    if (finalSentence.toLowerCase() === user_answer.toLowerCase()) {
      alert("palindrom")

    } else {
      alert("no palindrom")
    }

    console.log(finalSentence);


    //   $("#finalResult").text();
    //   $("#hidden").show();
    // });
  });
});