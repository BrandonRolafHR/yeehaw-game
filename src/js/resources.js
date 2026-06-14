import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Cowboy: new ImageSource('images/cowman1.png'),
    Cowboy2: new ImageSource('images/cowman2.png'),
    Cactus: new ImageSource('images/cactus.png'),
    Bullet: new ImageSource('images/bullet.png'),
    Bandit1: new ImageSource('images/bandit1.png'),
    Bandit2: new ImageSource('images/bandit2.png'),
    Moonshine: new ImageSource('images/moonshine.png'),
    Background: new ImageSource('images/desert-background.png', { wrapping: ImageWrapping.Repeat}),
    Ground: new ImageSource('images/desert-platform.png', { wrapping: ImageWrapping.Repeat}),

    // Level 2
    NightBackground: new ImageSource('images/desert-background-night.png', { wrapping: ImageWrapping.Repeat}),
    NightGround: new ImageSource('images/desert-platform-night.png', { wrapping: ImageWrapping.Repeat}),
}

const ResourceLoader = new Loader()
    for (let res of Object.values(Resources)) {
        ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }