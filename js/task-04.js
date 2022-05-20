const task04 = () => {
  const displayedValue = document.querySelector("#value");
  let counterValue = 0;
  const increment = document.querySelector(`[data-action="increment"]`);
  const decrement = document.querySelector(`[data-action="decrement"]`);

  increment.addEventListener("click", () => {
    counterValue += 1;
    displayedValue.textContent = counterValue;
  });
  decrement.addEventListener("click", () => {
    counterValue -= 1;
    displayedValue.textContent = counterValue;
  });
};
task04();
