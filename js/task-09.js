function getRandomHexColor() {
  // Zmieniłem tę funkcję, ponieważ czasami na output szła pięciocyfrowa, a nawet czterocyfrowa liczba
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}

const task09 = () => {
  const trigger = document.querySelector(".change-color");
  const span = document.querySelector(".color");
  const triggerHandler = () => {
    const color = getRandomHexColor();
    span.textContent = color;
    document.body.style.backgroundColor = color;
    document.body.style.transition = "background 500ms ease-in-out";
  };

  trigger.addEventListener("click", triggerHandler);
};
task09();
