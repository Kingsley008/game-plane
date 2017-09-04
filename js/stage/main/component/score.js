class Score {
    constructor(game, text, x, y){
        this.game = game;
        this.text = text;
        this.x = x;
        this.y = y;
    }
    draw(){
        this.game.ctx.font="14px Georgia";
        this.game.ctx.fillText(this.text + this.game.score ,this.x, this.y);
    }
    update(){

    }
}