function updateCode() {
  container.innerHTML = "";
  new QRCode(container, {
    text: dataInput.value,
    colorDark: fgColorSelector.value,
    colorLight: bgColorSelector.value,
  });
}

const dataInput = document.getElementById("data");
const link = document.getElementById("download-link");
const container = document.getElementById("code");
const fgColorSelector = document.getElementById("fg-color");
const bgColorSelector = document.getElementById("bg-color");

dataInput.oninput = updateCode;
fgColorSelector.onchange = updateCode;
bgColorSelector.onchange = updateCode;

link.onclick = (e) => {
  e.preventDefault();
  const anchor = document.createElement("a");
  anchor.href = container.getElementsByTagName("img")[0].src;
  anchor.download = "code.png";
  anchor.click();
};

document.getElementById("template-wifi").onclick = () => {
  document.getElementById("wifi-modal").showModal();
};

document.getElementById("wifi-modal-form").onsubmit = (e) => {
  dataInput.value = `WIFI:S:${e.target["ssid"].value};T:${e.target["type"].value};P:${e.target["password"].value};;`;
  updateCode();
  document.getElementById("wifi-modal").close();
  return false;
};

document.getElementById("reset").onclick = () => {
  dataInput.value = dataInput.defaultValue;
  fgColorSelector.value = fgColorSelector.defaultValue;
  bgColorSelector.value = bgColorSelector.defaultValue;
  updateCode();
};

updateCode();
