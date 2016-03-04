var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
  });
document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
