$(function () {
  $(".hamburger-menu").on("click", function () {
    $("toggle").toggleClass("open");
    $("nav-link").toggleClass("open");
  });

  AOS.init({
    easing: escape,
    duration: 1000,
  });
});
