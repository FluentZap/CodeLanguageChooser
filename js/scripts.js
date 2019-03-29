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
    if (design === undefined) shakeMeRed("#form-titleDesign"), notdone = true;
    if (goals === undefined) shakeMeRed("#form-titleGoals"), notdone = true;
    if (style === undefined) shakeMeRed("#form-titleStyle"), notdone = true;
    if (hobby === undefined) shakeMeRed("#form-titleHobby"), notdone = true;

    if (notdone)
      return;




    $("#form-language-test").toggle("fade", { direction: 'up', mode: 'hide'}, 1000, function () {
      $("body").animate({backgroundColor: "#f27b7b"}, 'slow');
      $("#ruby").toggle("slide", { direction: 'down', mode: 'show'}, 1000);
    });
  });
});





function shakeMeRed(toBeShaken) {
  $(toBeShaken).addClass("notAnswered");
  $(toBeShaken).effect('shake');
}
