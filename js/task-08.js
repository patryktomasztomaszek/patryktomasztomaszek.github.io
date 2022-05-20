const task08 = () => {
  const form = document.querySelector(".login-form");

  const submitHandler = (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value === "" || password.value === "") {
      alert("Please input remaining information!");
    } else {
      console.log(
        `- - - - -\nLogin attempt:\n\nemail: ${email.value}\npassword: ${password.value}\n- - - - -`
      );
      event.currentTarget.reset();
    }
  };
  form.addEventListener("submit", submitHandler);
};
task08();
