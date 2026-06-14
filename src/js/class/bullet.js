import { Actor, Sprite, Vector, Keys, CollisionType, DegreeOfFreedom, SolverStrategy } from "excalibur"
import { friendliesGroup } from './collisiongroup.js'
import { Resources } from '../resources.js'
import { Bandit } from './bandit.js'
import { Cactus } from './cactus.js'
import { Score } from "./score.js";

export class Bullet extends Actor {

    score

    constructor() {
        super({
            width: Resources.Bullet.width,
            height: Resources.Bullet.height,
            collisionGroup: friendliesGroup,
        })
    }

    onInitialize(engine) {

        this.graphics.use(Resources.Bullet.toSprite());
        this.pos = new Vector(175, 618);
        this.vel = new Vector(1500, 0);
        this.scale = new Vector(0.03, 0.03);
        this.body.collisionGroup = friendliesGroup;

        this.score = 0;

        this.on("exitviewport", () => {
            this.kill();
        })
    }

    onCollisionStart(self, other, side, contact) {
        if(other.owner instanceof Bandit) {
            other.owner.kill();
            this.kill();
        }

        if(other.owner instanceof Cactus) {
            this.kill();
        }
    }
}