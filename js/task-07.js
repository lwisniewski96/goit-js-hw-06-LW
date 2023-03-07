const input = document.querySelector(`#font-size-control`);
const output = document.querySelector(`#text`);
output.style.fontSizeControl = inout.value;

input.addEventListener("input", (event) => {
  output.style.fontSizeControl = event.currentTarget.value + "px";
});
