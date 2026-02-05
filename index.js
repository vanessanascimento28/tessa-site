const links = document.querySelectorAll(".nav__link");
const pill = document.querySelector(".nav__pill");

function movePill(link) {
  pill.style.width = link.offsetWidth + "px";
  pill.style.left = link.offsetLeft + "px";
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    link.classList.add("active");
    movePill(link);
  });
});

movePill(document.querySelector(".active"));
