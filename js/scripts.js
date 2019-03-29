$(document).ready(function () {
  $("#form-language-test").submit(function (event) {
    event.preventDefault();
    $(".result").hide();
    //$("#ruby").fadeIn();

    $("#form-language-test").toggle("fade", { direction: 'up', mode: 'hide'}, 1000, function () {
      $("body").animate({backgroundColor: "#f27b7b"}, 'slow');
      $("#ruby").toggle("slide", { direction: 'down', mode: 'show'}, 1000);
    });


  });
});
