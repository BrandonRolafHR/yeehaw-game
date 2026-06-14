import { Actor, Label, Vector, Font, FontUnit, Color } from "excalibur";

export class Health extends Actor {

    constructor(cowboy) {
        super({
            x: 100,
            y: 50
        });

        this.cowboy = cowboy;
    }

    onInitialize(engine) {
        this.label = new Label({
            text: `HP: ${this.cowboy.health}`,
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
        this.label.text = `HP: ${this.cowboy.health}`;
    }
}