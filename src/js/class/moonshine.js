import { Actor, CollisionType, Vector, CollisionGroup } from "excalibur";
import { enemiesGroup } from "./collisiongroup.js";
import { Resources } from "../resources.js";
import { Cowboy } from "./cowboy.js";

export class Moonshine extends Actor {

    constructor() {
        super({
            x: 1600,
            y: 650,
            width: 64,
            height: 64,
            collisionGroup: enemiesGroup,
        });
    }

    onInitialize() {
        this.graphics.use(Resources.Moonshine.toSprite());

        this.scale = new Vector(0.1, 0.1);

        this.vel = new Vector(this.scene.gamespeed, 0);
    }

    onCollisionStart(event, other) {

        if (other.owner instanceof Cowboy) {
            other.owner.heal();
            this.kill();
        }
    }
}