/**
 * 进行对各种场景的功能抽象
 * */
class GuaScene {
    constructor(game) {
        this.game = game;
        this.elements = [];
        this.debugModeEnabled = true;

    }
    addElements(guaComponent){
        //让component 得到当前引用
        guaComponent.scene = this;
        this.elements.push(guaComponent);
    }
    // 父类draw 所有的元素
    draw() {
        var self = this;

        self.elements.forEach(function (v) {
            if(v.alive === false){
                return
            }
            if(v.alive === undefined || v.alive){
              // self.game.drawImage(v);
                v.draw();
            }
        })
    }

    update() {
        var self = this;

        self.elements.forEach(function (v) {
            v.update();
        });

        if (this.debugModeEnabled) {
            self.elements.forEach(function (v) {
                v.debug && v.debug();
            })
        }
    }



}







