$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    speed: 1000,
    easing: "ease",
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
  });
});

// POPUPS

$(".popup-link").click(function () {
  $(".popup-rec").fadeIn();
  $(".popup-rec").addClass("disabled");
});

$("popup-close").click(function () {
  $(".popup-rec").fadeOut();
});

$(".btn-add").click(function () {
  $(".popup-add").fadeIn();
  $(".popup-add").addClass("disabled");
});

$("popup-close").click(function () {
  $(".popup-add").fadeOut();
});
