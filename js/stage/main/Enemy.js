class Enemy {

    constructor(guaImg) {
        this.img = guaImg;
        this.setup(this.img);
        this.game = guaImg.game;

    }



    setup(guaImg) {
        var self = this;
        self.texture = guaImg.texture;
        self.x = getRandom(0, 300 - self.w);
        self.y = -getRandom(0, 100);
        self.w = guaImg.w;
        self.h = guaImg.h;
        self.step = getRandom(2, 5);
        this.alive = true;
    }



    update() {
        this.y += this.step;
        if (this.y > 500 - this.h) {
            this.setup(this.img);
        }

    }

    // draw(){
    //     this.img.draw();
    // }

}