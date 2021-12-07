class Barcode {
    constructor(offX, offY, width) {
        this.offX = offX;
        this.offY = offY;
        this.isBlack = true;
        this.bWidth = width / 95.0;
        this.bHeight = width * 0.5;
        console.log(this.bWidth);
        console.log(this.bHeight);
        this.rects = [];
        this.buildBarcode();
    }

    buildBarcode() {
        for (let i = 0; i < 95; i++) {
            this.rects.push({
                isBlack: this.isBlack,
                offset: i * this.bWidth,
            });
            if (Math.random() > 0.5) this.isBlack = !this.isBlack;
        }
    }

    displayBarcode() {
        this.rects.forEach((rec) => {
            fill(255, 255, 255);
            noStroke();
            if (rec.isBlack) fill(0, 0, 0);
            rect(this.offX + rec.offset, this.offY, this.bWidth, this.bHeight);
        });
    }
}
