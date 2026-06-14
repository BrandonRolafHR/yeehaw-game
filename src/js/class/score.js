import { Actor, Label, Vector, Font, FontUnit, Color } from "excalibur";
import { Resources } from '../resources.js';
import { Bullet } from './bullet.js';

export class Score extends Actor {

    constructor() {
        super({
            x: 100,
            y: 100
        });
    }

    onInitialize(engine) {
        this.score = 0;

        this.label = new Label({
            text: "Score: 0",
            pos: new Vector(0, 0),
            font: new Font({
                family: 'Impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        });

        this.addChild(this.label);
    }

    onPreUpdate(engine, delta) {
        this.score += (100 * delta) / 1000;

        this.label.text = `Score: ${Math.floor(this.score)}`;
    }
}
