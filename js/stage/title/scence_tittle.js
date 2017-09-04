class ScenceTitle extends GuaScene {
    constructor(game) {
        super(game);

        var ps = new GuaParticleSystem(this.game);
        this.addElements(ps);

    }
}