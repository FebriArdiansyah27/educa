var navbar = document.getElementById("web-navbar");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.style.background = "navy";
  } else {
    navbar.style.background = "transparent";
  }
};
