const imageUpload = document.getElementById('imageUpload');
const imageCanvas = document.getElementById('imageCanvas');
const ctx = imageCanvas.getContext('2d');

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const img = new Image();
        img.onload = () => {
            imageCanvas.width = img.width;
            imageCanvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = URL.createObjectURL(file);
    }
});
document.getElementById('downloadBtn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'edited-image.png';
  link.href = imageCanvas.toDataURL();
  link.click();
});
