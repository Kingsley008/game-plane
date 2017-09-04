class ScenceEnd extends GuaScene {
    constructor(game) {
        super(game);
        this.game = game;
        this.label1 = new Label(game,'游戏结束您的得分是：'+ this.game.score, 10, 300);
        this.label2 = new Label(game,'按K 重新开始游戏', 10, 350);
        this.addElements(this.label1);
        this.addElements(this.label2);
    }

    // setupInputs() {
    //     var self = this;
    //     self.game.registerAction('k', function () {
    //         self.game.replaceStage(new SceneMain());
    //     });
    // }

}