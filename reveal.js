function reveal() {
  let reveal = document.querySelector(".reveal");
  const scrolled = window.scrollY;
  if (scrolled >= 73) {
    reveal.style.position = "fixed";
    reveal.style.top = 0;
  } else {
    reveal.style.position = "absolute";
    reveal.style.top = "unset";
  }
}
window.addEventListener("scroll", reveal);
