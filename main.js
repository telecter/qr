const dataInput = document.getElementById("data");
const qrCodeContainer = document.getElementById("code");
const downloadLink = document.getElementById("downloadLink");
const foregroundColorSelector = document.getElementById("foregroundColor");
const backgroundColorSelector = document.getElementById("backgroundColor");
foregroundColorSelector.value = "#000000";
backgroundColorSelector.value = "#ffffff";

function updateCode() {
  qrCodeContainer.innerHTML = "";
  new QRCode(qrCodeContainer, {
    text: dataInput.value,
    colorDark: foregroundColorSelector.value,
    colorLight: backgroundColorSelector.value,
  });
  console.log(
    qrCodeContainer.getElementsByTagName("img")[0].getAttribute("src")
  );
  console.log(qrCodeContainer.getElementsByTagName("img")[0]);
  downloadLink.href = qrCodeContainer.getElementsByTagName("img")[0].src;
}

dataInput.value = "Hello, world!";

dataInput.addEventListener("input", updateCode);
foregroundColorSelector.addEventListener("change", updateCode);
backgroundColorSelector.addEventListener("change", updateCode);

downloadLink.addEventListener("click", (e) => {
  e.preventDefault();
  const downloadAnchor = document.createElement("a");
  downloadAnchor.href = qrCodeContainer.getElementsByTagName("img")[0].src;
  downloadAnchor.download = "code.png";
  downloadAnchor.click();
});

updateCode();
