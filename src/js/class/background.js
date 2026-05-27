import { Actor, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Background extends Actor {

    background;

    onInitialize(engine) {
        this.background = Resources.Background.toSprite();

        this.background.sourceView = {
            x: 0,
            y: 0,
            width: engine.drawWidth,
            height: engine.drawHeight
        };

        this.anchor = Vector.Zero;
        this.graphics.use(this.background);
    }

    onPostUpdate(engine, delta) {
        this.background.sourceView.x += 0.15 * delta;
    }
}