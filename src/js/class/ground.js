import { Actor, Sprite, Vector, Keys, CollisionType, DegreeOfFreedom, SolverStrategy } from "excalibur"
import { Resources } from "../resources.js";
import { Game } from '../game.js'

export class Ground extends Actor { 
    ground;

    onInitialize(engine) {
        this.ground = Resources.Ground.toSprite();

        this.ground.sourceView = {
            x: 640,
            y: 530,
            width: this.ground.drawWidth,
            height: this.ground.drawHeight
        };

        this.pos = new Vector(0, 520)
        this.scale = new Vector(1, 1)
        this.anchor = Vector.Zero;
        this.graphics.use(this.ground);
        this.body.collisionType = CollisionType.Fixed
    }

    onPostUpdate(engine, delta) {
        this.ground.sourceView.x += 0.5 * delta;
    }
}