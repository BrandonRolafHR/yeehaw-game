import { Actor, Sprite, Vector, Keys, CollisionType, DegreeOfFreedom, SolverStrategy, randomInRange, CollisionGroup } from "excalibur"
import { enemiesGroup } from './collisiongroup.js'
import { Resources } from '../resources.js'

export class Cactus extends Actor {
    cactusGroup = new CollisionGroup("cactus");

    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: 175,
            height: 250,
            collisionGroup: enemiesGroup,
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Cactus.toSprite());
        this.pos = new Vector(1290, 660);
        this.vel = new Vector(-520, 0);
        this.scale = new Vector(0.3, 0.3);

        this.on("exitviewport", () => {
            this.kill();
        })
    }
}

