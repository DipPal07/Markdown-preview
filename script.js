const input = document.querySelector("#input");
const textInput = document.querySelector("#textInput");
const content = document.querySelector("#content");
const copyText = document.querySelector("#copy-text");

input.addEventListener("input", () => {
  const value = textInput.value;
  const output = marked.parse(value);
  content.innerHTML = output;
  localStorage.setItem("markdownData", value);
  localStorage.setItem("markdownOutput", output);
});

content.innerHTML = localStorage.getItem("markdownOutput");
textInput.value = localStorage.getItem("markdownData");
function copy() {
  if (!textInput.value) {
    alert("Input box is empty");
    return;
  }
  copyText.classList.add("copy-active");
  navigator.clipboard.writeText(textInput.value);
  setTimeout(() => {
    copyText.classList.remove("copy-active");
  }, 1000);
}
function reset() {
  textInput.value = "";
  content.innerHTML = "";
  localStorage.clear();
}
