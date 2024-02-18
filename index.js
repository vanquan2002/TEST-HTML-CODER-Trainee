document.querySelectorAll(".closeNav").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.getElementById("nav-mb-input").checked = false;
  });
});
