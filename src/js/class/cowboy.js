import { Actor, Sprite, Vector } from "excalibur"
import { Resources } from '../resources.js'

export class Cowboy extends Actor {
    constructor() {
        super({
            
        })
    }

    onInitialize(engine) {

        this.graphics.use(Resources.Cowboy.toSprite())
        this.pos = new Vector(150, 650)
        this.scale = new Vector(0.1, 0.1)
    }

    currentSprite = 1

        toggleSprite() {
        if (this.currentSprite === 1) {
            this.graphics.use(Resources.Cowboy2.toSprite())
            this.currentSprite = 2
        } else {
            this.graphics.use(Resources.Cowboy.toSprite())
            this.currentSprite = 1
        }
    }
    
}