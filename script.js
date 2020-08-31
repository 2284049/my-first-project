$(".title-1").click(function () {
   $(".text-1").toggle();
   $(".right-chevron-1").toggle();
   $(".bottom-chevron-1").toggle();
});

$(".title-2").click(function () {
   $(".text-2").toggle();
   $(".right-chevron-2").toggle();
   $(".bottom-chevron-2").toggle();
});

$(".title-3").click(function () {
   $(".text-3").toggle();
   $(".right-chevron-3").toggle();
   $(".bottom-chevron-3").toggle();
});

$("#professional-request").click(function () {
   $("#email-button").html(
      "<i class='fa fa-envelope'></i>Send professional request"
   );
});

$("#personal-request").click(function () {
   $("#email-button").html(
      "<i class='fa fa-envelope'></i>Send personal request"
   );
});

$("#contact-form-text-box").keypress(function () {
   $("#email-button").removeAttr("disabled");
});

$("#robot-checkbox").click(function () {
   $("#robot-checkbox").removeClass("is-invalid");
});

$("#email-button").click(function () {
   window.open(
      "mailto:someonesomewhere@gmail.com?subject=Hello&body=" +
         $("#contact-form-text-box").val(),
      "_blank"
   );
});
