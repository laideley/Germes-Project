const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

const sr = ScrollReveal({
  distance: "20px",
  duration: 2000,
  reset: true,
});

sr.reveal(".main-text", { delay: 50, origin: "top" });
