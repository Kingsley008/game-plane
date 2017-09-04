class Bullet {
    constructor(img) {
        this.img = img;
        this.setup(img);
        this.game = img.game;
    }

    setup() {
        this.texture = this.img.texture;
        this.x = this.img.x;
        this.y = this.img.y;
        this.w = this.img.w;
        this.h = this.img.h;
        this.alive = true;
        this.step = 10;
    }

    update() {
        this.y -= this.step;
    }
    debug(){
        this.step = conf_player.bulletSpeed;
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