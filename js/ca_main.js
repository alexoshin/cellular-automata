var caCanvas;
function onload() {
    document.body.style.opacity = 1;
    caCanvas = setup_ca_canvas(document.getElementById('ca-canvas'), 50, 50);
    caCanvas.start();
}
window.addEventListener('load', onload);
