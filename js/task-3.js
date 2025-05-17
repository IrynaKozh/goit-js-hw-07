const input = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
input.addEventListener("input", inputFunction);
function inputFunction() {
    if (input.value.trim() === "") {
        nameEl.textContent = "Anonymous";
    } else {
        nameEl.textContent = input.value;
    }
}