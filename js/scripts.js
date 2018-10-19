// personal-info variables
var name;
var question1;
var question2;
var question3;
var question4;
var question5;



// back-end calculation logic



$(function() {

  $("form#personal-form").submit(function(event) {
    event.preventDefault();

    name = $("input#name").val();

    if (name) {
      $('#personal').addClass("hidden");
      $('#preferences').removeClass("hidden");
    } else {
      alert("Please input your name before proceeding.")
    }
  });

  $('form#preferences-form').submit(function(event) {
    event.preventDefault();
    var companySize = $("#company-size").val()



  });

});
