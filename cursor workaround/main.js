// resizing the cursor image to 32x32 so it can go through
const cursorCanvas = document.createElement('canvas');
cursorCanvas.width = 32;
cursorCanvas.height = 32;
const cursorCtx = cursorCanvas.getContext('2d');
const cursorImg = new Image();
cursorImg.crossOrigin = 'anonymous';
cursorImg.src = 'https://static.vecteezy.com/system/resources/previews/071/687/904/non_2x/illustration-of-pink-purple-credit-cards-free-png.png';
cursorImg.onload = () => {
  cursorCtx.drawImage(cursorImg, 0, 0, 32, 32); // squishes it to 32x32
  document.body.style.cursor = `url(${cursorCanvas.toDataURL()}), auto`;
};