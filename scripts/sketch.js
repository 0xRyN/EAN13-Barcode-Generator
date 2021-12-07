// this class describes the properties of a single particle.

let b;

function setup() {
    createCanvas(1000, 1000, WEBGL);
    let msg = "007567816412";
    b = new Barcode(msg, 0, 0, 475);
}

function draw() {
    background("#FFFFFF");
    noStroke();
    b.displayBarcode();
}
