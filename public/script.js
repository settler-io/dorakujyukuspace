// hamburger
const hamburger = document.getElementById("hamburger-button");
const nav = document.getElementById("header-nav");
const bg = document.getElementById("hamburger-bg");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  bg.classList.toggle("is-active");
  document.body.classList.toggle("fixed");
});
bg.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  bg.classList.toggle("is-active");
  document.body.classList.toggle("fixed");
});

$(function () {
  var height = $("header").height();
  $("body").css("margin-top", height);
});
