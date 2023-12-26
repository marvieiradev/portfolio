function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();

const favIconTag = document.getElementById("favIconTag");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
  if (isDark.matches) favIconTag.href = "/icon-dark.svg";
  else favIconTag.href = "/icon-light.svg";
};

changeFavicon();
isDark.addEventListener("change", changeFavicon);

