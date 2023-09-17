document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-button");
    const qrInput = document.getElementById("qr-input");
    const qrCode = document.getElementById("qr-code");
    const downloadLink = document.getElementById("download-link");

    generateButton.addEventListener("click", generateQRCode);

    function generateQRCode() {
        const inputValue = qrInput.value.trim();

        if (inputValue !== "") {
            // You can use any QR code generation library here. I'll use QRious.
            const qr = new QRious({
                value: inputValue,
                size: 200,
            });

            qrCode.src = qr.toDataURL("image/png");
            downloadLink.href = qr.toDataURL("image/png");
            downloadLink.style.display = "block";
        } else {
            alert("Please enter a message or URL.");
        }
    }
});
