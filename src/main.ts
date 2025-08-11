import QRCode from "qrcode";

async function updateCode() {
  img.innerHTML = "";

  const url = await QRCode.toDataURL(input.value, {
    color: {
      dark: bgColorSelector.value,
      light: fgColorSelector.value,
    },
    margin: 0,
    errorCorrectionLevel: "M",
    type: "image/png",
    width: 256,
  });

  img.src = url;
}

const input = document.getElementById("data") as HTMLInputElement;
const link = document.getElementById("download-link") as HTMLAnchorElement;
const img = document.getElementById("code") as HTMLImageElement;
const fgColorSelector = document.getElementById("fg-color") as HTMLInputElement;
const bgColorSelector = document.getElementById("bg-color") as HTMLInputElement;

input.addEventListener("input", () => {
  if (input.value.length > 0) {
    updateCode();
  }
});
fgColorSelector.addEventListener("change", updateCode);
bgColorSelector.addEventListener("change", updateCode);

link.addEventListener("click", (e) => {
  e.preventDefault();
  const anchor = document.createElement("a");
  anchor.href = img.src;
  anchor.download = "code.png";
  anchor.click();
});

document.getElementById("template-wifi")?.addEventListener("click", () => {
  (<HTMLDialogElement>document.getElementById("wifi-modal")).showModal();
});

document.getElementById("wifi-modal-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;

  input.value = `WIFI:S:${form.elements["ssid"].value};T:${form.elements["type"].value};P:${form.elements["password"].value};;`;
  updateCode();
  (document.getElementById("wifi-modal") as HTMLDialogElement).close();
});

document.getElementById("reset")?.addEventListener("click", () => {
  input.value = input.defaultValue;
  fgColorSelector.value = fgColorSelector.defaultValue;
  bgColorSelector.value = bgColorSelector.defaultValue;
  updateCode();
});

updateCode();
