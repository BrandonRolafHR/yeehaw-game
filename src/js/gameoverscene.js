import { Scene, Label, Vector, FontUnit, Keys } from "excalibur"

export class GameOverScene extends Scene {

    onInitialize(engine) {

        const gameOver = new Label({
            text: "GAME OVER",
            pos: new Vector(350, 200),
            fontSize: 50,
            fontUnit: FontUnit.Px
        })

        const restart = new Label({
            text: "Press R to Return to Start",
            pos: new Vector(250, 300),
            fontSize: 20,
            fontUnit: FontUnit.Px
        })

        this.add(gameOver)
        this.add(restart)
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.R)) {
            window.location.reload();
        }
    }
}