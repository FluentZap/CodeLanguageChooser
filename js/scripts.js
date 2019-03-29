var chosen;

$(document).ready(function () {
  $("#form-language-test").submit(function (event) {
    event.preventDefault();
    $(".result").hide();

    var focus = $("input[name=form-focus]:checked").val();
    var platform = $("input[name=form-platform]:checked").val();
    var design = $("#form-design:checked").val();
    var goals = $("input[name=form-goals]:checked").val();
    var style = $("input[name=form-style]:checked").val();
    var hobby = $("input[name=form-hobby]:checked").val();

    var notdone = false;

    if (focus === undefined) shakeMeRed("#form-titleFocus"), notdone = true;
    if (platform === undefined) shakeMeRed("#form-titlePlatform"), notdone = true;
    if (goals === undefined) shakeMeRed("#form-titleGoals"), notdone = true;
    if (style === undefined) shakeMeRed("#form-titleStyle"), notdone = true;
    if (hobby === undefined) shakeMeRed("#form-titleHobby"), notdone = true;
    if (notdone) return;

    var cSharp = 0, php = 0, ruby = 0, java = 0;
    var color;
    // Scale of 0, 1 or 2 as weight for the quesitons
    if (focus === "option1") cSharp += 1, php += 0, ruby += 2, java += 1;
    if (focus === "option2") cSharp += 2, php += 2, ruby += 0, java += 1;

    if (platform === "option1") cSharp += 1, php += 2, ruby += 2, java += 1;
    if (platform === "option2") cSharp += 2, php += 0, ruby += 0, java += 1;
    if (platform === "option3") cSharp += 1, php += 0, ruby += 0, java += 2;
    if (design === "on") cSharp += 0, php += 0, ruby += 1, java += 0;

    if (goals === "option1") cSharp += 1, php += 1, ruby += 2, java += 0;
    if (goals === "option2") cSharp += 1, php += 0, ruby += 0, java += 1;
    if (goals === "option3") cSharp += 2, php += 1, ruby += 1, java += 2;

    if (style === "option1") cSharp += 1, php += 1, ruby += 0, java += 1;
    if (style === "option2") cSharp += 1, php += 0, ruby += 0, java += 1;
    if (style === "option3") cSharp += 1, php += 1, ruby += 0, java += 1;

    if (hobby === "option1") cSharp += 2, php += 1, ruby += 0, java += 2;
    if (hobby === "option2") cSharp += 1, php += 2, ruby += 2, java += 0;
    if (hobby === "option3") cSharp += 1, php += 2, ruby += 2, java += 0;

    if (cSharp >= php && cSharp >= ruby && cSharp >= java) chosen = "#cSharp";
    if (php >= cSharp && php >= ruby && php >= java) chosen = "#php";
    if (ruby >= php && ruby >= cSharp && ruby >= java) chosen = "#ruby";
    if (java >= php && java >= ruby && java >= cSharp) chosen = "#java";

    if (chosen === "#cSharp")
      color = "#c693c6"
    else if (chosen === "#php")
      color = "#a0bcef"
    else if (chosen === "#ruby")
      color = "#f27b7b"
    else if (chosen === "#java")
      color = "#93785e"

    $("#quizBox").toggle("fade", { direction: 'up', mode: 'hide'}, 1000, function () {
      $("body").animate({backgroundColor: color}, 'slow');
      $(chosen).toggle("slide", { direction: 'down', mode: 'show'}, 1000);
    });

  });

  $(".retake").click(function () {
    //$(element).is(":visible");

    $(chosen).hide("fade", { direction: 'down', mode: 'hide'}, 1000, function () {
      $("body").animate({backgroundColor: "#bebbbb"}, 'slow');
      resetForm();
      $("#quizBox").show("slide", { direction: 'up', mode: 'show'}, 1000);
    });


  });



});

function resetForm() {
  $('input[name=form-focus]').prop('checked', false);
  $('input[name=form-platform]').prop('checked', false);

  $('#form-design').prop('checked', false);

  $('input[name=form-goals]').prop('checked', false);
  $('input[name=form-style]').prop('checked', false);
  $('input[name=form-hobby]').prop('checked', false);

  $('#form-titleFocus').removeClass("notAnswered");
  $('#form-titlePlatform').removeClass("notAnswered");
  $('#form-titleGoals').removeClass("notAnswered");
  $('#form-titleStyle').removeClass("notAnswered");
  $('#form-titleHobby').removeClass("notAnswered");
}




function shakeMeRed(toBeShaken) {
  $(toBeShaken).addClass("notAnswered");
  $(toBeShaken).effect('shake');
}
