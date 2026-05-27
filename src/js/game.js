import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './class/background.js'
import { Cowboy } from './class/cowboy.js'
import { Cactus } from './class/cactus.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        const loadBackground = new Background();
        this.add(loadBackground);

        const spawnCowboy = new Cowboy(); 
        this.add(spawnCowboy);

        const spawnCactus = new Cactus();
        this.add(spawnCactus)
    }

}

new Game()
