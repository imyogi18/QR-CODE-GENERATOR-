document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-btn').addEventListener('click', generateQRCode);
});

function generateQRCode() {
    const textInput = document.getElementById('text-input');
    const text = textInput.value.trim();
    const qrcodeContainer = document.getElementById('qrcode');
    const errorMessage = document.getElementById('error-message');

    qrcodeContainer.innerHTML = '';
    errorMessage.textContent = ''; 

    if (!text) {
        errorMessage.textContent = 'Please enter some text to generate the QR code.';
        return;
    }

    QRCode.toDataURL(text, { errorCorrectionLevel: 'H' }, (err, url) => {
        if (err) {
            console.error('Error generating QR code:', err);
            errorMessage.textContent = 'Failed to generate QR code. Please try again.';
            return;
        }
        const img = document.createElement('img');
        img.src = url;
        img.alt = `QR code for "${text}"`;
        qrcodeContainer.appendChild(img);
    });
}
