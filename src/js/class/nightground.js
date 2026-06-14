import { Actor, Sprite, Vector, Keys, CollisionType, DegreeOfFreedom, SolverStrategy } from "excalibur"
import { Resources } from "../resources.js";
import { Game } from '../game.js'

export class NightGround extends Actor { 
    nightground;

    onInitialize(engine) {
        this.nightground = Resources.NightGround.toSprite();

        this.nightground.sourceView = {
            x: 640,
            y: 530,
            width: this.nightground.drawWidth,
            height: this.nightground.drawHeight
        };

        this.pos = new Vector(0, 550)
        this.scale = new Vector(1, 1)
        this.anchor = Vector.Zero;
        this.graphics.use(this.nightground);
        this.body.collisionType = CollisionType.Fixed
    }

    onPostUpdate(engine, delta) {
        this.nightground.sourceView.x += 0.5 * delta;
    }
}