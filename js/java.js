var correctAnswer1 = "C";
var correctAnswer2 = "B";
var correctAnswer3 = "A";
var correctAnswer4 = "B";
var correctAnswer5 = "A"

//listener
$("button.checker").on("click", function(e) {

  
  // Don't need e.preventDefault() because we have <button type="button">
  var selectedRadio = $("input[name='question1']:checked");
  var selectedQuestionAnswer = selectedRadio.val();
  var selectedRadioId = selectedRadio.attr("id");
  var selectedLabelHtml = $("label[for='" + selectedRadioId + "']").html();
  if (selectedQuestionAnswer === correctAnswer1) {
    $("#results")
      .html(selectedLabelHtml + " is correct")
      .css("color", "green");
  } else {
    $("#results")
      .html(selectedLabelHtml + " is NOT correct")
      .css("color", "red");
  }
  console.log("selected question answer", selectedQuestionAnswer1);
});