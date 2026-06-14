import { Actor, Sprite, Vector, Keys, CollisionType, DegreeOfFreedom, SolverStrategy, Timer } from "excalibur"
import { friendliesGroup } from './collisiongroup.js'
import { Resources } from '../resources.js'
import { Bandit } from './bandit.js'
import { Barrier } from './barrier.js'
import { Cactus } from './cactus.js'
import { Bullet } from './bullet.js'

export class Cowboy extends Actor {
    

    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: 900,
            height: 750,
            collisionType: CollisionType.Active,
            collisionGroup: friendliesGroup,
        })

        this.health = 3;
        this.canShoot = true;
    }

    onInitialize(engine) {
        this.cowboy1 = Resources.Cowboy.toSprite();
        this.cowboy2 = Resources.Cowboy2.toSprite();

        this.graphics.use(this.cowboy1);

        this.pos = new Vector(150, 660);
        this.scale = new Vector(0.1, 0.1);
        this.body.useGravity = true;
        this.body.collisionGroup = friendliesGroup;
        this.body.collisionType = CollisionType.Active;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);

        const timer = new Timer({
        interval: 200,
        repeats: true,
        action: () => {
            this.graphics.use(
                this.graphics.current === this.cowboy1
                    ? this.cowboy2
                    : this.cowboy1
            );
        }
        });

        this.scene.add(timer);
        timer.start();
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.ArrowUp) && this.onTheGround) {
            this.body.applyLinearImpulse(new Vector(0, -325 * delta));
        }

        if (engine.input.keyboard.wasPressed(Keys.ArrowRight) && this.onTheGround && this.canShoot) {
            this.scene.add(new Bullet(this.pos.x, this.pos.y));
            this.canShoot = false;

            setTimeout(() => {
                this.canShoot = true;
            }, 900);
        }
    }
    

    onCollisionStart(event, other) {
        if (other.owner instanceof Bandit) {
            this.takeDamage();
        }

        if (other.owner instanceof Barrier) {
            this.onTheGround = true;
        }

        if (other.owner instanceof Cactus) {
            this.takeDamage();
        }
    }

    onCollisionEnd(event, other) {
        if (other.owner instanceof Barrier) {
            this.onTheGround = false;
        }
    }

    takeDamage() {
        this.health--;

        console.log(`HP: ${this.health}`);

        if (this.health <= 0) {
            this.kill();
            this.scene.engine.goToScene("game-over");
        }
    }

    heal() {
    this.health++;

    console.log(`HP: ${this.health}`);
}
} 
