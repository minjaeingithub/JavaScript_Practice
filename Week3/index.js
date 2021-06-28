$("h1").addClass("big-title margin-50");
$("h1").text("BYE");
$("button").html("<em> Hey </em>");
$("a").attr("href", "https://www.naver.com");
$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  // console.log(event.key); //show which key got pressed on console screen
  $("h1").text(event.key);
});

$("h1").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
