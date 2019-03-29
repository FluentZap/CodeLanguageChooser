$(document).ready(function () {
  $("#form-language-test").submit(function (event) {
    event.preventDefault();
    $(".result").hide();
    let focus = $("input[name=form-frontback]:checked").val();
    var platform = $("input[name=form-platform]:checked").val();
    var design = $("#form-design:checked").val();
    var goals = $("input[name=form-goals]:checked").val();
    var style = $("input[name=form-language]:checked").val();
    var hobby = $("input[name=form-hobby]:checked").val();

    var notdone = false;

    if (focus === undefined)
    {
      $("#form-titleFocus").addClass("notAnswered");
      $("#form-titleFocus").effect('shake');
      notdone = true;
    }
    if (platform === undefined)
    {
      $("#form-titlePlatform").addClass("notAnswered");
      $("#form-titlePlatform").effect('shake');
      notdone = true;
    }
    if (design === undefined)
    {
      $("#form-titleDesign").addClass("notAnswered");
      $("#form-titleDesign").effect('shake');
      notdone = true;
    }
    if (goals === undefined)
    {
      $("#form-titleGoals").addClass("notAnswered");
      $("#form-titleGoals").effect('shake');
      notdone = true;
    }
    if (style === undefined)
    {
      $("#form-titleLearning").addClass("notAnswered");
      $("#form-titleLearning").effect('shake');
      notdone = true;
    }
    if (hobby === undefined)
    {
      $("#form-titleHobby").addClass("notAnswered");
      $("#form-titleHobby").effect('shake');
      notdone = true;
    }

    if (notdone)
    {
      return;
    }
    console.log("sdsd");

    $("#form-language-test").toggle("fade", { direction: 'up', mode: 'hide'}, 1000, function () {
      $("body").animate({backgroundColor: "#f27b7b"}, 'slow');
      $("#ruby").toggle("slide", { direction: 'down', mode: 'show'}, 1000);
    });
  });
});
