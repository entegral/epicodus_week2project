// personal-info variables
var name;

// preference variables



// back-end calculation logic



$(function() {
  $("preferences").hide();
  $("suggestion").hide();

  // personal info variale assignment
  $("form#personal-info").submit(function() {
    name = $("input#name").val();
    $("#personal-info-panel").hide();
  });



});
