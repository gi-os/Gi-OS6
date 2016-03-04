var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
  });
document.body.style.backgroundImage = pattern.dataUrl;
