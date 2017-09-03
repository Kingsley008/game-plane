class Cloud {

    constructor(guaImg) {
        this.img = guaImg;
        this.setup(this.img);
        this.game = guaImg.game;
    }

    getRandom(low, high) {
        return Math.floor(Math.random() * (high - low) + low)
    }

    setup(guaImg) {
        var self = this;
        self.texture = guaImg.texture;
        self.x = self.getRandom(0, 300);
        self.y = -self.getRandom(0, 200);
        self.w = guaImg.w;
        self.h = guaImg.h;
        self.step = 1;
        this.img.x = self.x;
        this.img.y = self.y;
    }

    update() {
        this.y += this.step;
        if (this.y > 500 - this.h) {
            this.setup(this.img);
        }
    }
    draw(){
        this.img.draw(this);
    }

    debug(){
        this.step = conf_player.cloudSpeed;
    }
}