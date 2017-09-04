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

    draw(){
        this.game.drawImage(this);
    }

    collide(obj) {
        // 判断两个矩形相交
        var self = this;
        if (aInb(obj.x, self.x, self.x + self.w) || aInb(self.x, obj.x, obj.x + obj.w)) {
            if (aInb(obj.y, self.y, self.y + self.h) || aInb(self.y, obj.y, obj.y + obj.h)) {
                return true
            }
        }
        return false;
    };
}