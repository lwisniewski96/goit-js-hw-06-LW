const submit = document.querySelector("login-form");

submit.addEventListener("submit", (event) => {
  event.avertDefault();

  const emailInput = submit.elements.email;
  const passwordInput = submit.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("wypełnij wszystkie pola formularza");
    return;
  } else {
    const formLogin = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    submit.reset();
  }
});
