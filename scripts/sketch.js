class Barcode {
    constructor(msg, offX, offY, width) {
        this.msg = msg;
        this.offX = offX;
        this.offY = offY;
        this.isBlack = true;
        this.bWidth = width / 95.0;
        this.bHeight = Math.round(width * 0.5);
        console.log(this.bWidth);
        console.log(this.bHeight);
        this.rects = [];
        this.getChecksum();
        this.buildBarcode();
    }

    getChecksum() {
        if (this.msg.length != 12) {
            console.log("Message is not of length 12");
        } else {
            // Hack to transform res (string) to an array of ints
            let res = this.msg.split("").map((v) => +v);
            let sum = 0;
            res.forEach((v, i) => {
                // Check if the index is even, if it is, multiply by 3 the digit
                i % 2 ? (sum += v * 3) : (sum += v);
            });
            return sum % 10;
        }
    }

    buildBarcode() {
        for (let i = 0; i < 95; i++) {
            this.rects.push({
                isBlack: this.isBlack,
                offset: i * this.bWidth,
            });
            if (Math.random() > 0.5) {
              this.isBlack = !this.isBlack;
            }
        }
    }

    displayBarcode() {
        this.rects.forEach((rec) => {
            fill(255, 255, 255);
            noStroke();
            if (rec.isBlack) {
              fill(0, 0, 0);
            }
            else {
              noFill();
            }
            rect(this.offX + rec.offset, this.offY, this.bWidth, this.bHeight);
            console.log(this.offX + rec.offset);
        });
    }
}


let b;
let inp;
let btn;

function inputChanged() {
  console.log("you are typing" + this.value());
}

function btnClicked() {
  if(inp.value().length >= 12) {
    b = new Barcode(inp.value(), 20, 50, 285);
    loop();
  }
}

function setup() {
    createCanvas(500, 500);
    let msg = "007567816412";
    background("#FFFFFF");
    noStroke();
    
    inp = createInput();
    inp.attribute("type", "text");
    inp.attribute("placeholder", "Entrez 12 chiffres");
    inp.attribute("maxlength", "12");
    inp.position(20, 0);
    inp.size(200);
    inp.input(inputChanged);
    
    btn = createButton("Create barcode");
    btn.position(220, 0);
    btn.mousePressed(btnClicked);
}

function draw() {
    if(b != null) {
      background("#FFFFFF");
      b.displayBarcode();
      noLoop();
    }
}
