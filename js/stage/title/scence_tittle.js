class ScenceTitle extends GuaScene {
    constructor(game) {
        super(game);
        this.label = new Label(game,'按K 开始游戏', 100, 300);
        this.setupInputs();
        this.addElements(this.label);
        this.game = game;
    }

    setupInputs() {
        var self = this;
        self.game.registerAction('k', function () {
            self.game.replaceStage(new SceneMain(self.game));
        });
    }
}