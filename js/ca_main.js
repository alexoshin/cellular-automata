var caCanvas;
function onload() {
    document.body.style.opacity = 1;
    caCanvas = setup_ca_canvas(document.getElementById('ca-canvas'), 50, 50);
    caCanvas.start();
    var instructions = document.getElementById('instructions');
    instructions.innerText = '----- Key commands -----\n'
        + 'r: reset simulation\n'
        + 'c: clear grid\n'
        + 'p: pause/unpause\n'
        + 's: pause and step forward';
}
window.addEventListener('load', onload);
