class Particle extends GuaImg{
    constructor(game){
        super(game, 'boom')
        this.setup();

    }
    init(x, y, vx, vy){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
    setup(){
        this.duration = 30;
    }

    update(){
        this.duration --;
        var factor = 0.1;
        this.x += this.vx * factor;
        this.y += this.vy * factor;
    }

}

class GuaParticleSystem {
    constructor(game, x ,y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.setup()
    }

    setup() {
        this.numberOfParticles = 30;
        this.particles = []
    }

    update() {
        if (this.particles.length < this.numberOfParticles){
            var p = new Particle(this.game);

            var vx = getRandom(-10, 10);
            var vy = getRandom(-10, 10);
            p.init(this.x, this.y, vx, vy );
            this.particles.push(p);
           // this.scene.elements.push(p);
        }

        for(var p of this.particles) {

            p.update();
        }
    }

    draw(){
        for(var p of this.particles) {
            if(p.duration <= 0){
                return
            }
            p.draw();
        }
    }


}