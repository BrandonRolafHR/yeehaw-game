import { Actor, Sprite, Vector, Keys, CollisionType, DegreeOfFreedom, SolverStrategy } from "excalibur"
import { Resources } from "../resources.js";
import { Game } from '../game.js'

export class NightBackground extends Actor {

    nightbackground;

    onInitialize(engine) {
        this.nightbackground = Resources.NightBackground.toSprite();

        this.nightbackground.sourceView = {
            x: 0,
            y: 0,
            width: engine.drawWidth,
            height: engine.drawHeight
        };

        this.anchor = Vector.Zero;
        this.graphics.use(this.nightbackground);
    }

    onPostUpdate(engine, delta) {
        this.nightbackground.sourceView.x += 0.1 * delta;
    }
}