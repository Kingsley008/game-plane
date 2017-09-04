class SceneMain extends GuaScene {
    constructor(game) {
        super(game);
        // 初始化
        this.setup();
        this.setupInputs();
    }

    // 注册事件
    setup() {
        var self = this;
        self.numberOfEnemies = 3;
        self.numberOfCould = 2;
        self.bg = new GuaImg(self.game, 'background', 0, 0);
        self.cloud = new GuaImg(self.game, 'cloud', 20, 100);
        self.label = new Label(self.game, "Score:"+ self.game.score, 10, 490);


        self.addElements(self.bg);
        self.addCloud();
        self.addEnemies();
        self.player = new Player(new GuaImg(self.game, 'player', 100, 350), self.game, self.enemies);
        self.addElements(self.player);
        self.addElements(self.label);
    }

    addCloud() {
        var cs = [];
        for (var i = 0; i < this.numberOfCould; i++) {
            var c = new Cloud(new GuaImg(this.game, 'cloud'));
            cs.push(c);
            this.addElements(c);
        }

        this.clouds = cs;
    }

    addEnemies() {
        var es = [];
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = new Enemy(new GuaImg(this.game, 'en_plane'));
            es.push(e);
            this.addElements(e);
        }

        this.enemies = es;
    }

    testCollide() {
        var self = this;
        self.enemies.forEach(function (enemy) {
            if (enemy.alive) {
                //碰撞player

                if (enemy.collide(self.player)) {
                    self.player.alive = false;
                    self.boomObj(self.player);
                    setTimeout(function () {
                        self.game.replaceStage(new ScenceEnd(self.game));
                    },1000)

                }

                self.player.bullets.forEach(function (bullet, index) {
                    if (bullet.collide(enemy)) {
                        self.game.score++;
                        bullet.alive = false;
                        enemy.alive = false;
                        self.boomObj(enemy);
                    }
                })
            }

        })

    }

    boomObj(obj){
        var self = this;
        self.boom = new GuaParticleSystem(self.game, obj.x + obj.w / 2, obj.y);
        self.addElements(self.boom);
        setTimeout(
            (function (boom) {
                return function () {
                    boom.alive = false;

                }
            })(self.boom), 800);
    }

    update() {
        this.testCollide();
        super.update();

    }

    setupInputs() {
        //event 事件注册+自动判断调用
        var self = this;
        self.game.registerAction('a', function () {
            self.player.moveLeft();
        });
        self.game.registerAction('d', function () {
            self.player.moveRight();
        });
        self.game.registerAction('w', function () {
            self.player.moveForward();
        });
        self.game.registerAction('s', function () {
            self.player.moveBackward();
        });
        self.game.registerAction('j', function () {
            self.player.fireBullet();
        });
    }


}
