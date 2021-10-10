class Card {

    constructor (img, x, y, text, fixedRotation) {

        this.img = img;
        this.x = x;
        this.y = y;
        this.text = text;

        if (fixedRotation) {
            this.rotation = 0;
        }
        else {
            this.rotation = random(-5, 5);
        }
    }

    display() {

        push();
        translate(this.x, this.y);
        rotate(this.rotation);

        if (this.img == "follow") {

            image(followCard, 0, 0, 163, 238);
        }
        else if (this.img == "lead") {

            image(leadCard, 0, 0, 163, 238);
        }
        else if (this.img == "followBlank") {

            image(followBlankCard, 0, 0, 163, 238);
        }
        else if (this.img == "leadBlank") {

            image(leadBlankCard, 0, 0, 163, 238);
        }
        fill("#57477A");
        textSize(30);
        textLeading(60);
        text(this.text, 0, 0);

        pop();
    }
}
