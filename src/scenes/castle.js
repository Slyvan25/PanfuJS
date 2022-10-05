class CastleScene extends Phaser.Scene {
    scene = {};

    constructor (config)
    {
        super('castle');
    }

    async getScene() {
        const scene = fetch("./scenes/castle/scene.json").then(response => response.json());
        return scene
    }

    async preload ()
    {
        this.load.image("castleFloor", "./scenes/castle/floor.png");
        let scene = await this.getScene();
        this.load.audio("castleBackground", ["./scenes/castle/background.mp3"]);

        for (let image = 0; image < scene.images.length; image++) {
            const imageElement = scene.images[image];
            this.load.image(imageElement.name, imageElement.location);
        }

    }

    async create ()
    {
        let scene = await this.getScene();

        for (let image = 0; image < scene.images.length; image++) {
            const imageElement = scene.images[image];
            const loadedImage = this.add.image(imageElement.x, imageElement.y, imageElement.name);
            loadedImage.setScale(imageElement.scale)
        }

        for (let animation = 0; animation < scene.animations.length; animation++) {
            const sceneAnimation = scene.animations[animation];
            this.anims.create(sceneAnimation.animation)
            
            let loadedAnimation = this.add.sprite(sceneAnimation.x,sceneAnimation.y, sceneAnimation.animation.frames[0].key).play(sceneAnimation.animation.key)
            loadedAnimation.setScale(sceneAnimation.scale)
        }

        let backgroundMusic = this.sound.add("castleBackground", { loop: true });
        backgroundMusic.play();

    }

}
