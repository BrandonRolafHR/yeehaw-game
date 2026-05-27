import { Actor, Sprite, Vector } from "excalibur"
import { Resources } from '../resources.js'

export class Cactus extends Actor {
    constructor() {
        super({
            
        })
    }

    onInitialize(engine) {

        this.graphics.use(Resources.Cactus.toSprite())
        this.pos = new Vector(1290, 650)
        this.vel = new Vector(-1290, 0)
        this.scale = new Vector(0.3, 0.3)
    }
}