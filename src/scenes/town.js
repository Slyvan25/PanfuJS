let interactables = [];
class TownScene extends Phaser.Scene {
    scene = {};

    constructor (config)
    {
        super('town');
    }

    async getScene() {
        const scene = fetch("./scenes/town/scene.json").then(response => response.json());
        return scene;
    }

    async preload ()
    {
        this.load.image("floor", "./scenes/town/floor.png");
        this.load.audio("background", ["./scenes/town/background.mp3"]);
        let scene = await this.getScene();

        for (let image = 0; image < scene.images.length; image++) {
            const imageElement = scene.images[image];
            this.load.image(imageElement.name, imageElement.location);
        }

    }

    async create () {
        let scene = await this.getScene();
        interactables = [];

        // load images
        for (let image = 0; image < scene.images.length; image++) {
            const imageElement = scene.images[image];
            const loadedImage = this.add.image(imageElement.x, imageElement.y, imageElement.name);
            if (imageElement.interactable) {
                let interactable = loadedImage.setInteractive();
                interactables.push(interactable);
            }
            loadedImage.setScale(imageElement.scale);
        }

        for (let animation = 0; animation < scene.animations.length; animation++) {
            const sceneAnimation = scene.animations[animation];
            this.anims.create(sceneAnimation.animation);
            
            let loadedAnimation = this.add.sprite(sceneAnimation.x,sceneAnimation.y, sceneAnimation.animation.frames[0].key).play(sceneAnimation.animation.key);
            loadedAnimation.setScale(sceneAnimation.scale);
        }

        let backgroundMusic = this.sound.add("background", { loop: true });
        backgroundMusic.play();

        console.log(interactables)
    }

    update () {
        if (interactables.length > 0) {
            interactables[0].on("pointerover", pointer => {
                console.log(pointer);
            });
        }
    }

    
}
