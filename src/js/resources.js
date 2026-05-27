import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Cowboy: new ImageSource('images/cowman1.png'),
    Cowboy2: new ImageSource('images/cowman2.png'),
    Cactus: new ImageSource('images/cactus.png'),
    Background: new ImageSource('images/desert-background.png', { wrapping: ImageWrapping.Repeat}),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }