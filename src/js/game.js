import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const water = new Actor()
        water.graphics.use(Resources.Water.toSprite())
        water.pos = new Vector(500, 300)
        water.z = -1
        this.add(water)

        for (let i = 0; i < 100; i++) {
            const fish = new Actor()
            fish.graphics.use(Resources.Fish.toSprite())
            fish.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
            fish.vel = new Vector(randomInRange(-100, 100), randomInRange(-100, 100))
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(fish)
        }
        
        const shark = new Actor()
        shark.graphics.use(Resources.Shark.toSprite())
        shark.pos = new Vector(700, 400)
        shark.vel = new Vector(10,0)
        shark.events.on("exitviewport", (e) => this.fishLeft(e))
        this.add(shark)
    }

    fishLeft(e) {
        e.target.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
    }
}

new Game()
