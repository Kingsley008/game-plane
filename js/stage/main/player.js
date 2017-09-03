class Player {
    constructor(playerImg, game, enemies) {
        this.g = game;
        this.img = playerImg;
        this.texture = playerImg.texture;
        this.x = playerImg.x;
        this.y = playerImg.y;
        this.w = playerImg.w;
        this.h = playerImg.h;
        this.step = 5;
        this.alive = true;
        this.cooldown = 0;
        this.enemies = enemies;
        this.bullets = [];
    }

    update() {
        if(this.cooldown > 0){
            this.cooldown --;
        }
        this.bullets.forEach(function (v,index,arr) {
            if(v.y < 0) {
                this.bullets.pop();
            }
        }.bind(this));

    }
    draw(){
        this.img.draw();
    }

    debug(){
        this.step = conf_player.playerSpeed;
    }


    moveLeft() {
        this.x -= this.step;
        this.x = Math.max(0, this.x);
    }

    moveRight() {
        this.x += this.step;
        this.x = Math.min(300 - this.w, this.x);
    }

    moveForward() {
        this.y -= this.step;
        this.y = Math.max(0, this.y);
    }

    moveBackward() {
        this.y += this.step;
        this.y = Math.min(500 - this.h, this.y);
    }

    fireBullet() {

        if(this.cooldown === 0){
            var y = this.y;
            var x = this.x + this.w / 2;
            var bullet = new Bullet(new GuaImg(this.g,'bullet',x,y));
            this.scene.addElements(bullet);
            this.bullets.push(bullet);
            this.cooldown = 3;
        }


    }


}


