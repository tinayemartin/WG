$(document).ready(function () {
  $(".hamburger-menu").on("click", function () {
    $(this).toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  AOS.init({
    easing: escape,
    duration: 1000,
  });
});

$(document).ready(function () {
  $(".nav-item").on("click", function () {
    $(".hamburger-menu").toggleClass("open");
    $(this).toggleClass("open");
    $(".nav-list").toggleClass("open");
  });
});