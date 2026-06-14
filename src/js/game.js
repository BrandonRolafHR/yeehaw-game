import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange, CollisionType, DegreeOfFreedom, SolverStrategy, Label, FontUnit, Font, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './class/background.js'
import { Cowboy } from './class/cowboy.js'
import { Cactus } from './class/cactus.js'
import { Bullet } from './class/bullet.js'
import { Ground } from './class/ground.js'
import { Barrier } from './class/barrier.js'
import { Bandit } from './class/bandit.js'
import { Score } from './class/score.js'

import { StartScene } from "./gamestartscene.js"
import { Level1Scene } from "./level1scene.js"
import { Level2Scene } from "./level2scene.js"
import { GameOverScene } from "./gameoverscene.js"

export class Game extends Engine {

    constructor(){
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800)
            }
        })

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('start', new StartScene())
        this.add('level1', new Level1Scene())
        this.add('level2', new Level2Scene())
        this.add('game-over', new GameOverScene())

        this.goToScene('start')
    }
}

new Game()
