function getRandomHexColor() {
  // To samo co w zadaniu 9
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}

const task10 = () => {
  const value = document.querySelector(`[type="number"]`);
  const create = document.querySelector(`[data-create]`);
  const destroy = document.querySelector(`[data-destroy]`);
  const space = document.querySelector("#boxes");
  let size = 30;

  const cssRules = document.createElement("style");
  cssRules.innerHTML = `
  #boxes {
    display: flex;
    flex-flow: row wrap;
  }
  .box {
    margin: 3px;
  }
  `;
  document.head.appendChild(cssRules);

  const createBoxes = () => {
    for (let i = 0; i < value.value; i++) {
      const box = document.createElement("div");
      box.setAttribute("class", "box");
      box.style.height = `${size}px`;
      box.style.width = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      size += 10;
      space.append(box);
    }
  };

  const destroyBoxes = () => {
    space.innerHTML = "";
    size = 30;
    value.value = "";
  };

  create.addEventListener("click", createBoxes);
  destroy.addEventListener("click", destroyBoxes);
};
task10();
