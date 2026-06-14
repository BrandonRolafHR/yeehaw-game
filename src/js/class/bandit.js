import { Actor, Sprite, Vector, Keys, CollisionType, DegreeOfFreedom, SolverStrategy, CollisionGroup, Timer } from "excalibur"
import { enemiesGroup } from './collisiongroup.js'
import { Resources } from '../resources.js'

export class Bandit extends Actor {
    banditGroup = new CollisionGroup("bandit");

    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: 900,
            height: 750,
            collisionGroup: enemiesGroup,
        })
    }

    onInitialize(engine) {
        this.bandit1 = Resources.Bandit1.toSprite();
        this.bandit2 = Resources.Bandit2.toSprite();

        this.graphics.use(this.bandit1);

        this.pos = new Vector(1290, 660);
        this.vel = new Vector(-300, 0);
        this.scale = new Vector(0.1, 0.1);

        const timer = new Timer({
                interval: 200,
                repeats: true,
                action: () => {
                    this.graphics.use(
                        this.graphics.current === this.bandit1
                            ? this.bandit2
                            : this.bandit1
                    );
                }
                });
        
                this.scene.add(timer);
                timer.start();

        this.on("exitviewport", () => {
            this.kill();
        })
    }
}
