import { Scene, Label, Vector, FontUnit, Keys } from "excalibur"

export class StartScene extends Scene {

    onInitialize(engine) {

        const title = new Label({
            text: "Yeehaw Game",
            pos: new Vector(400, 200),
            fontSize: 40,
            fontUnit: FontUnit.Px
        })

        const spaceToStart = new Label({
            text: "Press Space to Start",
            pos: new Vector(300, 300),
            fontSize: 20,
            fontUnit: FontUnit.Px
        })

        this.add(title)
        this.add(spaceToStart)
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.goToScene("level1")
        }
    }
}