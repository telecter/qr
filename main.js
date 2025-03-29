const dataInput = document.getElementById("codeData");
const qrCodeElem = document.getElementById("code");
const foregroundColorSelecter = document.getElementById("foregroundColorSelecter");
const backgroundColorSelecter = document.getElementById("backgroundColorSelecter");
foregroundColorSelecter.value = "#000000";
backgroundColorSelecter.value = "#ffffff";

let foregroundColor = "#000000";
let backgroundColor = "#ffffff";

function updateCode() {
  qrCodeElem.innerText = ""
  new QRCode(qrCodeElem, {
    text: dataInput.value,
    colorDark: foregroundColor,
    colorLight: backgroundColor
  });
}

dataInput.value = "Hello, world!";
dataInput.addEventListener("input", updateCode);
foregroundColorSelecter.addEventListener("change", (e) => {
    foregroundColor = e.target.value;
    updateCode();
})
backgroundColorSelecter.addEventListener("change", (e) => {
    backgroundColor = e.target.value;
    updateCode();
})
updateCode();
