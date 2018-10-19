// personal-info and preferences variables
var name;
var companySize;
var versatility;
var newOrOld;
var frontOrBackEnd;
var interest;

// tally of points for language options
var cSharpTally;
var javaTally;
var phpTally;
var rubyTally;

// back-end calculation logic
var addVote = function(selection, question) {
  if (question === 1) {

  } else if (question === 2) {

  } else if (question === 3) {

  }else if (question === 4) {

  }else if (question === 5) {

  }
}


$(function() {

  $("form#personal-form").submit(function(event) {
    event.preventDefault();

    name = $("input#name").val();

    if (name) {
      $('#personal').addClass("hidden");
      $('#preferences-1').removeClass("hidden");
    } else {
      alert("Please input your name before proceeding.")
    }
  });

  $('form#preferences-form-1').submit(function(event) {
    event.preventDefault();
    companySize = $("#company-size").val();
    addVote(companySize, 1);
    $('#preferences-1').addClass("hidden");
    $('#preferences-2').removeClass("hidden");
  });

  $('form#preferences-form-2').submit(function(event) {
    event.preventDefault();
    versatility = $("#versatility").val();
    addVote(versatility, 2);
    $('#preferences-2').addClass("hidden");
    $('#preferences-3').removeClass("hidden");
  });

  $('form#preferences-form-3').submit(function(event) {
    event.preventDefault();
    newOrOld = $("#newOrOld").val();
    addVote(newOrOld, 3)
    $('#preferences-3').addClass("hidden");
    $('#preferences-4').removeClass("hidden");
  });

  $('form#preferences-form-4').submit(function(event) {
    event.preventDefault();
    frontOrBackEnd = $("#frontOrBackEnd").val();
    addVote(frontOrBackEnd, 4)
    $('#preferences-4').addClass("hidden");
    $('#preferences-5').removeClass("hidden");
  });

  $('form#preferences-form-5').submit(function(event) {
    event.preventDefault();
    interest = $("#interest").val();
    addVote(interest, 5)
    $('#preferences-5').addClass("hidden");
    $('#track').removeClass("hidden");
  });


});
