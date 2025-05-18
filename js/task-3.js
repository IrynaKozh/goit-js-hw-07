const input = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
input.addEventListener("input", inputFunction);
function inputFunction() {
    const trimmedValue = input.value.trim();
    nameEl.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
}