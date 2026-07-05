import NewPicture from "./jumper";

const interval = 1000;
const evend = 5;

document.addEventListener("DOMContentLoaded", () => {
  const widget = new NewPicture(document.querySelectorAll(".cell"));

  window.widget = widget;

  function lastic() {
    document.getElementsByClassName("mistake")[0].textContent = 0;
    document.getElementsByClassName("fine")[0].textContent = 0;
  }

  const timez = setInterval(() => {
    widget.addPicture();

    const badler = document.getElementsByClassName("mistake")[0];
    badler.textContent = Number(badler.textContent) + 1;
    if (Number(badler.textContent) > 4) {
      lastic();
      clearInterval(timez);
      alert("Вы проиграли!!!");
    }
  }, interval);


  for (let i = 0; i < evend; i++) {
    liner.push(document.getElementById(`line${i + 1}`));
  }

  liner.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      console.log(event.target);
      if (event.target.className == "imager") {
        const finer = document.getElementsByClassName("fine")[0];
        finer.textContent = Number(finer.textContent) + 1;

        const badler = document.getElementsByClassName("mistake")[0];
        badler.textContent = Number(badler.textContent) - 1;

        if (Number(finer.textContent) > 4) {
          lastic();
          clearInterval(timez)
          alert("Вы победили!!!");
        }
      }
    });
  });
});
