const task06 = () => {
  const input = document.querySelector("#validation-input");
  input.addEventListener("blur", () => {
    input.removeAttribute("class", "valid");
    input.removeAttribute("class", "invalid");

    if (input.value.length == 6) {
      input.setAttribute("class", "valid");
    } else input.setAttribute("class", "invalid");
  });
};
task06();
