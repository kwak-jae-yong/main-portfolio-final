  document.addEventListener("DOMContentLoaded", function () {
    const modeBtn = document.querySelector(".modeBtn");
    modeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.toggle("light-mode");
    });
  });

  