// personal-info variables
var name;
var question1;
var question2;
var question3;
var question4;
var question5;
var companySize;



// back-end calculation logic



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
    companySize = $("#company-size").val()
    if (companySize) {
      $('#preferences-1').addClass("hidden");
      $('#preferences-2').removeClass("hidden");
    } else {
      alert("Please input your a preferred size before proceeding.")
    }
  });

  $('form#preferences-form-2').submit(function(event) {
    event.preventDefault();
    versatility = $("#company-size").val()
    if (companySize) {
      $('#preferences-2').addClass("hidden");
      $('#preferences-3').removeClass("hidden");
    } else {
      alert("Please input versatility preference before submitting.")
    }
  });

  $('form#preferences-form-3').submit(function(event) {
    event.preventDefault();
    versatility = $("#company-size").val()
    if (companySize) {
      $('#preferences-3').addClass("hidden");
      $('#preferences-4').removeClass("hidden");
    } else {
      alert("Please input versatility preference before submitting.")
    }
  });


});
