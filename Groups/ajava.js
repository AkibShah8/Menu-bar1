const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("skicky", this.window.scrollY > 0);
})