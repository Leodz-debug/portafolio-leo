const toggle = document.getElementById("themeToggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove("hide");
    return;
  }

  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove("hide");
    lastScroll = currentScroll;
    return;
  }

  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});