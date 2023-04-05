const panels = document.querySelectorAll(".panel");

panels.forEach((panels) => {
  panels.addEventListener("click", () => {
    removeActiveClass();
    panels.classList.add("panel--active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("panel--active");
  });
}
