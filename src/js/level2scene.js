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
import { Moonshine } from './class/moonshine.js'
import { NightBackground } from './class/nightbackground.js'
import { NightGround } from './class/nightground.js'

import { StartScene } from "./gamestartscene.js"
import { GameOverScene } from "./gameoverscene.js"

export class Level2Scene extends Scene {

    onActivate() {

        this.gamespeed = -800;
        this.groundSpeed = 0.9;
        this.backgroundSpeed = 0.25;

        this.startGame();
    }

    startGame() {

        const loadBackground = new NightBackground();
        this.add(loadBackground);

        const loadGround = new NightGround();
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
        this.spawnMoonshine();
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

    spawnMoonshine() {

    const timer = new Timer({
        interval: 5000,
        repeats: true,
        action: () => {

            if (Math.random() < 1) {
                this.add(new Moonshine());
            }
        }
    });

    this.add(timer);
    timer.start();
}

    gameOver(){
        this.engine.goToScene('game-over')
    }
}