const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("qr-size");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

// Define the maximum allowed size based on your library's limitations
const maxQRSize = 500;

let size = sizes.value;

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
  checkSizeLimit();
});

downloadBtn.addEventListener("click", () => {
  let img = document.querySelector(".qr-body img");

  if (img !== null) {
    let imgAttr = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAttr);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmptyInput() {
  if (qrText.value.length > 0) {
    generateQRcode();
  } else {
    alert("Please Enter Some Text");
  }
}

function generateQRcode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#ffffff",
    colorDark: "#000000",
  });
}

function checkSizeLimit() {
  if (size > maxQRSize) {
    alert("QR code size exceeds the maximum limit.");
    // You can also reset the size to a default value if needed
    size = maxQRSize;
    sizes.value = size;
  }
}
