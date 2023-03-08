const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const name = event.target.value;
  if (name === "") {
    name.textContent = "Anonymus";
  } else {
    nameOutput.textContent = name;
  }
});
