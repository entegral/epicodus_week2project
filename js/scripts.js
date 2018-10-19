// personal-info and preferences variables
var name;
var companySize;
var versatility;
var newOrOld;
var frontOrBackEnd;
var interest;

// tally of points for language options
var cSharpTally = 0;
var javaTally = 0;
var phpTally = 0;
var rubyTally = 0;

// back-end calculation logic
var addVote = function(selection, question) {
  if (question === 1) {
    recordQuestion1(selection);
  } else if (question === 2) {
    recordQuestion2(selection);
  } else if (question === 3) {
    recordQuestion3(selection);
  }else if (question === 4) {
    recordQuestion4(selection);
  }else if (question === 5) {
    recordQuestion5(selection);
  }
  console.log("csharp: " + cSharpTally);
  console.log("java: " + javaTally);
  console.log("php: " + phpTally);
  console.log("ruby: " + rubyTally);
};

var recordQuestion1 = function(vote) {
  if (vote === "large") {
    cSharpTally += 1;
    javaTally += 1;
    phpTally +=1;
  } else if (vote === "small") {
    rubyTally += 1;
  } else {
    cSharpTally += 1;
    javaTally += 1;
    phpTally +=1;
    rubyTally += 1;
  }
};

var recordQuestion2 = function(vote) {
  if (vote === "jackOfAll") {
    rubyTally += 1;
    javaTally += 1;
    cSharpTally += 1;
  } else if (vote === "masterOfOne"){
    cSharpTally += 1;
    phpTally += 1;
  } else {
    cSharpTally += 1;
    javaTally += 1;
    phpTally +=1;
    rubyTally += 1;
  }
};

var recordQuestion3 = function(vote) {
  if (vote === "cuttingEdge") {
    rubyTally += 1;
  } else {
    cSharpTally += 1;
    javaTally += 1;
    phpTally +=1;
  }
};

var recordQuestion4 = function(vote) {
  if (vote === "frontEnd") {
    cSharpTally += 1;
    javaTally += 1;
  } else if (vote === "backEnd") {
    phpTally +=1;
    rubyTally += 1;
  } else {
    cSharpTally += 1;
    javaTally += 1;
    rubyTally += 1;
  }
};

var recordQuestion5 = function(vote) {
  if (vote === "cSharp") {
    cSharpTally += 1;
  }else if (vote === "java") {
    javaTally += 1;
  }else if (vote === "php") {
    phpTally +=1;
  }else {
    rubyTally += 1;
  }
};

var generateResults = function () {
  var result = ""
  if (cSharpTally >= Math.max(javaTally, phpTally, rubyTally)) {
    result = "C# appears to be your best match!";
    $("#csharp-info").removeClass("hidden");
    return result;
  }else if (javaTally >= Math.max(cSharpTally, phpTally,rubyTally)) {
    result = "Java appears to be your best match!"
    $("#java-info").removeClass("hidden");
    return result;
  }else if (phpTally >= Math.max(cSharpTally, javaTally,rubyTally)) {
    result = "PHP appears to be your best match!"
    $("#php-info").removeClass("hidden");
    return result;
  }else if (rubyTally >= Math.max(cSharpTally, javaTally, phpTally)) {
    result = "Ruby appears to be your best match!"
    $("#ruby-info").removeClass("hidden");
    return result;
  }
};

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

    var answer = generateResults();
    $("#result").text(answer);

  });


});
