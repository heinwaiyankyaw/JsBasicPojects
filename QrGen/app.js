let container = document.querySelector(".container");
let generateBtn = document.querySelector(".generateBtn");
let qrInput = document.querySelector(".qrInput");
let qrImg = document.querySelector(".qrImg");

generateBtn.onclick = function () {
  if (qrInput.value.length > 0) {
    generateBtn.innerText = "Generating QR code...";
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrInput.value;
    qrImg.onload = function () {
      container.classList.add("active");
      generateBtn.innerText = "Generate QR code";
    };

    qrInput.value = "";
  }
};
