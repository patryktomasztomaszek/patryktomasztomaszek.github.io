const task07 = () => {
  const input = document.querySelector("#font-size-control");
  const text = document.querySelector("#text");
  input.addEventListener("mousemove", () => {
    text.style.fontSize = `${input.value}px`;
  });
};
task07();
