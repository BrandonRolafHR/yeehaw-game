import '../css/style.css'
import { Actor, Engine, Scene, Vector, DisplayMode, randomInRange, CollisionType, DegreeOfFreedom, SolverStrategy, Label, FontUnit, Font, Color, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './class/background.js'
import { Cowboy } from './class/cowboy.js'
import { Cactus } from './class/cactus.js'
import { Bullet } from './class/bullet.js'
import { Ground } from './class/ground.js'
import { Barrier } from './class/barrier.js'
import { Bandit } from './class/bandit.js'
import { Score } from './class/score.js'
import { Health } from './class/health.js'

import { StartScene } from "./gamestartscene.js"
import { Level2Scene } from "./level2scene.js"
import { GameOverScene } from "./gameoverscene.js"

export class Level1Scene extends Scene {

    onActivate() {

        this.gamespeed = -520;
        this.groundSpeed = 0.5;
        this.backgroundSpeed = 0.10;

        this.startGame();
    }

    startGame() {
        const loadBackground = new Background();
        this.add(loadBackground);

        const loadGround = new Ground();
        this.add(loadGround);

        const loadBarrier = new Barrier();
        this.add(loadBarrier);

        const loadCowboy = new Cowboy();
        this.add(loadCowboy);

        this.score = new Score();
        this.add(this.score);

        this.health = new Health(loadCowboy);
        this.add(this.health);

        this.spawnCactus();
        this.spawnBandit();
    }

    onPreUpdate(engine) {
        if (this.score.score >= 1000) {
            engine.goToScene("level2");
        }
    }

    spawnCactus() {
        const nextSpawn = Math.random() * 2000 + 2000;

        const timer = new Timer({
            interval: nextSpawn,
            repeats: false,
            action: () => {

                this.add(new Cactus());

                this.spawnCactus();
            }
        });

        this.add(timer);
        timer.start();
    }

    spawnBandit() {
        const nextSpawn = Math.random() * 3000 + 3000;

        const timer = new Timer({
            interval: nextSpawn,
            repeats: false,
            action: () => {

                this.add(new Bandit());

                this.spawnBandit();
            }
        });

        this.add(timer);
        timer.start();
    }

    gameOver(){
        this.engine.goToScene('game-over')
    }

}