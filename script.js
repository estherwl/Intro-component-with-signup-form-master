const input = document.querySelectorAll("input");
console.log(input);

function inputEvent(event) {
  input.forEach ((cadaInput) => {
    cadaInput.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

input.forEach ((cadaInput) => {
  cadaInput.addEventListener("click", inputEvent);
})
