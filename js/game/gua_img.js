class GuaImg {
    constructor(game, name, x, y) {
        this.game = game;
        this.texture = game.imageByName(name);
        this.h = this.texture.height;
        this.w = this.texture.width;
        this.x = x || 0;
        this.y = y || 0;
    }
    update(){

    }

    draw(){
        this.game.drawImage(this);
    }

}





