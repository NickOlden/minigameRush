const hero = document.getElementById("hero");
const prep = document.getElementById("let");

document.addEventListener("keydown", function (event) {
  heroToggleState();
});

function heroToggleState() {
  if (hero.classList !== "jump") {
    hero.classList.remove("run");
    hero.classList.add("jump");
  }
  setTimeout(function () {
    hero.classList.remove("jump");
    hero.classList.add("run");
  }, 500)
}

let isAlive = setInterval(function () {
  let heroCoordinate = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
  let prepCoordinate = parseInt(window.getComputedStyle(prep).getPropertyValue("left"));

  if (prepCoordinate < 50 && prepCoordinate > 0 && heroCoordinate >= 330) {
    hero.classList.remove("run");
    hero.classList.remove("jump");
    prep.classList.remove("letMove");
    hero.classList.add("explosion");
  }
}, 10)
