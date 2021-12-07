// this class describes the properties of a single particle.

let b;

function setup() {
    createCanvas(1000, 1000, WEBGL);
    b = new Barcode(0, 0, 500);
}

function draw() {
    background("#FFFFFF");
    noStroke();
    b.displayBarcode();
}
