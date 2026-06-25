import NewPicture from "./jumper";

document.addEventListener("DOMContentLoaded", () => {
  const widget = new NewPicture(document.querySelectorAll(".cell"));

  window.widget = widget;

  setInterval(() => {
    widget.addPicture();
  }, 1000);
});

const cellz = document.getElementById("line1");
const cellz1 = document.getElementById("line2");
const cellz2 = document.getElementById("line3");
const cellz3 = document.getElementById("line4");

const liner = [cellz, cellz1, cellz2, cellz3];

liner.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    function lastic() {
      document.getElementsByClassName("mistake")[0].textContent = 0;
      document.getElementsByClassName("fine")[0].textContent = 0;
    }
    if (event.target.className == "imager") {
      const finer = document.getElementsByClassName("fine")[0];
      finer.textContent = Number(finer.textContent) + 1;
      if (Number(finer.textContent) > 4) {
        lastic();
        alert("Вы победили!!!");
      }
    } else {
      const badler = document.getElementsByClassName("mistake")[0];
      badler.textContent = Number(badler.textContent) + 1;
      if (Number(badler.textContent) > 4) {
        lastic();
        alert("Вы проиграли!!!");
      }
    }
  });
});
